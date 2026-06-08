"use client";

import BaseInput from "../components/BaseComponents/BaseInput";
import { register } from "../actions/registerActions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت‌نام",
  description: "برای ایجاد حساب کاربری و شروع خرید در فروشگاه ثبت‌نام کنید.",
  robots: {
    index: false,
    follow: false,
  },
};

const SignUpPage = () => {
  const handleSubmit = async (formData: FormData) => {
    const res = await register(formData);
    if (res?.error) alert(res.error);
    else alert(res?.success || "ثبت‌نام با موفقیت انجام شد");
  };

  return (
    <div className="min-h-screen bg-[#C3EFD4] px-4 py-10 flex items-center justify-center">
      <form
        action={handleSubmit}
        className="
          w-full max-w-md rounded-3xl bg-white/80 backdrop-blur
          p-8 sm:p-10
          border border-emerald-200/60
          shadow-xl shadow-emerald-900/10
          space-y-5
        "
      >
        <h2 className="text-center text-3xl font-extrabold text-[#184025]">
          ثبت‌نام
        </h2>
        <p className="text-center text-sm text-[#184025]/70 -mt-2">
          اطلاعاتت رو وارد کن تا حسابت ساخته بشه
        </p>

        <BaseInput
          name="name"
          label="نام"
          type="text"
          required
          placeholder="نام خود را وارد کنید"
        />

        <BaseInput
          name="email"
          type="email"
          required
          placeholder="example@mail.com"
          label="ایمیل"
        />

        <BaseInput
          name="password"
          type="password"
          required
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="
            w-full h-11 rounded-xl
            bg-[#184025] text-white font-semibold
            shadow-lg shadow-[#184025]/20
            transition-all duration-200
            hover:bg-[#0f2f1a] hover:-translate-y-0.5
            active:translate-y-0
            focus:outline-none focus:ring-4 focus:ring-[#184025]/25
          "
        >
          ایجاد حساب کاربری
        </button>

        <p className="text-center text-sm text-[#184025]/70 pt-1">
          قبلاً ثبت‌نام کردید؟{" "}
          <a
            href="/login"
            className="
              font-semibold text-[#184025]
              underline underline-offset-4 decoration-emerald-400/70
              hover:decoration-emerald-600
              transition
            "
          >
            وارد شوید
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUpPage;
