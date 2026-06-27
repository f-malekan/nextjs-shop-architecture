'use server'
import prisma from "@/lib/prisma";
import type { ActionResultType, Product } from "@/types";
import { cache } from "react";

export const getAllProducts = async (
  selectedCategory: string | undefined,
  searchedWord: string | undefined,
  page: number = 1,
) => {
  const limit = 20;

  const where = {
    ...(searchedWord && {
      name: { contains: searchedWord },
    }),
    ...(selectedCategory && {
      category: { slug: selectedCategory },
    }),
  };

  try {
    const [products, totalCount] = await Promise.all([
      prisma.product.findMany({
        where,
        include: {
          variants: { include: { color: true, size: true } },
        },
        take: limit,
        skip: (page - 1) * limit,
      }),
      prisma.product.count({ where }),
    ]);

    const normalizedProducts = products.map((product) => ({
      ...product,
      price: Number(product.price),
    }));

    return {
      success: true,
      data: normalizedProducts,
      totalCount,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    return {
      success: false,
      message: "خطا در دریافت محصولات",
    };
  }
};

export const getLatestProducts = async (): Promise<
  ActionResultType<Product[]>
> => {
  try {
    const products = await prisma.product.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        variants: {
          include: { color: true, size: true },
        },
      },
    });

    const normalizedProducts = products.map((product) => ({
      ...product,
      price: Number(product.price),
    }));

    return { success: true, data: normalizedProducts };
  } catch (error) {
    console.error("Error fetching latest products:", error);

    return {
      success: false,
      message: "خطا در دریافت محصولات",
    };
  }
};

export const getProductWithVariants = cache(
  async (id: string): Promise<ActionResultType<Product>> => {
    try {
      const product = await prisma.product.findUnique({
        where: { id },
        include: {
          variants: {
            include: { color: true, size: true },
          },
        },
      });

      if (!product)
        return {
          success: false,
          message: "محصول یافت نشد",
        };

      const formattedProduct = {
        ...product,
        price: Number(product.price),
      };

      return { success: true, data: formattedProduct };
    } catch (error) {
      console.error("Error fetching product:", error);

      return {
        success: false,
        message: "خطا در دریافت اطلاعات محصول",
      };
    }
  },
);

export const searchProducts = async (searchedWord: string) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          contains: searchedWord,
        },
      },
      include: {
        variants: { include: { color: true, size: true } },
      },
      take: 4,
    });

    const normalizedProducts = products.map((product) => ({
      ...product,
      price: Number(product.price),
    }));

    return {
      success: true,
      data: normalizedProducts,
    };
  } catch (error) {
    console.error("Error searching products:", error);
    return {
      success: false,
      message: "خطا در جستجوی محصولات",
    };
  }
};
