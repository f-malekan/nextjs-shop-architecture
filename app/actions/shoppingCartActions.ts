"use server";

import prisma from "@/lib/prisma";
import { auth } from "../auth";
import { Prisma } from "../generated/prisma/client";
import type { shoppingCartItemType } from "@/types";

// تعریف یک تایپ موقت برای آیتم‌ها بدون orderId جهت رفع خطای TS
interface TempOrderItem {
  productId: string;
  variantId: string;
  quantity: number;
  price: Prisma.Decimal;
}

export async function createOrder(items: shoppingCartItemType[]) {
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

      // ۴. اعتبارسنجی تک‌تک آیتم‌ها و محاسبه قیمت کل
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
          productId: dbVariant.productId,
          variantId: dbVariant.id,
          quantity: item.quantity,
          price: unitPrice,
        });

        // ذخیره اطلاعات برای آپدیت موجودی
        stockUpdates.push({
          id: dbVariant.id,
          quantity: item.quantity,
        });
      }

      // ۵. ایجاد سفارش (Order) با مبلغ نهایی
      const order = await tx.order.create({
        data: {
          userId,
          totalAmount,
          status: "PENDING",
        },
      });

      // ۶. ایجاد جزئیات سفارش (OrderItems) با استفاده از ID سفارش ساخته شده
      await tx.orderItem.createMany({
        data: orderItemsData.map((item) => ({
          ...item,
          orderId: order.id,
        })),
      });

      // ۷. به‌روزرسانی موجودی انبار (کاهش موجودی)
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
  } catch (error: any) {
    // در صورت وقوع هرگونه Error، تراکنش خودکار Rollback می‌شود
    return {
      success: false,
      message: error.message || "خطایی در ثبت سفارش رخ داد.",
    };
  }
}
