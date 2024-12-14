import { Service } from "@/types/services";

interface ServiceSchemaProps {
  service: Service;
}

export default function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Revns",
      "url": "https://revns.com"
    },
    "serviceType": service.title,
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}