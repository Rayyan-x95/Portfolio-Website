import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "About Mohammed Rayyan — Founder of Ninety5",
  description: "Mohammed Rayyan — Founder of Ninety5 (ninety5.in), Creative Technologist, AOSP Kernel Developer & UI/UX Designer based in Chennai, India. Learn about his engineering philosophy, background, and approach to cinematic digital experiences.",
  openGraph: {
    title: "About Mohammed Rayyan | Founder of Ninety5 · Creative Technologist & Designer",
    description: "Meet Mohammed Rayyan — Founder of Ninety5 (ninety5.in). AOSP systems architect and UI/UX designer bridging raw performance with cinematic design.",
    url: "https://rayyan.ninety5.in/about",
    type: "profile",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 1600,
        alt: "Mohammed Rayyan — Founder of Ninety5, Creative Technologist & Designer",
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

