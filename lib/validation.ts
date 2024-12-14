import * as z from "zod";

const marketplaces = [
  "amazon",
  "flipkart",
  "zepto",
  "blinkit",
  "nykaa"
] as const;

const services = [
  "listing",
  "advertising",
  "analytics",
  "photography",
  "management"
] as const;

export const contactFormSchema = z.object({
  name: z.string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),
  
  email: z.string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[+\d\s-()]{10,20}$/.test(val), {
      message: "Invalid phone number format"
    }),
  
  company: z.string()
    .min(1, "Company name is required")
    .max(200, "Company name must be less than 200 characters"),
  
  marketplaces: z.array(z.enum(marketplaces))
    .min(1, "Please select at least one marketplace")
    .max(5, "Maximum 5 marketplaces can be selected"),
  
  services: z.array(z.enum(services))
    .min(1, "Please select at least one service")
    .max(5, "Maximum 5 services can be selected"),
  
  monthlyRevenue: z.string()
    .optional()
    .refine((val) => !val || /^\d+$/.test(val.replace(/[,\.]/g, '')), {
      message: "Invalid revenue format"
    }),
  
  message: z.string()
    .min(1, "Message is required")
    .max(2000, "Message must be less than 2000 characters")
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export function validateContactFormData(data: unknown) {
  try {
    const validatedData = contactFormSchema.parse(data);
    return {
      success: true as const,
      data: validatedData
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false as const,
        errors: error.errors.map(err => ({
          path: err.path.join('.'),
          message: err.message
        }))
      };
    }
    return {
      success: false as const,
      errors: [{ path: 'unknown', message: 'Invalid form data' }]
    };
  }
}

// Helper functions for validation
export function isValidMarketplace(marketplace: string): marketplace is typeof marketplaces[number] {
  return marketplaces.includes(marketplace as any);
}

export function isValidService(service: string): service is typeof services[number] {
  return services.includes(service as any);
}

// Export constants for reuse
export const VALID_MARKETPLACES = marketplaces;
export const VALID_SERVICES = services;