import { PageHeader } from "@/components/ui/PageHeader";
import { FadeUp } from "@/components/ui/FadeUp";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Ninety5 Studio's privacy policy and data handling protocols.",
  openGraph: {
    title: "Privacy Policy | Ninety5 Studio",
    description: "Ninety5 Studio's privacy policy and data handling protocols.",
    url: "https://rayyan.ninety5.in/privacy",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/privacy",
  }
};

export default function PrivacyPage() {
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
        "name": "Privacy Policy",
        "item": "https://rayyan.ninety5.in/privacy"
      }
    ]
  };

  const sections = [
    {
      title: "Data Collection",
      content: "We only collect information that you voluntarily provide to us, such as your name and email address when you contact us or subscribe to our newsletter. We do not use cookies for tracking or advertising purposes."
    },
    {
      title: "How We Use Your Data",
      content: "Your data is used solely to provide the services you request, communicate with you about your projects, and improve our internal studio workflows. We never sell or share your personal information with third parties."
    },
    {
      title: "Security Protocols",
      content: "Ninety5 Studio implements high-end encryption and secure hosting environments to protect your digital footprint. As a studio focused on AOSP and systems engineering, we take data integrity seriously."
    },
    {
      title: "Your Rights",
      content: "You have the right to request access to, correction of, or deletion of your personal data at any time. Simply reach out via our direct inquiry line to initiate a data request."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <PageHeader 
        title="Privacy Policy" 
        description="How Ninety5 Studio handles your digital footprint." 
      />
      
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="space-y-20">
          {sections.map((section, index) => (
            <FadeUp key={section.title} delay={index * 0.1}>
              <div className="group relative">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-[1px] bg-accent-primary" />
                  <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-accent-primary">
                    {section.title}
                  </h2>
                </div>
                <p className="text-lg md:text-xl font-light text-white/40 leading-relaxed group-hover:text-white transition-colors duration-700">
                  {section.content}
                </p>
              </div>
            </FadeUp>
          ))}
          
          <FadeUp delay={0.5}>
            <div className="pt-20 border-t border-white/5">
              <p className="text-xs font-mono text-white/20 uppercase tracking-[0.3em]">
                Last Updated: May 2026 // Ninety5 Studio
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </main>
  );
}
