import { PageHeader } from "@/components/ui/PageHeader";
import { UsesHardware } from "@/components/sections/UsesHardware";
import { UsesSoftware } from "@/components/sections/UsesSoftware";
import { UsesCreative } from "@/components/sections/UsesCreative";
import { UsesIntegrations } from "@/components/sections/UsesIntegrations";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Uses",
  description: "A curated manifest of the hardware, software, and tools that Mohammed Rayyan uses in his daily systems engineering and UI/UX design workflow.",
  openGraph: {
    title: "Uses | Mohammed Rayyan",
    description: "A curated manifest of the hardware, software, and tools that Mohammed Rayyan uses in his daily systems engineering and UI/UX design workflow.",
    url: "https://rayyan.ninety5.in/uses",
    type: "website",
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

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
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
