'use client'

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export default function ServiceCTA({ title, description, buttonText, buttonLink }: ServiceCTAProps) {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">{title}</h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">{description}</p>
        <Link 
          href={buttonLink}
          className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
        >
          {buttonText}
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </section>
  );
}