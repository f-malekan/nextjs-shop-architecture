"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  updateProfileSchema,
  UpdateProfileInput,
} from "@/lib/validations/account";
import { updateProfile } from "@/app/actions/dashboardActions/userProfileActions";
import BaseInput from "../BaseComponents/BaseInput";
import BaseButton from "../BaseComponents/BaseButton";
import { UserType } from "@/types";
import DashboardDefaultContainer from "./DashboardDefaultContainer";

const ProfileForm = ({ user }: { user: { email: string; name: string } }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileInput>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
    },
  });

  async function onSubmit(data: UpdateProfileInput) {
    try {
      const result = await updateProfile(data);
      if (result?.success) {
        reset();
        alert("رمز عبور با موفقیت تغییر کرد ✅");
      } else {
        alert(result.message);
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
    <DashboardDefaultContainer title=" اطلاعات حساب کاربری">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <BaseInput
            {...register("name")}
            label="نام و نام خانوادگی"
            placeholder="نام خود را وارد کنید"
            error={errors.name ? [errors.name.message!] : undefined}
          />
          <BaseInput
            {...register("email")}
            label="آدرس ایمیل"
            placeholder="example@mail.com"
            error={errors.email ? [errors.email.message!] : undefined}
          />
        </div>

        <div className="flex justify-end pt-4">
          <div className="w-full md:w-1/3">
            <BaseButton
              type="submit"
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? "در حال بروزرسانی..." : "ذخیره تغییرات"}
            </BaseButton>
          </div>
        </div>
      </form>
    </DashboardDefaultContainer>
  );
};

export default ProfileForm;
