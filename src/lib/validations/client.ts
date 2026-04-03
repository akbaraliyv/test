import { z } from "zod";

export const clientSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  company: z.string().optional(),
  status: z.string().min(2),
  source: z.string().optional(),
  tags: z.array(z.string()).default([])
});
