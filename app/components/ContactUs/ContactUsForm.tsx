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
import ContactInfo from "./ContactInfo";

const contactSchema = z.object({
  name: z.string().min(3, "نام باید حداقل ۳ کاراکتر باشد"),
  email: z.string().email("آدرس ایمیل معتبر نیست"),
  subject: z.string().min(1, "لطفاً یک موضوع انتخاب کنید"),
  message: z.string().min(10, "متن پیام باید حداقل ۱۰ کاراکتر باشد"),
});

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
    <div
      className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 dir-rtl text-right"
      dir="rtl"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
        <ContactInfo />

        <div className="w-full md:w-2/3 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">ارسال پیام</h2>

          {isSuccess && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              پیام شما با موفقیت ارسال شد! به زودی با شما تماس می‌گیریم.
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <BaseInput
              label="نام و نام خانوادگی"
              placeholder="مثلاً علی علوی"
              error={errors.name ? [errors.name.message!] : undefined}
              {...register("name")}
            />

            <BaseInput
              label="ایمیل"
              type="email"
              placeholder="example@gmail.com"
              dir="ltr"
              error={errors.email ? [errors.email.message!] : undefined}
              {...register("email")}
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
      </div>
    </div>
  );
};

export default ContactUsForm;
