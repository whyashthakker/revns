import { Metadata } from "next";
import { Meeting } from "./_components/meeting-content";

export const metadata: Metadata = {
  title: "Book a Meeting | REVNS - E-commerce Growth Partner",
  description: "Schedule a consultation with REVNS to discuss your e-commerce growth strategy. Get expert advice on marketplace optimization, advertising, and brand growth.",
  keywords: [
    "book meeting",
    "e-commerce consultation",
    "marketplace strategy",
    "business growth",
    "REVNS meeting",
    "e-commerce expert"
  ],
  openGraph: {
    title: "Book a Meeting with REVNS",
    description: "Get expert e-commerce consultation and grow your business with REVNS.",
    images: [
      {
        url: "/meeting-og.jpg", // Add this image to your public folder
        width: 1200,
        height: 630,
        alt: "Book a Meeting with REVNS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Meeting with REVNS",
    description: "Get expert e-commerce consultation and grow your business with REVNS.",
    images: ["/meeting-og.jpg"],
  },
};

export default function Page() {
  return <Meeting />;
}