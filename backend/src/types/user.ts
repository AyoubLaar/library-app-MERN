import { z } from "zod";

const userSchema = z.object({
  _id: z.any(),
  email: z.string(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
});

export type User = z.infer<typeof userSchema>;
