import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  slug: string;
}

export const ServiceCard = ({ icon, title, description, slug }: ServiceCardProps) => {
  return (
    <Link href={slug} className="group">
      <div className="flex flex-col justify-between h-full space-y-4 text-center bg-gray-100 p-4 group-hover:scale-105 transition-transform rounded-md">
        <Image
          src={icon}
          width={10000}
          height={10000}
          className="object-contain bg-gray-100 p-4 w-full h-40 rounded-md"
          alt={title}
        />
        <h1 className="text-xl font-medium">{title}</h1>
        <p className="text-gray-500">{description}</p>
      </div>
    </Link>
  );
};
