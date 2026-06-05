import { PageHeader } from "@/components/ui/PageHeader";
import { FadeUp } from "@/components/ui/FadeUp";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The operational framework and terms of service for Ninety5 Studio.",
  openGraph: {
    title: "Terms & Conditions | Ninety5 Studio",
    description: "The operational framework and terms of service for Ninety5 Studio.",
    url: "https://rayyan.ninety5.in/terms",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/terms",
  }
};

export default function TermsPage() {
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
        "name": "Terms & Conditions",
        "item": "https://rayyan.ninety5.in/terms"
      }
    ]
  };

  const terms = [
    {
      title: "Service Agreement",
      content: "All creative engineering and design services provided by Ninety5 Studio are subject to the specific project scope outlined in our individual service agreements. We strive for excellence in every pixel and kernel optimization."
    },
    {
      title: "Intellectual Property",
      content: "Unless otherwise specified, all design systems, source code, and creative assets developed during a project remain the intellectual property of Ninety5 Studio until final project settlement is achieved."
    },
    {
      title: "Studio Usage",
      content: "By using our digital platforms, you agree to respect our creative workspace. Any attempt to scrape content, reverse-engineer our animations, or misuse our API endpoints is strictly prohibited."
    },
    {
      title: "Consultation & Booking",
      content: "Bookings for consultations or project kick-offs are subject to availability. Ninety5 Studio reserves the right to decline projects that do not align with our core design and engineering values."
    }
  ];

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <PageHeader 
        title="Terms & Conditions" 
        description="The operational framework of Ninety5 Studio." 
      />
      
      <div className="container mx-auto max-w-4xl px-4 md:px-6">
        <div className="space-y-20">
          {terms.map((term, index) => (
            <FadeUp key={term.title} delay={index * 0.1}>
              <div className="group relative">
                <div className="flex items-center gap-4 mb-8">
                  <span className="w-8 h-[1px] bg-accent-secondary" />
                  <h2 className="text-sm font-mono uppercase tracking-[0.4em] text-accent-secondary">
                    {term.title}
                  </h2>
                </div>
                <p className="text-lg md:text-xl font-light text-white/40 leading-relaxed group-hover:text-white transition-colors duration-700">
                  {term.content}
                </p>
              </div>
            </FadeUp>
          ))}

          <FadeUp delay={0.5}>
            <div className="pt-20 border-t border-white/5">
              <p className="text-xs font-mono text-white/20 uppercase tracking-[0.3em]">
                Standard Operating Procedure // v1.0.2
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </main>
  );
}
