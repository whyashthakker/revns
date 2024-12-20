"use client";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactForm } from "@/components/meeting/contact-form";
import { HighlightsSection } from "@/components/meeting/highlights-section";
import { CalendlyLoadingSkeleton } from "@/components/meeting/calendly-loading";
import { ContactFormData, contactFormSchema } from "@/types/meeting";
import Calendly from './calendly';

export const Meeting = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [isLoadingCalendly, setIsLoadingCalendly] = useState(false);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
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
    form.setValue('marketplaces', updated);
  };

  const handleServiceChange = (service: string) => {
    const updated = selectedServices.includes(service)
      ? selectedServices.filter(s => s !== service)
      : [...selectedServices, service];
    
    setSelectedServices(updated);
    form.setValue('services', updated);
  };

  const onSubmit = async (data: ContactFormData) => {
    if (isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setIsLoadingCalendly(true);
      setTimeout(() => {
        setIsLoadingCalendly(false);
        setShowCalendly(true);
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderRightSection = () => {
    if (isLoadingCalendly) return <CalendlyLoadingSkeleton />;
    if (showCalendly) return <Calendly />;

    return (
      <div className="space-y-6">
        <ContactForm
          form={form}
          isSubmitting={isSubmitting}
          selectedMarketplaces={selectedMarketplaces}
          selectedServices={selectedServices}
          onMarketplaceChange={handleMarketplaceChange}
          onServiceChange={handleServiceChange}
          onSubmit={onSubmit}
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full overflow-clip inset-0 -z-10 bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <div className="md:px-0 px-6 xl:w-4/5 2xl:w-[68%] justify-between md:mt-14 md:flex mx-auto">
        <div className="md:w-2/5">
          <h1 className="text-4xl font-semibold pt-10">Let&apos;s Meet</h1>
          <p className="text-lg text-gray-500 py-4">
            We are always excited to meet new people and discuss new projects.
            Please feel free to book a meeting with us.
          </p>
          <HighlightsSection />
        </div>

        <div className="md:w-1/2">
          {renderRightSection()}
        </div>
      </div>
    </div>
  );
};