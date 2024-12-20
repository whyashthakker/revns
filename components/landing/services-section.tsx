"use client";

import { WordPullUpDemo } from "@/components/demos/word-pull-up-demo";
import { ServiceCard } from "./service-card";

const services = [
    {
      icon: "/images/s_6.png",
      title: "Amazon & Marketplace Ads",
      description: "Strategic advertising solutions to boost your product visibility and sales across Amazon and other leading marketplaces",
      slug: "/services/amazon-marketplace-ads"
    },
    {
      icon: "/images/s_5.png",
      title: "Brand Onboarding",
      description: "Complete onboarding assistance for multiple platforms including Zepto, Flipkart Minutes, Amazon Fresh, Nykaa, and Blinkit - streamlining your entry into major marketplaces",
      slug: "/services/brand-onboarding"
    },
    {
      icon: "/images/s_3.png",
      title: "SEO Services",
      description: "Comprehensive search engine optimization strategies to improve your product visibility and organic rankings across marketplaces",
      slug: "/services/seo-services"
    },
    {
      icon: "/images/s_4.png",
      title: "Product Photography",
      description: "High-quality, professional product photography services that capture your products in their best light and drive customer engagement",
      slug: "/services/product-photography"
    },
    {
      icon: "/images/s_2.png",
      title: "Product Optimization",
      description: "Data-driven product listing optimization to enhance visibility, improve conversion rates, and maximize sales performance",
      slug: "/services/product-optimization"
    },
    {
      icon: "/images/s_1.png",
      title: "Brand Listing",
      description: "Professional product listing services to showcase your brand effectively across multiple e-commerce platforms",
      slug: "/services/brand-listing"
    },
];

export const ServicesSection = () => {
    return (
      <section id="services" className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <h1>
          <WordPullUpDemo />
        </h1>
        <p className="md:text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
          All of our services are designed to help your business stand out
        </p>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>
    );
  };