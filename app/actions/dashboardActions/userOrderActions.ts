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
      include: {
        address: true,
        items: {
          include: {
            variant: {
              include: {
                color: true,
                size: true,
              },
            },
            product: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const formattedOrders: OrderType[] = orders.map((order) => ({
      ...order,
      totalAmount: Number(order.totalAmount),
      totalDiscount: Number(order.totalDiscount),
      shippingCost: Number(order.shippingCost),
      status: order.status as OrderStatus,

      items: order.items.map((item) => ({
        ...item,
        price: Number(item.price),
        discount: Number(item.discount),
        product: item.product
          ? {
              ...item.product,
              price: Number(item.product.price),
              discountPercent: item.product.discountPercent ?? null,
            }
          : undefined,
      })),
    }));

    return {
      success: true,
      data: formattedOrders,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "خطایی در دریافت سفارش‌ها رخ داد",
    };
  }
};
