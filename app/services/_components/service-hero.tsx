import { Megaphone, ShoppingBag, Search, Camera, Settings, ListChecks } from 'lucide-react';

export const iconMap = {
  'amazon-marketplace-ads': Megaphone,
  'brand-onboarding': ShoppingBag,
  'seo-services': Search,
  'product-photography': Camera,
  'product-optimization': Settings,
  'brand-listing': ListChecks,
} as const;

interface ServiceHeroProps {
  heading: string;
  subheading: string;
  description: string;
  serviceSlug: string;
}

const ServiceHero = ({ heading, subheading, description, serviceSlug }: ServiceHeroProps) => {
  const Icon = iconMap[serviceSlug as keyof typeof iconMap] || Settings;
  
  return (
    <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl relative">
          <h1 className="text-5xl font-bold mb-4">{heading}</h1>
          <h2 className="text-2xl font-semibold mb-6">{subheading}</h2>
          <p className="text-lg leading-relaxed opacity-90">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 flex items-center justify-center">
        <Icon size={200} strokeWidth={1} />
      </div>
    </section>
  );
};

export default ServiceHero;