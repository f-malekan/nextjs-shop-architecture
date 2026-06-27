"use server";

import prisma from "@/lib/prisma";
import { auth } from "../auth";
import { Prisma } from "../generated/prisma/client";
import type { ShoppingCartItemType } from "@/types";

interface TempOrderItem {
  productId: string;
  variantId: string;
  quantity: number;
  price: Prisma.Decimal;
}

export async function createOrder(items: ShoppingCartItemType[]) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return {
      success: false,
      message: "لطفاً ابتدا وارد حساب کاربری خود شوید.",
    };
  }

  if (items.length === 0) {
    return {
      success: false,
      message: "سبد خرید شما خالی است.",
    };
  }

  try {
    return await prisma.$transaction(async (tx) => {
      const variantIds = items.map((i) => i.variantId);
      const dbVariants = await tx.productVariant.findMany({
        where: { id: { in: variantIds } },
        include: { product: true },
      });

      const variantMap = new Map(dbVariants.map((v) => [v.id, v]));

      let totalAmount = new Prisma.Decimal(0);
      const orderItemsData: TempOrderItem[] = [];
      const stockUpdates = [];

      for (const item of items) {
        const dbVariant = variantMap.get(item.variantId);

        if (!dbVariant) {
          throw new Error(`محصول ${item.name} یافت نشد.`);
        }

        if (dbVariant.stock < item.quantity) {
          throw new Error(`موجودی محصول ${item.name} کافی نیست.`);
        }

        const unitPrice = new Prisma.Decimal(
          dbVariant.product.price.toString(),
        );
        const itemTotal = unitPrice.mul(item.quantity);
        totalAmount = totalAmount.add(itemTotal);

        orderItemsData.push({
          productId: dbVariant.productId,
          variantId: dbVariant.id,
          quantity: item.quantity,
          price: unitPrice,
        });

        stockUpdates.push({
          id: dbVariant.id,
          quantity: item.quantity,
        });
      }

      const order = await tx.order.create({
        data: {
          userId,
          totalAmount,
          status: "PENDING",
          addressId: "1",
          shippingReceiverName: "string",
          shippingPhone: "string",
          shippingProvince: "string",
          shippingCity: "string",
          shippingAddress: "string",
          shippingPostalCode: "string",
        },
      });

      await tx.orderItem.createMany({
        data: orderItemsData.map((item) => ({
          ...item,
          orderId: order.id,
        })),
      });

      for (const update of stockUpdates) {
        await tx.productVariant.update({
          where: { id: update.id },
          data: {
            stock: {
              decrement: update.quantity,
            },
          },
        });
      }

      return {
        success: true,
        message: "سفارش شما با موفقیت ثبت شد.",
        orderId: order.id,
      };
    });
  } catch (error: unknown) {
    const message =
      error instanceof Error
        ? error.message
        : String(error) || "خطایی در ثبت سفارش رخ داد.";
    return {
      success: false,
      message,
    };
  }
}
