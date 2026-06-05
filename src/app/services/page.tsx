import { PageHeader } from "@/components/ui/PageHeader";
import { TechStack } from "@/components/sections/TechStack";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  title: "Services",
  description: "Comprehensive professional digital solutions including high-performance AOSP ROM engineering, mobile systems optimization, custom typography design systems, and rich React/Next.js full-stack development.",
  openGraph: {
    title: "Services & Expertise | Mohammed Rayyan",
    description: "Comprehensive professional digital solutions including high-performance AOSP ROM engineering, design systems, and full-stack development.",
    url: "https://rayyan.ninety5.in/services",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/services",
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

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Services Offered by Ninety5 Studio / Mohammed Rayyan",
    "description": "Professional services spanning system engineering, Android ROM development, and premium UI/UX full-stack development.",
    "url": "https://rayyan.ninety5.in/services",
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "AOSP & Custom ROM Engineering",
          "description": "Custom Android Open Source Project engineering, kernel optimizations, and custom ROM development for hardware platforms.",
          "provider": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "url": "https://www.ninety5.in/"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Full-Stack Web Development",
          "description": "Building immersive, high-performance web applications using modern stacks (Next.js, React, TypeScript, Node.js) with rich interactions.",
          "provider": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "url": "https://www.ninety5.in/"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "UI/UX & Product Design",
          "description": "Crafting premium user interfaces and digital product flows with custom motion design and micro-interactions.",
          "provider": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "url": "https://www.ninety5.in/"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Design Systems & Typography Engineering",
          "description": "Creating scalable, reusable design systems and customized typography structures to enforce brand cohesion.",
          "provider": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "url": "https://www.ninety5.in/"
          }
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={servicesSchema} />
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
