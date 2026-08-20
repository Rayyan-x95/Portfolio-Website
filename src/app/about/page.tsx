import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "About Mohammed Rayyan",
  description: "Biography, background, and engineering philosophy of Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95) — Creative Technologist, AOSP Developer, and Lead at Ninety5 Studio.",
  openGraph: {
    title: "About Mohammed Rayyan | Creative Technologist & Designer",
    description: "Learn more about Mohammed Rayyan's journey as a Creative Technologist, AOSP systems architect, and design lead.",
    url: "https://rayyan.ninety5.in/about",
    type: "profile",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 1600,
        alt: "Mohammed Rayyan - Creative Technologist & Designer",
      }
    ]
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/about",
  }
};

export default function AboutPage() {
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
        "name": "About Mohammed Rayyan",
        "item": "https://rayyan.ninety5.in/about"
      }
    ]
  };

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://rayyan.ninety5.in/about#aboutpage",
    "name": "About Mohammed Rayyan",
    "url": "https://rayyan.ninety5.in/about",
    "mainEntity": {
      "@id": "https://rayyan.ninety5.in/#person"
    },
    "primaryImageOfPage": "https://rayyan.ninety5.in/profile.webp"
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={aboutSchema} />
      <PageHeader 
        title="About Me" 
        description="My background, philosophy, and professional journey." 
      />
      <div>
        <About />
      </div>
      <Experience />
    </main>
  );
}

