import { services } from '@/data/service-data';
import { Metadata } from 'next';
import ServiceCard from './_components/service-card';

export const metadata: Metadata = {
  title: 'Our Services | Revns',
  description: 'Comprehensive e-commerce solutions including Amazon advertising, brand onboarding, SEO, product photography, and optimization services.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] min-h-screen">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600">
            Comprehensive e-commerce solutions to help your business grow and succeed in the digital marketplace
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.slug}
              title={service.title}
              description={service.description}
              slug={service.slug}
              ogImage={service.ogImage}
            />
          ))}
        </div>
      </main>
    </div>
  );
}