import { Metadata } from "next";
import ContactForm from "./_components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Revns - E-commerce Growth Solutions",
  description: "Get in touch with Revns for expert e-commerce growth solutions. Whether you need help with marketplace management, product optimization, or advertising on Amazon, Flipkart, Zepto, Blinkit, or Nykaa - we're here to help.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "contact Revns",
    "e-commerce consulting",
    "marketplace management services",
    "Amazon seller support",
    "Flipkart seller support",
    "Zepto seller contact",
    "Blinkit partner support",
    "Nykaa seller assistance",
    "e-commerce growth consultation",
    "marketplace optimization help",
    "product listing services",
    "e-commerce photography services",
    "marketplace advertising support",
    "brand growth solutions",
    "e-commerce support"
  ].join(", "),
  openGraph: {
    title: "Contact Revns - E-commerce Growth Experts",
    description: "Connect with Revns for comprehensive e-commerce solutions. Our experts are ready to help you grow on Amazon, Flipkart, Zepto, Blinkit, and Nykaa marketplaces.",
    url: "https://www.revns.com/contact",
    siteName: "Revns",
    images: [
      {
        url: "https://www.revns.com/images/contact-banner.png",
        width: 1200,
        height: 630,
        alt: "Contact Revns E-commerce Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Expert E-commerce Support from Revns",
    description: "Ready to accelerate your marketplace growth? Contact Revns for specialized e-commerce solutions across Amazon, Flipkart, Zepto, Blinkit, and Nykaa.",
    images: ["https://www.revns.com/images/contact-banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-8">
          Ready to transform your e-commerce business? Our team of marketplace experts is here to help you achieve your growth goals across Amazon, Flipkart, Zepto, Blinkit, and Nykaa.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}