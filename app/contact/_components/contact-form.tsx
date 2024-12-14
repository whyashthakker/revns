"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from 'lucide-react';

const marketplaces = [
  { id: "amazon", label: "Amazon" },
  { id: "flipkart", label: "Flipkart" },
  { id: "zepto", label: "Zepto" },
  { id: "blinkit", label: "Blinkit" },
  { id: "nykaa", label: "Nykaa" }
];

const services = [
  { id: "listing", label: "Product Listing & Optimization" },
  { id: "advertising", label: "Marketplace Advertising" },
  { id: "analytics", label: "Performance Analytics" },
  { id: "photography", label: "E-commerce Photography" },
  { id: "management", label: "Account Management" }
];

const schema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().optional(),
  company: z.string().min(1, { message: "Company name is required" }),
  marketplaces: z.array(z.string()).min(1, { message: "Please select at least one marketplace" }),
  services: z.array(z.string()).min(1, { message: "Please select at least one service" }),
  message: z.string().min(1, { message: "Message is required" }),
  monthlyRevenue: z.string().optional(),
});

type ContactFormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      marketplaces: [],
      services: [],
    }
  });

  const handleMarketplaceChange = (marketplace: string) => {
    const updated = selectedMarketplaces.includes(marketplace)
      ? selectedMarketplaces.filter(m => m !== marketplace)
      : [...selectedMarketplaces, marketplace];
    
    setSelectedMarketplaces(updated);
    setValue('marketplaces', updated);
  };

  const handleServiceChange = (service: string) => {
    const updated = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    
    setSelectedServices(updated);
    setValue('services', updated);
  };

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Contact Us</h2>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Get in touch with our e-commerce experts to accelerate your marketplace growth. We'll analyze your business needs and provide tailored solutions.
      </p>
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
                  onCheckedChange={() => handleMarketplaceChange(marketplace.id)}
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
                  onCheckedChange={() => handleServiceChange(service.id)}
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
    </div>
  );
}