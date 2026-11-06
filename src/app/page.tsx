import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { Stats } from "@/components/sections/Stats";
import { WorkIndex } from "@/components/sections/WorkIndex";
import { Capability } from "@/components/sections/Capability";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ContactCta } from "@/components/sections/ContactCta";
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
          "text": "Mohammed Rayyan (M Mohammed Rayyan / @rayyan-x95) is the Founder of Ninety5 (ninety5.in), a Creative Technologist, AOSP Kernel Developer, and UI/UX Designer based in Chennai, India."
        }
      },
      {
        "@type": "Question",
        "name": "What is Ninety5 and who founded it?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ninety5 (ninety5.in) is a premium creative studio founded by Mohammed Rayyan in Chennai, India. It specialises in AOSP development, ROM optimisation, UI/UX design, and cinematic digital experiences."
        }
      },
      {
        "@type": "Question",
        "name": "What are Mohammed Rayyan's primary skills and technologies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mohammed Rayyan, Founder of Ninety5 (ninety5.in), specialises in Android Open Source Project (AOSP) development, Linux kernel tuning, Next.js 15, React 19, TypeScript, Kotlin, Jetpack Compose, and cinematic GSAP motion design."
        }
      },
      {
        "@type": "Question",
        "name": "Where can I find Mohammed Rayyan's social profiles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mohammed Rayyan's official profiles: GitHub (https://github.com/rayyan-x95), LinkedIn (https://www.linkedin.com/in/mohrayyan/), Instagram (https://www.instagram.com/rayyan.x95), Telegram (https://t.me/rayyan_x95), Twitter/X (https://x.com/rayyan_x95), and his studio at https://www.ninety5.in."
        }
      }
    ]
  };

  return (
    <main className="w-full bg-paper text-ink">
      <JsonLd data={homeFaqSchema} />
      <Hero />
      <Marquee />
      <Stats />
      <WorkIndex />
      <Capability />
      <AboutPreview />
      <ContactCta />
    </main>
  );
}
