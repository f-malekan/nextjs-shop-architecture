"use client";
import { login } from "../../actions/authActions";
import BaseButton from "../BaseComponents/BaseButton";
import { useActionState, useEffect } from "react";
import BaseInput from "../BaseComponents/BaseInput";
import Image from "next/image";
import { useAuthModalStore } from "@/store/useAuthModalStore";
import { toast } from "sonner";


const SignInForm = () => {
  const [state, formAction] = useActionState(login, {
    success: false,
    message: null,
    errors: {},
  });

  const { setView, closeModal } = useAuthModalStore();

  useEffect(() => {
      if (!state.message) return;

    if (!state.success) {
      toast.error(state.message);
      return;
    }

    if (Object.keys(state.errors || {}).length === 0) {
      toast.success(state.message)
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
          name="phone"
          type="phone"
          label="شماره موبایل"
          placeholder="09999999999"
          error={state.errors?.phone}
        />

        <BaseInput
          name="password"
          type="password"
          label="رمز عبور"
          placeholder="••••••••"
          error={state.errors?.password}
          className="mb-4"
        />

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
