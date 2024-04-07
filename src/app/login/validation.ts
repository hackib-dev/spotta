import * as z from "zod";

export const LoginFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().optional(),
  confirmPassword: z.string().optional(),
});
