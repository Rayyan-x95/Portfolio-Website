import { PageHeader } from "@/components/ui/PageHeader";
import { WorksSection } from "@/components/sections/WorksSection";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";
import { GithubActivity } from "@/components/sections/GithubActivity";

export const metadata: Metadata = {
  title: "Work",
  description: "Explore a curated showcase of Mohammed Rayyan's projects spanning custom AOSP engineering, mobile ROM features, design systems, and premium web apps.",
  openGraph: {
    title: "Work | Mohammed Rayyan",
    description: "Explore a curated showcase of Mohammed Rayyan's projects spanning custom AOSP engineering, mobile ROM features, and design systems.",
    url: "https://rayyan.ninety5.in/work",
    type: "website",
  },
  alternates: {
    canonical: "/work",
  }
};

export default function WorkPage() {
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
        "name": "Work",
        "item": "https://rayyan.ninety5.in/work"
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <PageHeader 
        title="Selected Work" 
        description="A curated showcase of engineering projects, digital products, and design systems." 
      />
      <div className="pt-8">
        <WorksSection />
      </div>
      <GithubActivity />
    </main>
  );
}
