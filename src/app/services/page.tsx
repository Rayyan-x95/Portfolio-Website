import { PageHeader } from "@/components/ui/PageHeader";
import { TechStack } from "@/components/sections/TechStack";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";
import { Testimonials } from "@/components/sections/Testimonials";
import { Plus, Minus } from "lucide-react";

export const metadata: Metadata = {
  title: "Services & Engineering Solutions",
  description: "Comprehensive engineering and product design solutions by Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95): AOSP ROM engineering, Linux kernel tuning, custom UI/UX design systems, and Next.js full-stack development.",
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
    "numberOfItems": 4,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Service",
          "name": "AOSP & Custom ROM Engineering",
          "description": "Custom Android Open Source Project engineering, kernel optimizations, and custom ROM development for hardware platforms.",
          "provider": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "url": "https://www.ninety5.in/"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Service",
          "name": "Full-Stack Web Development",
          "description": "Building immersive, high-performance web applications using modern stacks (Next.js, React, TypeScript, Node.js) with rich interactions.",
          "provider": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "url": "https://www.ninety5.in/"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Service",
          "name": "UI/UX & Product Design",
          "description": "Crafting premium user interfaces and digital product flows with custom motion design and micro-interactions.",
          "provider": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "url": "https://www.ninety5.in/"
          }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Service",
          "name": "Design Systems & Typography Engineering",
          "description": "Creating scalable, reusable design systems and customized typography structures to enforce brand cohesion.",
          "provider": {
            "@type": "Organization",
            "name": "Ninety5 Studio",
            "url": "https://www.ninety5.in/"
          }
        }
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I offer comprehensive digital solutions including AOSP ROM engineering, mobile system optimization, UI/UX product design, and custom React/Next.js full-stack development."
        }
      },
      {
        "@type": "Question",
        "name": "What is your development process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "My process is client-collaborative: starting with deep discovery, moving to interactive wireframing, high-fidelity design prototyping, robust development with clean code, and ending with thorough automated/manual verification."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support custom Android ROM development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! I provide custom Android kernel tuning, custom AOSP system development, driver mapping, and build compiler optimization for maximum mobile performance."
        }
      },
      {
        "@type": "Question",
        "name": "How do you approach project pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pricing is structured based on the project's scale, tech stack complexity, and delivery schedule. I offer project-based pricing or milestone-based models. Please contact me directly to get a custom quote."
        }
      },
      {
        "@type": "Question",
        "name": "Can you integrate with existing design systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. I build reusable and responsive components styled to enforce cohesion with your existing Figma designs, design systems, and visual guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "I primarily build using TypeScript, Next.js, React, Node.js, Kotlin, C/C++, and GLSL shaders, backed by Framer Motion and GSAP animations for interactive layouts."
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
        title="Expertise" 
        description="Comprehensive solutions spanning from UI/UX design to full-stack engineering." 
      />
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
