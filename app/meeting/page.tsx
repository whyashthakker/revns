"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from 'lucide-react';
import Calendly from "./calendly";
import ShowcaseNavbar from "@/components/showcase-navbar";
import { PiCheckCircle } from "react-icons/pi";
import { motion } from "framer-motion";

const checkItemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const marketplaces = [
  { id: "amazon", label: "Amazon" },
  { id: "flipkart", label: "Flipkart" },
  { id: "zepto", label: "Zepto" },
  { id: "blinkit", label: "Blinkit" },
  { id: "nykaa", label: "Nykaa" },
  { id: "other", label: "Others" },
];

const services = [
  { id: "listing", label: "Product Listing & Optimization" },
  { id: "advertising", label: "Marketplace Advertising" },
  { id: "analytics", label: "Performance Analytics" },
  { id: "photography", label: "E-commerce Photography" },
  { id: "management", label: "Account Management" },
  { id: "audit", label: "Account Audit" },
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

const CalendlyLoadingSkeleton = () => (
  <div className="animate-pulse space-y-4">
    {/* Header Skeleton */}
    <div className="h-8 bg-gray-200 rounded-md w-3/4"></div>
    
    {/* Calendar Grid Skeleton */}
    <div className="grid grid-cols-7 gap-2">
      {[...Array(35)].map((_, i) => (
        <div key={i} className="h-16 bg-gray-200 rounded-md"></div>
      ))}
    </div>
    
    {/* Time Slots Skeleton */}
    <div className="space-y-2 mt-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="h-12 bg-gray-200 rounded-md"></div>
      ))}
    </div>
  </div>
);

const Meeting = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isLoadingCalendly, setIsLoadingCalendly] = useState(false);
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

      // Show loading state
      setIsLoadingCalendly(true);
      
      // Simulate a slight delay before showing Calendly
      setTimeout(() => {
        setIsLoadingCalendly(false);
        setShowCalendly(true);
      }, 2000); // 2 second delay for smooth transition

    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderRightSection = () => {
    if (isLoadingCalendly) {
      return <CalendlyLoadingSkeleton />;
    }
    
    if (showCalendly) {
      return <Calendly />;
    }

    return(
      <div className="space-y-6">
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
  };

  return (
    <div className="flex flex-col w-full overflow-clip inset-0 -z-10 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <ShowcaseNavbar />
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10">Let&apos;s Meet</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>

          {[
            {
              title: "Strategy + Design",
              description:
                "Turn your ideas into reality with our development and design services.",
            },
            {
              title: "Free Audit & Consultation",
              description:
                "Get expert advice on how to improve your business and increase your online presence.",
            },
            {
              title: "Dedicated Account Manager",
              description:
                "Get a dedicated AM for your product.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={checkItemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 1.8 }}
              className="flex gap-x-4 py-4"
            >
              <PiCheckCircle className="rounded-md text-[#3d80d7] text-2xl flex-shrink-0" />
              <ul>
                <h3 className="text-lg font-bold text-gray-700">{item.title}</h3>
                <div className="text-gray-400">{item.description}</div>
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="md:w-1/2">
          {renderRightSection()}
        </div>
      </div>
    </div>
  );
};

export default Meeting;