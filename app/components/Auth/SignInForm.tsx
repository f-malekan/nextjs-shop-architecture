"use client";

import { login } from "../../actions/loginActions";
import BaseButton from "../BaseComponents/BaseButton";
import { useActionState } from "react";
import BaseInput from "../BaseComponents/BaseInput";

const SignInForm = () => {
  const [state, formAction] = useActionState(login, {
    message: null,
    errors: {},
  });

  return (
    <form action={formAction} className="space-y-5">
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
      />

      {state.message && (
        <p className="rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-right text-sm text-red-700">
          {state.message}
        </p>
      )}

      <BaseButton
        type="submit"
        variant="primary"
        className="
          mt-2 h-11 w-full
        "
      >
        ورود
      </BaseButton>
    </form>
  );
};

export default SignInForm;
