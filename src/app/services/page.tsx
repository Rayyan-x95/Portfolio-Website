import { PageHeader } from "@/components/ui/PageHeader";
import { TechStack } from "@/components/sections/TechStack";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";
import { Testimonials } from "@/components/sections/Testimonials";
import { Plus, Minus, CheckCircle2, ArrowRight, ShieldCheck, Cpu, Layout, Layers, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services & Engineering Solutions",
  description: "Comprehensive engineering and product design solutions by Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95): AOSP ROM engineering, Linux kernel tuning, custom UI/UX design systems, and Next.js full-stack development.",
  keywords: [
    "AOSP ROM Engineering",
    "Android Kernel Optimization",
    "Custom ROM Developer Chennai",
    "UI UX Design Systems",
    "Next.js Development",
    "Full-Stack Engineer",
    "Creative Technologist",
    "Mohammed Rayyan",
    "Ninety5 Studio"
  ],
  openGraph: {
    title: "Services & Engineering Solutions | Mohammed Rayyan",
    description: "AOSP ROM engineering, mobile systems optimization, design systems, and modern Next.js development by Mohammed Rayyan.",
    url: "https://rayyan.ninety5.in/services",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/services",
  }
};

const engagementTiers = [
  {
    name: "Performance & Architecture Audit",
    tagline: "Diagnostic & Strategic Blueprint",
    description: "In-depth code and kernel review isolating UI frame stalls, scheduler bottlenecks, and memory fragmentation.",
    turnaround: "3–5 Business Days",
    features: [
      "Systrace & Perfetto UI latency profiling",
      "Kernel defconfig & EAS scheduler audit",
      "Web Core Vitals & bundle analysis",
      "Actionable 15-page remediation roadmap"
    ],
    cta: "Request Audit",
    recommended: false,
    icon: Cpu
  },
  {
    name: "Custom AOSP & Kernel Engineering",
    tagline: "Most Requested / High Impact",
    description: "Complete low-level system tuning, EAS task placement optimization, custom thermal drivers, and production ROM builds.",
    turnaround: "2–4 Weeks Sprints",
    features: [
      "Clang/LLVM optimized custom kernel compilation",
      "ZSTD ZRAM & virtual memory tuning",
      "Qualcomm & Tensor thermal throttling mitigation",
      "Up to 35% frame pacing stability enhancement",
      "Complete source code & build artifact handoff"
    ],
    cta: "Initiate AOSP Project",
    recommended: true,
    icon: Layers
  },
  {
    name: "Full-Stack Product & UI/UX Craft",
    tagline: "End-to-End Digital Delivery",
    description: "Bespoke web and mobile applications engineered with cinematic GSAP motion, Next.js 15, and bulletproof design systems.",
    turnaround: "4–8 Weeks Delivery",
    features: [
      "Figma interactive prototyping & tokenized handoff",
      "Next.js 15 App Router + React 19 architecture",
      "Cinematic 120 FPS GSAP & Framer Motion physics",
      "Strict SEO-AEO & Schema Graph optimization",
      "Production CI/CD deployment & post-launch support"
    ],
    cta: "Build Product",
    recommended: false,
    icon: Layout
  }
];

