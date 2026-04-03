import { z } from "zod";

export const clientSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  company: z.string().min(2),
  status: z.string().default("Active"),
  source: z.string().default("Inbound"),
  notes: z.string().optional(),
  tags: z.array(z.string()).default([]),
});

export const taskSchema = z.object({
  title: z.string().min(2),
  description: z.string().optional(),
  dueDate: z.string(),
  priority: z.enum(["LOW", "MEDIUM", "HIGH"]),
  assigneeId: z.string(),
});
