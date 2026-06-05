import { PageHeader } from "@/components/ui/PageHeader";
import { TerminalSection } from "@/components/sections/TerminalSection";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mohammed Rayyan for new projects, collaborations, or AOSP engineering inquiries.",
  openGraph: {
    title: "Contact | Mohammed Rayyan",
    description: "Get in touch with Mohammed Rayyan for new projects, collaborations, or AOSP engineering inquiries.",
    url: "https://rayyan.ninety5.in/contact",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/contact",
  }
};

export default function ContactPage() {
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
        "name": "Contact",
        "item": "https://rayyan.ninety5.in/contact"
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <PageHeader 
        title="Let's Talk" 
        description="Have a project in mind or want to collaborate? I'm currently open to new opportunities." 
      />
      <div className="-mt-32">
        <TerminalSection />
      </div>
      <Contact />
    </main>
  );
}
