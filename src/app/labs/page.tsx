import { PageHeader } from "@/components/ui/PageHeader";
import { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { GitBranch, ExternalLink, Box, Database, Smartphone, Activity, Terminal, Layout } from "lucide-react";
import { JsonLd } from "@/components/SEO/JsonLd";

export const metadata: Metadata = {
  title: "Labs & Experimental Prototypes",
  description: "Experimental research playground featuring PWA utilities, mobile applications, interactive telemetry dashboards, and WebGL shader prototypes by Mohammed Rayyan (Mohammed Rayyan M / @rayyan-x95).",
  openGraph: {
    title: "Labs & Experimental Prototypes | Mohammed Rayyan",
    description: "Experimental research playground featuring PWA utilities, mobile applications, and WebGL prototypes.",
    url: "https://rayyan.ninety5.in/labs",
    type: "website",
  },
  alternates: {
    canonical: "https://rayyan.ninety5.in/labs",
  }
};

export default function LabsPage() {
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
        "name": "Labs & Experiments",
        "item": "https://rayyan.ninety5.in/labs"
      }
    ]
  };

  const labsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://rayyan.ninety5.in/labs#labs",
    "name": "Mohammed Rayyan's Experimental Labs",
    "description": "Interactive prototypes, software experiments, and micro-tools created by Mohammed Rayyan.",
    "url": "https://rayyan.ninety5.in/labs",
    "author": {
      "@id": "https://rayyan.ninety5.in/#person"
    }
  };

  const labsProjects = [
    {
      title: "Titan",
      description: "A high-performance Progressive Web App optimized for offline resilience and state management. Built with complex caching strategies and atomic database transactions.",
      icon: Database,
      tags: ["Next.js", "PWA", "Zustand"],
      url: "https://github.com/rayyan-x95/Titan",
    },
    {
      title: "EduCard",
      description: "A digital identification and smart card system for educational institutions. Features encrypted student tracking and automated attendance logic.",
      icon: Box,
      tags: ["React", "Firebase", "Design"],
      url: "https://github.com/rayyan-x95/EduCard",
    },
    {
      title: "Habitate",
      description: "A native Android application focused on tracking and maintaining daily habits. Built with Jetpack Compose and offline-first Room database.",
      icon: Smartphone,
      tags: ["Kotlin", "Compose", "Room"],
      url: "https://github.com/rayyan-x95/Habitate",
    },
    {
      title: "AI Navigator",
      description: "An AI-powered platform for generating personalized career roadmaps and resume insights using LLM orchestration.",
      icon: Activity,
      tags: ["AI/ML", "OpenAI", "React"],
      url: "#",
    },
    {
      title: "F1 Telemetry",
      description: "Real-time dashboard for analyzing Formula 1 telemetry data and driver statistics with high-frequency updates.",
      icon: Terminal,
      tags: ["Data", "D3.js", "F1"],
      url: "#",
    },
    {
      title: "LUT Playground",
      description: "A web utility for testing and applying cinematic color lookup tables in real-time using WebGL shaders.",
      icon: Layout,
      tags: ["WebGL", "Color", "GLSL"],
      url: "#",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={labsSchema} />
      <PageHeader 
        title="Labs" 
        description="Experimental playground & fun micro-tools." 
      />
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {labsProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <FadeUp key={project.title} delay={index * 0.1}>
                <div className="group relative flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden min-h-[400px]">
                  {/* Background Decoration */}
                  <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-primary/5 rounded-full blur-3xl group-hover:bg-accent-primary/10 transition-colors duration-1000" />
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-accent-primary/10 transition-all duration-500">
                    <Icon className="w-7 h-7 text-white/40 group-hover:text-accent-primary transition-colors duration-500" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-mono uppercase tracking-widest text-white/20 border border-white/5 px-3 py-1 rounded-full group-hover:border-white/10 group-hover:text-white/40 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-heading font-bold text-white mb-4 uppercase tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-text-muted font-light leading-relaxed mb-12">
                    {project.description}
                  </p>

                  {/* Actions */}
                  <div className="mt-auto flex items-center gap-4">
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] font-mono text-white uppercase tracking-widest bg-white/5 border border-white/10 px-5 py-3 rounded-xl hover:bg-white hover:text-black transition-all"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      Source
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-2 text-[10px] font-mono text-white/30 uppercase tracking-widest hover:text-accent-primary transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Preview
                    </a>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </main>
  );
}
