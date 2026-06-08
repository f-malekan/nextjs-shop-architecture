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

const ProfileForm = ({ user }: { user: any }) => {
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
    /* یک کانتینر با حداکثر عرض مشخص (مثلاً max-w-xl) و وسط‌چین */
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
        ویرایش اطلاعات کاربری
      </h2>

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

        {/* بخش دکمه با تراز بندی بهتر */}
        <div className="flex justify-end pt-4 border-t">
          <div className="w-full md:w-1/3">
            <BaseButton
              type="submit"
              disabled={isSubmitting}
              className="w-full" // دکمه را در موبایل تمام عرض و در دسکتاپ متناسب می‌کند
            >
              {isSubmitting ? "در حال بروزرسانی..." : "ذخیره تغییرات"}
            </BaseButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