export default function ServicesPage() {
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
        "name": "Services",
        "item": "https://rayyan.ninety5.in/services"
      }
    ]
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://rayyan.ninety5.in/services#services",
    "name": "Services Offered by Ninety5 Studio & Mohammed Rayyan",
    "description": "Professional services spanning system engineering, Android ROM development, and premium UI/UX full-stack development.",
    "url": "https://rayyan.ninety5.in/services",
    "numberOfItems": engagementTiers.length,
    "itemListElement": engagementTiers.map((tier, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": tier.name,
        "description": tier.description,
        "provider": {
          "@type": ["ProfessionalService", "LocalBusiness"],
          "@id": "https://www.ninety5.in/#organization",
          "name": "Ninety5 Studio",
          "url": "https://www.ninety5.in/",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600001",
            "addressCountry": "IN"
          }
        }
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Mohammed Rayyan offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mohammed Rayyan offers three core engineering solutions: custom AOSP ROM and kernel development, end-to-end full-stack Next.js web application engineering, and premium UI/UX design systems with fluid GSAP motion."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical turnaround time for an engineering engagement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Architectural audits take 3–5 business days, custom kernel and AOSP optimization sprints span 2–4 weeks, and comprehensive full-stack product builds typically require 4–8 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support custom Android ROM and kernel optimization for specific devices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We specialize in custom defconfig tuning, EAS scheduler adjustments, Clang compilation, and thermal throttling mitigation across modern Snapdragon, MediaTek, and Tensor platforms."
        }
      },
      {
        "@type": "Question",
        "name": "How does Ninety5 Studio guarantee project delivery and code quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All engagements follow milestone-based deliverable checkpoints with physical hardware benchmarking, automated linting, 100% type safety, and direct client review before sign-off."
        }
      },
      {
        "@type": "Question",
        "name": "Can you work with existing engineering teams and codebases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We seamlessly integrate with in-house teams, providing specialized systems expertise, clean Git PRs, and detailed architecture decision records (ADRs)."
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={servicesSchema} />
      <JsonLd data={faqSchema} />
      <PageHeader 
        title="Solutions" 
        description="Systems-level engineering and cinematic digital products engineered for peak performance." 
      />

      {/* Engagement Tiers (Choice Architecture / Paradox of Choice PLFS: +13) */}
      <section className="container mx-auto max-w-7xl px-4 md:px-6 my-16">
        <div className="text-center mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent-secondary block mb-3">
            Engagement Framework
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tighter">
            Transparent Service Tiers
          </h2>
          <p className="text-sm md:text-base text-text-muted mt-4 max-w-2xl mx-auto">
            Choose the engagement model that matches your product roadmap. Each tier includes milestone guarantees and direct engineering collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engagementTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div 
                key={index}
                className={`relative flex flex-col justify-between p-8 md:p-10 rounded-[2.5rem] bg-[#080808] border transition-all duration-500 ${
                  tier.recommended 
                    ? "border-accent-secondary shadow-2xl shadow-accent-secondary/10 bg-gradient-to-b from-[#110D05] to-[#080808]" 
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-accent-secondary text-black font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3 h-3" />
                    Recommended
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest">
                      {tier.turnaround}
                    </span>
                  </div>

                  <span className="text-xs font-mono text-accent-secondary uppercase tracking-wider block mb-2">
                    {tier.tagline}
                  </span>
                  <h3 className="text-2xl font-heading font-bold text-white uppercase tracking-tight mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed mb-8">
                    {tier.description}
                  </p>

                  <div className="space-y-3.5 pt-6 border-t border-white/5 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-4 rounded-full font-heading text-sm font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                    tier.recommended
                      ? "bg-accent-secondary text-black hover:bg-white"
                      : "bg-white/10 text-white hover:bg-white hover:text-black"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Risk Reversal Banner (Loss Aversion PLFS: +12) */}
        <div className="mt-16 p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-accent-primary/10 border border-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-heading font-bold text-white uppercase tracking-tight">
                Zero-Risk Technical Discovery
              </h3>
              <p className="text-xs md:text-sm text-text-muted mt-1">
                Every project begins with a free scoping roadmap. No locked contracts until architecture and milestones are mutually agreed upon.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-white text-black font-heading text-xs uppercase font-bold tracking-widest hover:bg-accent-primary transition-colors shrink-0"
          >
            Book Scoping Call
          </Link>
        </div>
      </section>

      <div>
        <TechStack />
      </div>
      <Testimonials />
      
      {/* FAQ Section */}
      <section className="container mx-auto max-w-[900px] px-4 md:px-6 mt-24">
        <div className="text-center mb-12">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-accent-secondary">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white uppercase tracking-tighter mt-2">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col border-t border-white/10">
          {faqSchema.mainEntity.map((item, index) => (
            <details key={index} className="group border-b border-white/10 py-6 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-secondary rounded-lg px-2">
                <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:text-accent-secondary transition-colors">
                  {item.name}
                </h3>
                <span className="relative size-5 shrink-0 text-white/50 group-hover:text-white transition-colors">
                  <Plus className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-all duration-300" />
                  <Minus className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-all duration-300" />
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-text-muted text-sm md:text-base px-2">
                {item.acceptedAnswer.text}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
