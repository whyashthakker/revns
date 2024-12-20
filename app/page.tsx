import { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { TrustMetrics } from "@/components/landing/trust-metrics";
import { ServicesSection } from "@/components/landing/services-section";
import { ProcessSection } from "@/components/landing/process-section";
import { TestimonialSection } from "@/components/landing/testimonial-section";
import { ScrollBasedVelocityDemo } from "@/components/demos/scroll-based-velocity-demo";
import { ShootingStarsAndStarsBackgroundDemo } from "@/components/demos/shooting-stars-demo";
import LetsMakeThingsHappenSection from "@/components/ui/lets-make-things-happen";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "REVNS - E-commerce Growth Partner",
  description: "REVNS helps brands grow on e-commerce platforms through strategic advertising, brand optimization, and marketplace expertise. Get listed in days!",
  keywords: [
    "e-commerce growth",
    "marketplace optimization",
    "Amazon advertising",
    "product optimization",
    "brand listing",
    "e-commerce consulting"
  ],
  authors: [{ name: "REVNS" }],
  creator: "REVNS",
  publisher: "REVNS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://revns.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "REVNS - Your E-commerce Growth Partner",
    description: "Strategic advertising solutions and marketplace expertise to boost your product visibility and sales across leading e-commerce platforms.",
    url: "https://revns.com",
    siteName: "REVNS",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add this image to your public folder
        width: 1200,
        height: 630,
        alt: "REVNS - E-commerce Growth Partner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "REVNS - E-commerce Growth Partner",
    description: "Strategic advertising solutions and marketplace expertise to boost your product visibility and sales.",
    images: ["/og-image.jpg"], // Same image as OpenGraph
    creator: "@revns",
    site: "@revns",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <div className="overflow-clip inset-0 -z-10 h-full w-full bg-[#fafafa] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      <Navbar />
      
      <main className="md:pb-10">
        <HeroSection />
        <TrustMetrics />
      </main>

      <ServicesSection />

      <section className="py-20">
        <ScrollBasedVelocityDemo />
      </section>

      <ProcessSection />

      <section>
        <TestimonialSection />
      </section>

      <section id="guarentees">
        <ShootingStarsAndStarsBackgroundDemo />
      </section>

      <section className="my-10 md:py-20 xl:w-4/5 2xl:w-[68%] md:mx-auto">
        <LetsMakeThingsHappenSection />
      </section>

      <Footer />
    </div>
  );
}