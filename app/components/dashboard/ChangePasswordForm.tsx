"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updatePasswordSchema, UpdatePasswordInputs } from "@/validations";

import { changePassword } from "@/app/actions/dashboardActions/userProfileActions";
import BaseInput from "../BaseComponents/BaseInput";
import BaseButton from "../BaseComponents/BaseButton";

const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpdatePasswordInputs>({
    resolver: zodResolver(updatePasswordSchema),
  });

  async function onSubmit(data: UpdatePasswordInputs) {
    try {
      const result = await changePassword(data);
      if (result?.success) {
        reset();
        alert("رمز عبور با موفقیت تغییر کرد ✅");
      } else {
        alert(result?.message);
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("An unexpected error occurred", error);
      }
      alert("خطایی رخ داده است. مجدداً تلاش کنید.");
    }
  }

  return (
    <div className="w-full p-6 bg-white rounded-2xl  border border-gray-4">
      <h2 className="text-xl mb-6 border-b pb-4 border-gray-4 text-gray-10">
        تغییر رمز عبور
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          <BaseInput
            type="password"
            label="رمز عبور فعلی"
            placeholder="••••••••"
            {...register("currentPassword")}
            error={
              errors.currentPassword
                ? [errors.currentPassword.message!]
                : undefined
            }
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BaseInput
              type="password"
              label="رمز عبور جدید"
              placeholder="••••••••"
              {...register("newPassword")}
              error={
                errors.newPassword ? [errors.newPassword.message!] : undefined
              }
            />

            <BaseInput
              type="password"
              label="تکرار رمز عبور جدید"
              placeholder="••••••••"
              {...register("confirmPassword")}
              error={
                errors.confirmPassword
                  ? [errors.confirmPassword.message!]
                  : undefined
              }
            />
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <div className="w-full md:w-1/3">
            <BaseButton
              disabled={isSubmitting}
              type="submit"
              className="w-full"
            >
              {isSubmitting ? "در حال بروزرسانی..." : "تغییر رمز عبور"}
            </BaseButton>
          </div>
        </div>
      </form>
    </div>
  );
};
export default ChangePasswordForm;
