import { PageHeader } from "@/components/ui/PageHeader";
import { Contact } from "@/components/sections/Contact";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";
import { TerminalWrapper } from "@/components/sections/TerminalWrapper";

export const metadata: Metadata = {
  title: "Contact Mohammed Rayyan",
  description: "Initiate transmission with Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95). Open for high-impact AOSP engineering, custom ROM optimizations, and cinematic product design collaborations.",
  openGraph: {
    title: "Contact Mohammed Rayyan | Direct Transmission",
    description: "Get in touch with Mohammed Rayyan for new engineering projects, design systems, and digital product inquiries.",
    url: "https://rayyan.ninety5.in/contact",
    type: "website",
    images: [
      {
        url: "https://rayyan.ninety5.in/og-image.png",
        width: 1024,
        height: 682,
        alt: "Contact Mohammed Rayyan — Ninety5 Studio",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Mohammed Rayyan | Direct Transmission",
    description: "Get in touch with Mohammed Rayyan for new engineering projects, design systems, and digital product inquiries.",
    creator: "@rayyan_x95",
    images: ["https://rayyan.ninety5.in/og-image.png"],
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

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://rayyan.ninety5.in/contact#contactpage",
    "name": "Contact Mohammed Rayyan",
    "url": "https://rayyan.ninety5.in/contact",
    "mainEntity": {
      "@id": "https://rayyan.ninety5.in/#person"
    }
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactSchema} />
      <PageHeader 
        title="Let's Talk" 
        description="Have a project in mind or want to collaborate? I'm currently open to new opportunities." 
      />
      <div className="-mt-32">
        <TerminalWrapper />
      </div>
      <Contact />
    </main>
  );
}
