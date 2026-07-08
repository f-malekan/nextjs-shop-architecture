"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { saveContactMessage } from "../../actions/contactUsActions";
import BaseButton from "../BaseComponents/BaseButton";
import BaseInput from "../BaseComponents/BaseInput";
import BaseTextarea from "../BaseComponents/BaseTextArea";
import BaseSelect from "../BaseComponents/BaseSelect";
import { contactSchema } from "@/validations";

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUsForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormData) => {
    setIsSubmitting(true);

    const result = await saveContactMessage(values);

    if (result.success) {
      setIsSuccess(true);
      reset();
      alert("پیام شما با موفقیت ثبت شد");
    } else {
      alert(result.error);
    }

    setIsSubmitting(false);
  };

  return (
    <div className="rounded-2xl border border-gray-4 overflow-hidden p-4 lg:p-8">
      <h2 className="text-2xl font-bold mb-6">فرم ارتباط با ما</h2>

      {isSuccess && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          پیام شما با موفقیت ارسال شد! به زودی با شما تماس می‌گیریم.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <BaseInput
          label="نام و نام خانوادگی"
          error={errors.name ? [errors.name.message!] : undefined}
          {...register("name")}
        />

        <BaseInput
          label="شماره موبایل"
          type="phone"
          placeholder="example@gmail.com"
          dir="ltr"
          error={errors.phone ? [errors.phone.message!] : undefined}
          {...register("phone")}
        />

        <BaseSelect
          label="موضوع"
          error={errors.subject?.message}
          {...register("subject")}
        >
          <option value="">انتخاب موضوع...</option>
          <option value="support">پشتیبانی سفارشات</option>
          <option value="collab">همکاری تجاری</option>
          <option value="other">سایر موارد</option>
        </BaseSelect>

        <BaseTextarea
          label="متن پیام"
          placeholder="پیام خود را اینجا بنویسید..."
          rows={4}
          error={errors.message?.message}
          {...register("message")}
        />

        <BaseButton
          variant="primary"
          disabled={isSubmitting}
          type="submit"
          className={`w-full py-3 px-6"              }`}
        >
          {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
        </BaseButton>
      </form>
    </div>
  );
};

export default ContactUsForm;
