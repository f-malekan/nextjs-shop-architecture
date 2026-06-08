import { z } from "zod"

export const updateProfileSchema = z.object({
  name: z.string().min(2, "Name too short").max(50),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10).max(15).optional()
})

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>

export const updatePasswordSchema = z.object({
  currentPassword: z.string().min(6),
  newPassword: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export type UpdatePasswordInputs = z.infer<typeof updatePasswordSchema>
