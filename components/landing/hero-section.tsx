"use client";
import Link from "next/link";
import { CoverDemo } from "@/components/demos/cover-demo";
import BoxReveal from "@/components/magicui/box-reveal";
import { PiCheckBold } from "react-icons/pi";

export const HeroSection = () => {
  return (
    <div className="md:px-0 mx-6 xl:w-4/5 2xl:w-[68%] md:mx-auto mt-14">
      <h1>
        <CoverDemo />
      </h1>
      <p className="md:text-center text-xl md:text-2xl my-6 md:my-10 md:w-4/5 mx-auto text-gray-500">
        Let&apos;s talk to get listed in days!
      </p>

      <div className="flex md:justify-center items-center gap-x-4">
        <Link
          href="/meeting"
          className="py-3 px-10 md:px-16 md:text-xl hover:bg-[#abcbff] rounded-[6px] border-2 border-black dark:border-white bg-[#121212] text-white transition duration-200 hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Book a Call
        </Link>
        <Link
          href="/showcase"
          className="bg-white py-3 px-10 md:px-16 md:text-xl border-4 border-black rounded-[6px] hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          Showcase
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center text-left md:justify-items-center md:mx-auto mt-10 md:mt-16">
        {["Marketplace", "Advertising", "Optimization", "Analytics"].map((text) => (
          <BoxReveal key={text} boxColor="#3b82f6" duration={0.5}>
            <p className="md:text-xl font-semibold flex gap-x-2 md:gap-x-4 items-center">
              <PiCheckBold className="text-xl text-blue-500" />
              {text}
            </p>
          </BoxReveal>
        ))}
      </div>
    </div>
  );
};