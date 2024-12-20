import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  company: z.string().min(1, { message: "Company name is required" }),
  marketplaces: z.array(z.string()).min(1, { message: "Please select at least one marketplace" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  message: z.string().min(1, { message: "Message is required" }),
  monthlyRevenue: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;