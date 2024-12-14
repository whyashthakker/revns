import { Service } from '@/types/services';
import { services } from '@/data/service-data';

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  return services.find((s) => s.slug === slug) || null;
}

export function getAllServices() {
  return services;
}

export async function getServiceMetadata(slug: string): Promise<Service | null> {
  return services.find((s) => s.slug === slug) || null;
}