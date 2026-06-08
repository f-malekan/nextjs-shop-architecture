"use server";

import { signIn } from "../auth";
import { z } from "zod";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export type State = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const loginSchema = z.object({
  email: z.string().min(1, "ایمیل الزامی است").email("ایمیل معتبر نیست"),
  password: z.string().min(6, "رمز عبور حداقل 6 کاراکتر باشد"),
});

export const login = async (
  prevState: State,
  formData: FormData,
): Promise<State> => {
  const validatedFields = loginSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "لطفاً خطاهای فرم را برطرف کنید.",
    };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });

    return { message: "ورود موفقیت‌آمیز بود" };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return {
      message: "ایمیل یا رمز عبور اشتباه است.",
    };
  }
};
