"use client";
import { login } from "../../actions/loginActions";
import BaseButton from "../BaseComponents/BaseButton";
import { useActionState, useEffect } from "react";
import BaseInput from "../BaseComponents/BaseInput";
import Image from "next/image";
import { useAuthModalStore } from "@/store/useAuthModalStore";

const SignInForm = () => {
  const [state, formAction] = useActionState(login, {
    message: null,
    errors: {},
  });

  const { setView,closeModal } = useAuthModalStore();

  useEffect(() => {
    if (!state?.message && Object.keys(state?.errors || {}).length === 0) {
      closeModal();
    }
  }, [state, closeModal]);

  return (
    <>
      {" "}
      <Image
        src={"/images/mainLogo.png"}
        className="mx-auto mb-4"
        alt="logo"
        width={100}
        height={50}
      />
      <p className="text-center mb-8">
        به <span className="text-primary">اوتانا </span> خوش آمدید.
      </p>
      <form action={formAction} className="grow flex flex-col">
        <BaseInput
          name="email"
          type="email"
          label="ایمیل"
          placeholder="example@mail.com"
          error={state.errors?.email}
        />

        <BaseInput
          name="password"
          type="password"
          label="رمز عبور"
          placeholder="••••••••"
          error={state.errors?.password}
          className="mb-4"
        />

        {state.message && (
          <p className="rounded-xl border border-red-200 bg-red-50 px-3 text-right text-sm text-error">
            {state.message}
          </p>
        )}

        <BaseButton
          type="submit"
          variant="primary"
          className="
          mt-auto w-full 
        "
        >
          ورود
        </BaseButton>
        <p className="mt-6 text-center text-sm text-gray-10">
          حساب کاربری ندارید؟{" "}
          <BaseButton
            onClick={() => setView("signup")}
            className="underline cursor-pointer"
            variant="ghost"
          >
            ثبت‌نام کنید
          </BaseButton>
        </p>
      </form>
    </>
  );
};

export default SignInForm;
