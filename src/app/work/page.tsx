import { PageHeader } from "@/components/ui/PageHeader";
import { WorksSection } from "@/components/sections/WorksSection";
import { Metadata } from "next";
import { JsonLd } from "@/components/SEO/JsonLd";
import { GithubActivity } from "@/components/sections/GithubActivity";

export const metadata: Metadata = {
  title: "Selected Work & Engineering Projects",
  description: "Curated portfolio of engineering projects, digital products, custom ROM optimizations, and design systems built by Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95).",
  openGraph: {
    title: "Selected Work & Engineering Projects | Mohammed Rayyan",
    description: "Curated portfolio of engineering projects, digital products, custom ROM optimizations, and design systems built by Mohammed Rayyan.",
    url: "https://rayyan.ninety5.in/work",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/work",
  }
};

export default function WorkPage() {
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
        "name": "Work",
        "item": "https://rayyan.ninety5.in/work"
      }
    ]
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://rayyan.ninety5.in/work#portfolio",
    "name": "Mohammed Rayyan's Selected Works",
    "description": "A showcase of custom AOSP engineering, mobile ROM features, design systems, and web application developments by Mohammed Rayyan.",
    "url": "https://rayyan.ninety5.in/work",
    "author": {
      "@id": "https://rayyan.ninety5.in/#person"
    },
    "creator": {
      "@id": "https://rayyan.ninety5.in/#person"
    },
    "numberOfItems": 10,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "CreativeWork",
          "name": "Titan PWA",
          "description": "High-performance Progressive Web App optimized for offline resilience, service worker caching, and state management.",
          "url": "https://github.com/rayyan-x95/Titan"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "CreativeWork",
          "name": "EduCard",
          "description": "A digital identification and student tracking smart card system for educational institutions.",
          "url": "https://github.com/rayyan-x95/EduCard"
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "CreativeWork",
          "name": "Ninety5 Portfolio",
          "description": "Creative design studio showcase presenting brand identity, UI/UX guidelines, and narrative styling.",
          "url": "https://github.com/rayyan-x95/Portfolio"
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "SoftwareApplication",
          "name": "Habitate Native Android App",
          "description": "Android habit tracking application designed and built with Kotlin, Jetpack Compose, and SQLite Room DB.",
          "applicationCategory": "ProductivityApplication",
          "operatingSystem": "Android",
          "url": "https://github.com/rayyan-x95/Habitate"
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "CreativeWork",
          "name": "AI Career Navigator",
          "description": "Smart pipeline generating optimized professional roadmaps and resumes using LLM agents.",
          "url": "https://rayyan.ninety5.in/work"
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "CreativeWork",
          "name": "LUT WebGL Playground",
          "description": "WebGL tool applying custom color grading lookup tables (LUTs) directly to assets in-browser.",
          "url": "https://rayyan.ninety5.in/work"
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "CreativeWork",
          "name": "F1 Telemetry Dashboard",
          "description": "Telemetry analysis platform rendering high-frequency racing statistics with D3.js.",
          "url": "https://rayyan.ninety5.in/work"
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "SoftwareApplication",
          "name": "TaskZen Android",
          "description": "Material Design task list app built natively for Android in Kotlin.",
          "applicationCategory": "ProductivityApplication",
          "operatingSystem": "Android",
          "url": "https://rayyan.ninety5.in/work"
        }
      },
      {
        "@type": "ListItem",
        "position": 9,
        "item": {
          "@type": "CreativeWork",
          "name": "Resume Markdown Generator",
          "description": "Markdown utility compiler producing highly readable ATS-optimized PDF resume templates.",
          "url": "https://rayyan.ninety5.in/work"
        }
      },
      {
        "@type": "ListItem",
        "position": 10,
        "item": {
          "@type": "CreativeWork",
          "name": "3D Immersive Portfolio",
          "description": "Interactive WebGL environment rendering spatial graphics using Three.js and custom Blender assets.",
          "url": "https://rayyan.ninety5.in/work"
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={portfolioSchema} />
      <PageHeader 
        title="Selected Work" 
        description="A curated showcase of engineering projects, digital products, and design systems." 
      />
      <div className="pt-8">
        <WorksSection />
      </div>
      <GithubActivity />
    </main>
  );
}
