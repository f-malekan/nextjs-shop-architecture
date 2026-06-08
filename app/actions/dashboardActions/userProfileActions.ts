"use server";

import { auth } from "@/app/auth";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import {
  UpdateProfileInput,
  updateProfileSchema,
  updatePasswordSchema,
  UpdatePasswordInputs,
} from "@/lib/validations/account";

export const getUser = async () => {
  try {
    const session = await auth();

    const user = await prisma.user.findUnique({
      where: { id: session?.user?.id },
    });

    return { success: true, data: user };
  } catch {
    return {
      success: false,
      message: "خطا در دریافت اطلاعات کاربر",
    };
  }
};

export const updateProfile = async (data: UpdateProfileInput) => {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return { success: false, message: "شما دسترسی لازم را ندارید" };
    }

    const parsed = updateProfileSchema.safeParse(data);

    if (!parsed.success) {
      return { success: false, message: "داده‌های وارد شده نامعتبر هستند" };
    }

    const { name, email, phone } = parsed.data;

    if (email) {
      const existingUser = await prisma.user.findFirst({
        where: {
          email,
          NOT: { id: session.user.id },
        },
      });

      if (existingUser) {
        return {
          success: false,
          message: "این ایمیل قبلاً توسط شخص دیگری ثبت شده است",
        };
      }
    }

    await prisma.user.update({
      where: { id: session.user.id },
      data: { name, email, phone },
    });

    return {
      success: true,
      message: "اطلاعات کاربری با موفقیت بروزرسانی شد",
    };
  } catch (error) {
    console.error("Update Profile Error:", error);
    return { success: false, message: "خطایی در هنگام بروزرسانی رخ داد" };
  }
};

export const changePassword = async (data: UpdatePasswordInputs) => {
  try {
    const session = await auth();

    if (!session?.user?.id) {
      return { success: false, message: "ابتدا باید وارد حساب خود شوید" };
    }

    const parsed = updatePasswordSchema.safeParse(data);
    if (!parsed.success) {
      return { success: false, message: "اطلاعات وارد شده معتبر نیست" };
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user?.password) {
      return {
        success: false,
        message: "رمز عبوری برای این کاربر تعریف نشده است",
      };
    }

    const valid = await bcrypt.compare(data.currentPassword, user.password);
    if (!valid) {
      return { success: false, message: "رمز عبور فعلی اشتباه است" };
    }

    if (data.newPassword !== data.confirmPassword)
      return { success: false, message: "تکرار رمز عبور جدید صحیح نیست" };

    const hashed = await bcrypt.hash(data.newPassword, 10);
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashed },
    });

    return { success: true, message: "رمز عبور با موفقیت تغییر کرد" };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "خطایی در برقراری ارتباط با سرور رخ داد",
    };
  }
};
