'use client'

import { ServiceMeta } from '@/types/services';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
}

export default function ServiceCard({ title, description, slug }: ServiceCardProps) {
  return (
    <Link 
      href={`/services/${slug}`}
      className="block p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
