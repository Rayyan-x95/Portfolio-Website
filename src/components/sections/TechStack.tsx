"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { ChevronRight } from "lucide-react";

const techCategories = [
  {
    title: "Full-Stack Engineering",
    description: "Architecting enterprise-grade web applications with modern component-based architecture and type-safe systems.",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Firebase", "PostgreSQL"],
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Design Engineering & 3D",
    description: "Developing comprehensive design systems, high-fidelity UI/UX, and photorealistic 3D visualization for immersive products.",
    skills: ["Figma", "Blender", "UI/UX", "Design Systems", "Framer Motion"],
    color: "from-accent-primary/20 to-transparent"
  },
  {
    title: "Mobile & AOSP",
    description: "Engineering custom Android operating systems, native performance-focused mobile apps, and custom kernel optimizations.",
    skills: ["Kotlin", "Jetpack Compose", "AOSP", "Linux Kernel", "Shell Scripting"],
    color: "from-accent-secondary/20 to-transparent"
  },
  {
    title: "Digital Media Production",
    description: "Producing high-quality cinematic video content, advanced color grading workflows, and motion graphics.",
    skills: ["DaVinci Resolve", "Color Grading", "Motion Graphics", "Adobe Suite"],
    color: "from-purple-500/20 to-transparent"
  }
];

export function TechStack() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative bg-black overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col space-y-12">
          {techCategories.map((category, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div 
                className="group relative flex flex-col md:flex-row items-start md:items-center justify-between py-12 md:py-20 border-b border-white/10 cursor-pointer transition-all duration-700"
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none -z-10`} />
                
                <div className="flex items-baseline gap-8 md:gap-12 relative z-10">
                  <span className="font-mono text-xs md:text-sm text-white/20 group-hover:text-accent-primary transition-colors duration-500">
                    0{index + 1}
                  </span>
                  <h3 className="font-heading text-3xl md:text-6xl font-bold uppercase tracking-tighter text-white group-hover:translate-x-4 transition-transform duration-700">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-8 md:mt-0 md:max-w-md relative z-10">
                  <p className="text-lg md:text-xl font-light text-text-muted group-hover:text-white transition-colors duration-700 leading-relaxed mb-6">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                    {category.skills.map(skill => (
                      <span key={skill} className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/50">
                        {skill} {index !== category.skills.length - 1 ? "•" : ""}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="hidden md:block absolute right-0 opacity-0 group-hover:opacity-100 group-hover:-right-4 transition-all duration-700">
                  <ChevronRight className="w-12 h-12 text-accent-primary" />
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
