"use cache";
import { cacheLife } from "next/cache";

import prisma from "@/lib/prisma";
import { CategoryType, ActionResultType } from "@/types";

export const getCategories = async (): Promise<
  ActionResultType<CategoryType[]>
> => {
  cacheLife('days')
  try {
    const categories = await prisma.category.findMany();

    return { success: true, data: categories };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      success: false,
      message: "مشکلی در دریافت دسته‌بندی‌ها پیش آمد",
    };
  }
};

export const getCategoriesWithProducts = async () => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        products: {
          take: 4,
          orderBy: {
            createdAt: "desc",
          },
          include: {
            variants: {
              include: { color: true, size: true },
            },
          },
        },
      },
    });
    return { success: true, data: categories };
  } catch {
    return {
      success: false,
      message: "مشکلی در دریافت دسته‌بندی‌ها پیش آمد",
    };
  }
};
