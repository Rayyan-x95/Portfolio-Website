import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { WorksSection } from "@/components/sections/WorksSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { Contact } from "@/components/sections/Contact";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { JsonLd } from "@/components/SEO/JsonLd";

export default function Home() {
  const homeFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Mohammed Rayyan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95) is a Creative Technologist, AOSP Kernel Developer, and UI/UX Designer based in Chennai, India. He is the founder of Ninety5 Studio."
        }
      },
      {
        "@type": "Question",
        "name": "What are Mohammed Rayyan's primary skills and technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mohammed Rayyan specializes in Android Open Source Project (AOSP) development, Linux kernel tuning, Next.js 15, React 19, TypeScript, Kotlin, Jetpack Compose, and cinematic GSAP motion design."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find Mohammed Rayyan's social profiles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mohammed Rayyan's official verified profiles are on GitHub (https://github.com/rayyan-x95), LinkedIn (https://www.linkedin.com/in/mohrayyan/), Instagram (https://www.instagram.com/rayyan.x95), Telegram (https://t.me/rayyan_x95), and Twitter/X (https://x.com/rayyan_x95)."
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-24">
      <JsonLd data={homeFaqSchema} />
      <Hero />
      <Stats />
      
      <div className="pt-24 relative">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 mb-12">
          <FadeUp>
            <h2 className="font-heading text-sm font-medium tracking-[0.2em] text-text-muted uppercase">
              {"// Selected Work"}
            </h2>
          </FadeUp>
        </div>
        <WorksSection limit={4} />
        <section className="pb-32 px-4 md:px-6 relative flex justify-center">
          <FadeUp>
            <Link href="/work" className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-heading text-xl uppercase tracking-widest hover:bg-accent-primary transition-colors duration-500">
              View All Work
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </FadeUp>
        </section>
      </div>

      <AboutPreview />
      <ServicesPreview />
      <Contact />
    </main>
  );
}

