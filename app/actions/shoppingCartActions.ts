"use server";

import prisma from "@/lib/prisma";
import { auth } from "../auth";
import { Prisma } from "../generated/prisma/client";
import type { shoppingCartItemType } from "@/types";

export async function createOrder(items: shoppingCartItemType[]) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) {
    return {
      success: false,
      message: "لطفاً ابتدا وارد حساب کاربری خود شوید.",
    };
  }

  if (items.length == 0) {
    return { success: false, message: "سبد خرید شما خالی است." };
  }

  return await prisma.$transaction(async (tx) => {
    const variantIds = items.map((i) => i.variantId);

    const dbVariants = await tx.productVariant.findMany({
      where: { id: { in: variantIds } },
      include: {
        product: true,
      },
    });

    const variantMap = new Map(dbVariants.map((v) => [v.id, v]));

    // ۳. ایجاد سفارش اولیه (مبلغ موقت ۰)
    const order = await tx.order.create({
      data: {
        userId: userId,
        totalAmount: 0,
        status: "PENDING",
      },
    });

    let totalAmount = new Prisma.Decimal(0);
    const orderItemsData = [];

    for (const item of items) {
      const dbVariant = variantMap.get(item.variantId);

      if (!dbVariant) {
        throw new Error(`محصول ${item.name} یافت نشد.`);
      }

      if (dbVariant.stock < item.quantity) {
        throw new Error(`موجودی محصول ${item.name} کافی نیست.`);
      }

      const unitPrice = new Prisma.Decimal(dbVariant.product.price.toString());
      const itemTotal = unitPrice.mul(item.quantity);
      totalAmount = totalAmount.add(itemTotal);

      orderItemsData.push({
        orderId: order.id,
        productId: dbVariant.productId,
        variantId: dbVariant.id,
        quantity: item.quantity,
        price: unitPrice,
      });
    }

    await tx.orderItem.createMany({
      data: orderItemsData,
    });

    for (const item of items) {
      await tx.productVariant.update({
        where: { id: item.variantId },
        data: {
          stock: { decrement: item.quantity },
        },
      });
    }
    return { success: true, message: "سفارش شما ثبت شد." };
  });
}
