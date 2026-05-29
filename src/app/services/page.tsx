import { PageHeader } from "@/components/ui/PageHeader";
import { TechStack } from "@/components/sections/TechStack";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive professional digital solutions including high-performance AOSP rom engineering, mobile systems optimization, custom typography design systems, and rich React/Next.js fullstack development.",
  openGraph: {
    title: "Services | Mohammed Rayyan",
    description: "Explore professional digital solutions including high-performance AOSP rom engineering, design systems, and fullstack development.",
    url: "https://rayyan.ninety5.in/services",
    type: "website",
  },
  alternates: {
    canonical: "/services",
  }
};

export default function ServicesPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rayyan.ninety5.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://rayyan.ninety5.in/services"
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <PageHeader 
        title="Expertise" 
        description="Comprehensive solutions spanning from UI/UX design to full-stack engineering." 
      />
      <div>
        <TechStack />
      </div>
      <Testimonials />
    </main>
  );
}
