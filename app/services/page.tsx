import { services } from '@/data/service-data';
import { Metadata } from 'next';
import ServiceCard from './_components/service-card';

export const metadata: Metadata = {
  title: 'Our Services | Revns',
  description: 'Comprehensive e-commerce solutions including Amazon advertising, brand onboarding, SEO, product photography, and optimization services.',
};

export default function ServicesPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard 
            key={service.slug}
            title={service.title}
            description={service.description}
            slug={service.slug}
          />
        ))}
      </div>
    </main>
  );
}