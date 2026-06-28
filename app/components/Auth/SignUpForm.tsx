"use client";

import { useAuthModalStore } from "@/store/useAuthModalStore";
import BaseInput from "../BaseComponents/BaseInput";
import { register } from "@/app/actions/registerActions";
import BaseButton from "../BaseComponents/BaseButton";

const SignUpForm = () => {
  const { setView, closeModal } = useAuthModalStore();

  const handleSubmit = async (formData: FormData) => {
    const res = await register(formData);
    if (res?.error) alert(res.error);
    else alert(res?.success || "ثبت‌نام با موفقیت انجام شد");
    closeModal();
  };

  return (
    <form action={handleSubmit} className="grow flex flex-col">
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
        label="رمز عبور"
        className="mb-4"
      />

      <button
        type="submit"
        className="
            w-full h-11 rounded-xl
            bg-primary-shade-1 text-white font-semibold
            shadow-lg shadow-[#184025]/20
            transition-all duration-200
            hover:bg-primary hover:-translate-y-0.5
            active:translate-y-0 mt-auto
          "
      >
        ایجاد حساب کاربری
      </button>

      <p className="text-center text-sm text-gray-10 pt-1">
        قبلاً ثبت‌نام کردید؟{" "}
        <BaseButton
          onClick={() => {
            setView("signin");
          }}
          className="underline cursor-pointer"
          variant="ghost"
        >
          وارد شوید
        </BaseButton>
      </p>
    </form>
  );
};

export default SignUpForm;
