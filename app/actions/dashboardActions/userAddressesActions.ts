"use server";

import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import type { AddressType } from "@/types";
import { revalidatePath } from "next/cache";

const getUserId = async () => {
  const session = await auth();
  return session?.user?.id;
};

export const saveAddress = async (data: Partial<AddressType>) => {
  try {
    const userId = await getUserId();
    if (!userId) return { success: false, message: "لطفاً ابتدا وارد شوید." };

    if (data.isDefault) {
      await prisma.address.updateMany({
        where: { userId, isDefault: true },
        data: { isDefault: false },
      });
    }

    if (data.id) {
      await prisma.address.update({
        where: { id: data.id, userId },
        data: {
          title: data.title,
          receiverName: data.receiverName || null,
          phoneNumber: data.phoneNumber || null,
          province: data.province,
          city: data.city,
          fullAddress: data.fullAddress,
          postalCode: data.postalCode,
          isDefault: data.isDefault,
        },
      });
    } else {
      await prisma.address.create({
        data: {
          title: data.title!,
          receiverName: data.receiverName || null,
          phoneNumber: data.phoneNumber || null,
          province: data.province!,
          city: data.city!,
          fullAddress: data.fullAddress!,
          postalCode: data.postalCode!,
          isDefault: data.isDefault || false,
          userId: userId,
          isDeleted: false,
        },
      });
    }

    revalidatePath("/dashboard/addresses");
    return { success: true, message: "تغییرات با موفقیت ذخیره شد." };
  } catch (error) {
    console.error("SAVE/UPDATE ADDRESS ERROR:", error);
    return { success: false, message: "خطا در برقراری ارتباط با دیتابیس" };
  }
};

export const deleteAddress = async (addressId: string) => {
  try {
    const userId = await getUserId();
    if (!userId) return { success: false, message: "دسترسی غیرمجاز" };

    await prisma.address.update({
      where: { id: addressId, userId },
      data: { isDeleted: true },
    });

    revalidatePath("/dashboard/addresses");
    return { success: true, message: "آدرس با موفقیت حذف شد." };
  } catch (error) {
    console.error("DELETE ADDRESS ERROR:", error);
    return { success: false, message: "حذف آدرس با خطا مواجه شد." };
  }
};

export const getUserAddresses = async () => {
  try {
    const userId = await getUserId();
    if (!userId)
      return { success: false, message: "شما دسترسی لازم را ندارید" };

    const addresses = await prisma.address.findMany({
      where: {
        userId: userId,
        isDeleted: false,
      },
      orderBy: { isDefault: "desc" },
    });

    return { success: true, data: addresses };
  } catch (error) {
    console.error(error);
    return { success: false, message: "خطایی در دریافت اطلاعات رخ داد." };
  }
};
