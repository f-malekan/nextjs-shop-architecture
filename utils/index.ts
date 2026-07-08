import { z } from "zod";

export function validateFields<T extends z.ZodType>(
  schema: T,
  formData: FormData,
) {
  const validatedFields = schema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  return validatedFields
}