import { PageHeader } from "@/components/ui/PageHeader";
import { UsesHardware } from "@/components/sections/UsesHardware";
import { UsesSoftware } from "@/components/sections/UsesSoftware";
import { UsesCreative } from "@/components/sections/UsesCreative";
import { UsesIntegrations } from "@/components/sections/UsesIntegrations";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Hardware, Software & Workflow (Uses)",
  description: "Curated workspace manifest of workstation hardware, Linux/AOSP toolchains, developer tools, and creative design software used by Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95).",
  openGraph: {
    title: "Uses — Hardware & Software Stack | Mohammed Rayyan",
    description: "Hardware, software, and development tools that Mohammed Rayyan uses daily.",
    url: "https://rayyan.ninety5.in/uses",
    type: "website",
    images: [
      {
        url: "https://rayyan.ninety5.in/og-image.png",
        width: 1024,
        height: 682,
        alt: "Hardware & Software Stack | Mohammed Rayyan",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Uses — Hardware & Software Stack | Mohammed Rayyan",
    description: "Hardware, software, and development tools that Mohammed Rayyan uses daily.",
    creator: "@rayyan_x95",
    images: ["https://rayyan.ninety5.in/og-image.png"],
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/uses",
  }
};

export default function UsesPage() {
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
        "name": "Uses",
        "item": "https://rayyan.ninety5.in/uses"
      }
    ]
  };

  const usesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    "@id": "https://rayyan.ninety5.in/uses#itempage",
    "name": "Mohammed Rayyan's Workspace & Tech Stack",
    "url": "https://rayyan.ninety5.in/uses",
    "mainEntity": {
      "@id": "https://rayyan.ninety5.in/#person"
    }
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={usesSchema} />
      <PageHeader 
        title="Uses" 
        description="A curated manifest of the hardware, software, and everyday carry that I use to design and build products." 
      />
      <div className="space-y-32">
        <UsesHardware />
        <UsesSoftware />
        <UsesCreative />
        <UsesIntegrations />
      </div>
    </main>
  );
}
