"use client";

import { useAuthModalStore } from "@/store/useAuthModalStore";
import BaseInput from "../BaseComponents/BaseInput";
import { signUp } from "@/app/actions/authActions";
import BaseButton from "../BaseComponents/BaseButton";
import { toast } from "sonner";
import { useActionState, useEffect } from "react";

const SignUpForm = () => {
  const { setView, closeModal } = useAuthModalStore();

  const [state, formAction] = useActionState(signUp, {
    success: false,
    message: null,
    errors: {},
  });

  useEffect(() => {
    if (!state.message) return;

    if (!state.success) {
      toast.error(state.message);
      return;
    }

    if (Object.keys(state.errors || {}).length === 0) {
      toast.success(state.message);
      closeModal();
    }
  }, [state, closeModal]);

  return (
    <form action={formAction} className="grow flex flex-col">
      <BaseInput
        name="name"
        label="نام"
        type="text"
        required
        placeholder="نام خود را وارد کنید"
        error={state.errors?.name}
      />

      <BaseInput
        name="phone"
        type="phone"
        required
        placeholder="09999999999"
        label="شماره موبایل"
        error={state.errors?.phone}
      />

      <BaseInput
        name="password"
        type="password"
        required
        placeholder="••••••••"
        label="رمز عبور"
        className="mb-4"
        error={state.errors?.password}
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
