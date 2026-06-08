"use server";
import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import type { ActionResultType, OrderType, OrderStatus } from "@/types";

export const getUserOrders = async (): Promise<
  ActionResultType<OrderType[]>
> => {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return {
        success: false,
        message: "لطفاً وارد شوید",
      };
    }

    const orders = await prisma.order.findMany({
      where: { userId: session.user.id },
    });

    return {
      success: true,
      data: orders.map((order) => ({
        ...order,
        totalAmount: order.totalAmount.toNumber(),
        status: order.status as OrderStatus,
      })),
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "خطا در دریافت سفارش‌ها",
    };
  }
};
