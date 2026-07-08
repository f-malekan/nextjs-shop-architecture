"use server";
import prisma from "@/lib/prisma";

interface ContactMessageData {
    name: string;
    phone: string;
    subject: string;
    message: string;
}

export const saveContactMessage = async (data: ContactMessageData) => {
  try {
    await prisma.contactMessage.create({
      data: {
        name: data.name,
        phone: data.phone,
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
