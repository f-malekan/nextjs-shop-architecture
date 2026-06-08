import Link from "next/link";
import SignInForm from "../components/Auth/SignInForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ورود به حساب کاربری",
  description: "برای دسترسی به پنل و پیگیری سفارشات وارد شوید.",
  robots: {
    index: false,
    follow: false,
  },
};

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-gray-100">
        <h2 className="mb-8 text-center text-2xl font-bold text-gray-800">
          ورود به حساب کاربری
        </h2>

        <SignInForm />

        <p className="mt-6 text-center text-sm text-gray-600">
          حساب کاربری ندارید؟{" "}
          <Link
            href="/register"
            className="
              font-semibold text-[#184025]
              underline underline-offset-4 decoration-emerald-400/70
              transition hover:decoration-emerald-600
            "
          >
            ثبت‌نام کنید
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
