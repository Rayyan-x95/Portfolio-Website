import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Mohammed Rayyan's journey as a Creative Technologist, systems architect, AOSP kernel engineer, and design lead at Ninety5 Studio.",
  openGraph: {
    title: "About Me | Mohammed Rayyan",
    description: "Learn more about Mohammed Rayyan's journey as a Creative Technologist, systems architect, and designer.",
    url: "https://rayyan.ninety5.in/about",
    type: "profile",
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
        "name": "About",
        "item": "https://rayyan.ninety5.in/about"
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
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
