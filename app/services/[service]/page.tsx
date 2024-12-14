import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/service-data';
import ServiceHero from '../_components/service-hero';
import ServiceBenefits from '../_components/service-benefits';
import ServiceFeatures from '../_components/service-features';
import ServiceProcess from '../_components/service-process';
import ServiceCTA from '../_components/service-cta';
import ServiceSchema from '../_components/service-schema';

interface ServicePageProps {
  params: {
    service: string;
  };
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find(s => s.slug === params.service);
  
  if (!service) {
    notFound();
  }

  return {
    title: `${service.title} | Revns`,
    description: service.description,
    keywords: service.keywords,
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find(s => s.slug === params.service);
  
  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <ServiceSchema service={service} />
      <ServiceHero 
        heading={service.content.hero.heading}
        subheading={service.content.hero.subheading}
        description={service.content.hero.description}
        serviceSlug={params.service}
      />
      <ServiceBenefits benefits={service.content.benefits} />
      <ServiceFeatures features={service.content.features} />
      <ServiceProcess {...service.content.process} />
      <ServiceCTA {...service.content.cta} />
    </main>
  );
}
