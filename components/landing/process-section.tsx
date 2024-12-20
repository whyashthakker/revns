"use client";
import { AnimatedBeamMultipleOutputDemo } from "@/components/demos/animated-beam-demo";
import BoxRevealDemo from "@/components/demos/box-reveal-demo";
import Image from "next/image";

export const ProcessSection = () => {
  return (
    <section id="process" className="md:px-0 mx-6 md:mx-auto">
      <h1 className="text-3xl md:text-5xl md:text-center font-medium flex items-center gap-x-2 mx-auto justify-center">
        Our{" "}
        <span className="text-blue-500 flex gap-x-1 items-center">
          <Image
            src="/icons/squiggle.svg"
            width={10000}
            height={10000}
            className="w-6"
            alt="image"
          />
          Creative
          <Image
            src="/icons/star.svg"
            width={10000}
            height={10000}
            className="w-6 mb-8"
            alt="image"
          />
        </span>{" "}
        Process
      </h1>

      <p className="text-center py-4 md:w-1/2 mx-auto text-xl md:text-2xl text-gray-500">
        All of our services are designed to help your business to get noticed.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-1/2 mx-auto">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <AnimatedBeamMultipleOutputDemo />
        </div>
        <div className="w-full md:w-1/2 order-1 md:order-2 md:ml-0">
          <BoxRevealDemo />
        </div>
      </div>
    </section>
  );
};