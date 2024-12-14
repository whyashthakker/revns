'use client'

import { Service } from '@/types/services';
import Link from 'next/link';
import Image from 'next/image';

type ServiceCardProps = Pick<Service, 'title' | 'description' | 'slug' | 'ogImage'>;

const DEFAULT_IMAGE = '/images/services/seo-service-og.png'; // Fallback image

export default function ServiceCard({ title, description, slug, ogImage }: ServiceCardProps) {
  // Use the ogImage if available, otherwise use default
  const imageUrl = ogImage || DEFAULT_IMAGE;

  return (
    <Link 
      href={`/services/${slug}`}
      className="group block overflow-hidden rounded-lg bg-white transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl as string}
          alt={title}
          fill
          className="object-cover transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-105"
          priority
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
          {title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3">
          {description}
        </p>
      </div>
    </Link>
  );
}