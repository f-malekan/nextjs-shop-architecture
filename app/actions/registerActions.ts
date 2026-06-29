"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signIn } from "../auth";
import { redirect } from "next/navigation";

export const register = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "ایمیل و رمز عبور الزامی است" };
  }

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "این ایمیل قبلاً ثبت شده است" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });
  try {
    await signIn("credentials", {
      email,
      password,
    });
    redirect("/");
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "ثبت‌نام انجام شد اما ورود خودکار ناموفق بود.",
    };
  }
  return { success: "ثبت‌نام با موفقیت انجام شد!" };
};
