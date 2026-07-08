import { z } from "zod"

const phoneSchema = z
  .string()
  .regex(/^09\d{9}$/, "فرمت شماره موبایل اشتباه است")

export const updateProfileSchema = z.object({
  name: z.string().min(2, "Name too short").max(50),
  phone: phoneSchema,
})

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>

export const updatePasswordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(8),
  confirmPassword: z.string().min(8),
})

export type UpdatePasswordInputs = z.infer<typeof updatePasswordSchema>

export const loginSchema = z.object({
  phone: phoneSchema,
  password: z.string().min(6, "رمز عبور حداقل 6 کاراکتر باشد"),
})

export const signUpSchema = z.object({
  phone: phoneSchema,
  password: z.string().min(6, "رمز عبور حداقل 6 کاراکتر باشد"),
  name: z.string().min(3, "نام باید حداقل 3 کاراکتر باشد")
})

export const addressSchema = z.object({
  title: z.string().min(2, "عنوان آدرس الزامی است (مثلاً: خانه، محل کار)"),

  receiverName: z
    .string()
    .optional()
    .transform((val) => (val === "" ? undefined : val))
    .pipe(z.string().min(3, "نام گیرنده باید حداقل ۳ حرف باشد.").optional()),

  phoneNumber: phoneSchema.optional(),

  province: z.string().min(1, "لطفاً استان را انتخاب کنید"),
  city: z.string().min(1, "لطفاً شهر را انتخاب کنید"),
  fullAddress: z.string().min(10, "آدرس دقیق باید حداقل ۱۰ کاراکتر باشد"),
  postalCode: z.string().length(10, "کد پستی باید ۱۰ رقم باشد"),
  isDefault: z.boolean().default(false).optional(),
})

export const contactSchema = z.object({
  name: z.string().min(3, "نام باید حداقل ۳ کاراکتر باشد"),
  phone: phoneSchema,
  subject: z.string().min(1, "لطفاً یک موضوع انتخاب کنید"),
  message: z.string().min(10, "متن پیام باید حداقل ۱۰ کاراکتر باشد"),
})