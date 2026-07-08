"use server";

import { loginSchema, signUpSchema } from "@/validations";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signIn } from "../auth";
import type { ActionResultType } from "@/types";
import { validateFields } from "@/utils";
import { toast } from "sonner";

export const login = async (
  prevState: ActionResultType,
  formData: FormData,
): Promise<ActionResultType> => {
  const res = validateFields(loginSchema, formData);
  if (!res.success) {
    return {
      success: false,
      message: "لطفاً اطلاعات وارد شده را بررسی کنید",
      errors: res.error.flatten().fieldErrors,
    };
  }

  const { phone, password } = res.data;
  try {
    await signIn("credentials", {
      phone,
      password,
      redirect: false,
    });

    return { success: true, message: "ورود موفقیت‌آمیز بود" };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "مشکلی پیش آمده است",
    };
  }
};

export const signUp = async (
  prevState: ActionResultType,
  formData: FormData,
): Promise<ActionResultType> => {
    const res = validateFields(signUpSchema, formData);


  if (!res.success) {
    return {
      success: false,
      message: "لطفاً اطلاعات وارد شده را بررسی کنید",
      errors: res.error.flatten().fieldErrors,
    };
  }

  const { phone, password, name } = res.data;

  if (!phone || !password) {
    return { success: false, message: "شماره موبایل و رمز عبور الزامی است" };
  }

  const existingUser = await prisma.user.findUnique({
    where: { phone },
  });

  if (existingUser) {
    return { success: false, message: "این شماره قبلاً ثبت شده است" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      phone,
      password: hashedPassword,
    },
  });
  try {
    await signIn("credentials", {
      phone,
      password,
      redirect: false,
    });
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "ثبت‌نام انجام شد اما ورود خودکار ناموفق بود.",
    };
  }
  return { success: true, message: "ثبت‌نام با موفقیت انجام شد!" };
};
