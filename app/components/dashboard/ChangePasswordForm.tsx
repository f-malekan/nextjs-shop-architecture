"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updatePasswordSchema,
  UpdatePasswordInputs,
} from "@/lib/validations/account";

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
      if (!result?.success) {
        alert(result.message);
      } else {
        reset();
        alert("رمز عبور با موفقیت تغییر کرد ✅");
      }
    } catch (error: any) {
      alert("خطایی رخ داده است. مجدداً تلاش کنید.");
    }
  }

  return (
    /* کانتینر مشابه فرم قبلی برای یکپارچگی ظاهری */
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100 mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
        تغییر رمز عبور
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-6">
          {/* رمز فعلی - تمام عرض */}
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

          {/* رمز جدید و تکرار آن در دو ستون (در دسکتاپ) */}
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

        {/* بخش دکمه با تراز بندی مشابه فرم قبلی */}
        <div className="flex justify-end pt-4 border-t">
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
}
export default ChangePasswordForm;