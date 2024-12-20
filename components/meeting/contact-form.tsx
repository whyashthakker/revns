"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from 'lucide-react';
import { UseFormReturn } from "react-hook-form";
import { ContactFormData } from "@/types/meeting";

interface ContactFormProps {
  form: UseFormReturn<ContactFormData>;
  isSubmitting: boolean;
  selectedMarketplaces: string[];
  selectedServices: string[];
  onMarketplaceChange: (marketplace: string) => void;
  onServiceChange: (service: string) => void;
  onSubmit: (data: ContactFormData) => Promise<void>;
}

export const marketplaces = [
  { id: "amazon", label: "Amazon" },
  { id: "flipkart", label: "Flipkart" },
  { id: "zepto", label: "Zepto" },
  { id: "blinkit", label: "Blinkit" },
  { id: "nykaa", label: "Nykaa" },
  { id: "other", label: "Others" },
];

export const services = [
  { id: "listing", label: "Product Listing & Optimization" },
  { id: "advertising", label: "Marketplace Advertising" },
  { id: "analytics", label: "Performance Analytics" },
  { id: "photography", label: "E-commerce Photography" },
  { id: "management", label: "Account Management" },
  { id: "audit", label: "Account Audit" },
];

export const ContactForm = ({
  form,
  isSubmitting,
  selectedMarketplaces,
  selectedServices,
  onMarketplaceChange,
  onServiceChange,
  onSubmit,
}: ContactFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input type="text" placeholder="Your Name" {...register("name")} disabled={isSubmitting} />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Input type="email" placeholder="Your Email" {...register("email")} disabled={isSubmitting} />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Input type="tel" placeholder="Your Phone" {...register("phone")} disabled={isSubmitting} />
        </div>
        <div>
          <Input type="text" placeholder="Company Name" {...register("company")} disabled={isSubmitting} />
          {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
        </div>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Select Marketplaces</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {marketplaces.map((marketplace) => (
            <div key={marketplace.id} className="flex items-center space-x-2">
              <Checkbox
                id={marketplace.id}
                checked={selectedMarketplaces.includes(marketplace.id)}
                onCheckedChange={() => onMarketplaceChange(marketplace.id)}
                disabled={isSubmitting}
              />
              <label htmlFor={marketplace.id} className="text-sm">
                {marketplace.label}
              </label>
            </div>
          ))}
        </div>
        {errors.marketplaces && (
          <p className="text-red-500 text-sm mt-1">{errors.marketplaces.message}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Services Required</label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service) => (
            <div key={service.id} className="flex items-center space-x-2">
              <Checkbox
                id={service.id}
                checked={selectedServices.includes(service.id)}
                onCheckedChange={() => onServiceChange(service.id)}
                disabled={isSubmitting}
              />
              <label htmlFor={service.id} className="text-sm">
                {service.label}
              </label>
            </div>
          ))}
        </div>
        {errors.services && (
          <p className="text-red-500 text-sm mt-1">{errors.services.message}</p>
        )}
      </div>

      <div>
        <Input
          type="text"
          placeholder="Monthly Revenue (Optional)"
          {...register("monthlyRevenue")}
          disabled={isSubmitting}
        />
      </div>

      <div>
        <Textarea
          placeholder="Tell us about your business goals and requirements..."
          {...register("message")}
          disabled={isSubmitting}
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
};

