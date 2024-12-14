import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revns | E-commerce Growth & Marketplace Solutions",
  description: "Transform your business with Revns - Your complete e-commerce growth partner specializing in Amazon, Flipkart, Zepto, Blinkit, and Nykaa marketplace solutions. Expert product optimization, brand listing, and marketplace advertising services.",
  keywords: [
    "e-commerce solutions",
    "marketplace management",
    "Amazon seller services",
    "Flipkart seller services",
    "marketplace advertising",
    "product optimization",
    "brand listing services",
    "e-commerce photography",
    "marketplace onboarding",
    "Zepto seller",
    "Blinkit partner",
    "Nykaa seller",
    "e-commerce growth",
    "marketplace analytics",
    "product SEO",
    "Revns",
  ].join(", "),
  openGraph: {
    title: "Revns | E-commerce Growth & Marketplace Solutions",
    description: "Complete e-commerce growth solutions for Amazon, Flipkart, Zepto, Blinkit, and Nykaa marketplaces. Expert in brand listing, optimization, and advertising.",
    type: "website",
    images: [
      {
        url: 'https://www.google.com/maps/uv?viewerState=lb&pb=!1s0x11ae81c94242f451:0x2a6b0cac40414137!5sGlobstand+technologies&imagekey=!1e10!2sAF1QipPrTTNGxsOszQTXFD3b68e40o0V_LiVsTWwh-H6&cr=rp_35',
        width: 1200,
        height: 630,
        alt: 'Revns - E-commerce Growth Solutions',
      },
    ],
    siteName: "Revns",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key={process.env.NEXT_PUBLIC_AHREFS_KEY}
          defer={true} // Changed from string to boolean
          strategy="lazyOnload" // Optional: controls loading strategy
        />
      </head>
      <body className={font.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}