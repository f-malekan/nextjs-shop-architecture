"use server";
import prisma from "@/lib/prisma";

export const saveContactMessage = async (data: any) => {
  try {
    await prisma.contactMessage.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    });
    return { success: true, message: "فرم با موفقیت ارسال شد." };
  } catch (error) {
    console.error(error);
    return { success: false, error: "خطا در ثبت در دیتابیس" };
  }
};
