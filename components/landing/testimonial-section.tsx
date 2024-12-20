import Image from "next/image";
import { IconStarFilled } from "@tabler/icons-react";

export const TestimonialSection = () => {
  return (
    <main className="md:flex items-center justify-center space-y-6 md:space-y-0 md:gap-x-20 xl:w-4/5 2xl:w-[68%] mx-auto px-6 md:px-0">
      <Image
        src="/logo/REVNS.png"
        width={10000}
        height={10000}
        className="md:w-1/3 rounded-md"
        alt="image"
      />
      <div className="flex flex-col gap-y-5 md:w-1/2">
        <h1 className="text-lg md:text-2xl">
          &quot;We&apos;ve been working with Geeta for over 2 years and they&apos;ve been amazing to work with. Our Brand has grown by 100%. We&apos;re making a lot more money and have all our listings well optimised. We couldn&apos;t be happier with the results.&quot;
        </h1>
        <div className="flex items-center gap-x-1">
          {[...Array(5)].map((_, i) => (
            <IconStarFilled key={i} className="text-4xl text-yellow-500" />
          ))}
        </div>
        <span className="text-xl font-medium">
          Pratham S <br />
          CEO, Bloom Gifts
        </span>
      </div>
    </main>
  );
};