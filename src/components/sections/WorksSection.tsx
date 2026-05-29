"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import Image from "next/image";

const projects = [
  {
    title: "Titan",
    description: "A high-performance Progressive Web App optimized for offline resilience and state management.",
    tags: ["TypeScript", "Next.js", "PWA"],
    color: "from-accent-primary/20 to-transparent",
    image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    url: "https://github.com/rayyan-x95/Titan"
  },
  {
    title: "EduCard",
    description: "A digital identification and smart card system for educational institutions and student tracking.",
    tags: ["UI/UX", "System Design", "Card System"],
    color: "from-accent-secondary/20 to-transparent",
    image: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop",
    aspect: "aspect-square",
    url: "https://github.com/rayyan-x95/EduCard"
  },
  {
    title: "Ninety5",
    description: "Creative design studio portfolio showcasing brand identity systems, UI/UX, and visual storytelling.",
    tags: ["HTML", "UI/UX", "CSS"],
    color: "from-accent-tertiary/20 to-transparent",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2000&auto=format&fit=crop",
    aspect: "aspect-[4/3]",
    url: "https://github.com/rayyan-x95/Portfolio"
  },
  {
    title: "Habitate",
    description: "A native Android application focused on tracking and maintaining daily habits.",
    tags: ["Kotlin", "Android", "Mobile"],
    color: "from-white/10 to-transparent",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[3/4]",
    url: "https://github.com/rayyan-x95/Habitate"
  },
  {
    title: "AI Career Navigator",
    description: "An AI-powered platform for generating personalized career roadmaps and resume insights.",
    tags: ["AI/ML", "OpenAI API", "React"],
    color: "from-blue-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-video",
    url: "#"
  },
  {
    title: "LUT Playground",
    description: "A web utility for testing and applying cinematic color lookup tables in real-time.",
    tags: ["Color Grading", "WebGL", "Utility"],
    color: "from-red-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-square",
    url: "#"
  },
  {
    title: "F1 Telemetry",
    description: "Real-time dashboard for analyzing Formula 1 telemetry data and driver statistics.",
    tags: ["Data Analysis", "D3.js", "Dashboard"],
    color: "from-yellow-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1512749491228-caef5a7831d7?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[4/3]",
    url: "#"
  },
  {
    title: "TaskZen Android",
    description: "A beautifully crafted native Android task management application with material design.",
    tags: ["Kotlin", "Android", "Mobile"],
    color: "from-green-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-[4/5]",
    url: "#"
  },
  {
    title: "Resume Generator",
    description: "A markdown-based utility for generating ATS-friendly PDF resumes instantly.",
    tags: ["Web Utility", "Markdown", "PDF"],
    color: "from-purple-500/20 to-transparent",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    aspect: "aspect-video",
    url: "#"
  },
  {
    title: "3D Portfolio",
    description: "Experimental 3D portfolio featuring immersive renders and interactive spatial elements.",
    tags: ["Blender", "Three.js", "Renders"],
    color: "from-white/20 to-transparent",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
    aspect: "aspect-square",
    url: "#"
  }
];

import { useState, useRef, MouseEvent } from "react";

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <FadeUp delay={(index % 2) * 0.1} className="break-inside-avoid">
      <a 
        ref={cardRef}
        href={project.url}
        target={project.url.startsWith("http") ? "_blank" : undefined}
        rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
        onMouseMove={handleMouseMove}
        className="group relative flex flex-col gap-6 cursor-pointer bg-white/[0.01] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] p-4 md:p-6 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-primary/5 block overflow-hidden"
      >
        {/* Background Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] md:rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(58, 190, 249, 0.07), transparent 80%)`,
          }}
        />
        
        {/* Border Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] md:rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-accent-primary z-20"
          style={{
            maskImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
          }}
        />
        
        {/* Image Container */}
        <div className={`w-full ${project.aspect} relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-[#050505] border border-white/5`}>
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover opacity-50 group-hover:opacity-90 transition-all duration-1000 ease-[cubic-bezier(0.21,1,0.32,1)] group-hover:scale-[1.04]"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none mix-blend-overlay`} />
        </div>

        {/* Content */}
        <div className="flex flex-col px-2 relative z-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[9px] uppercase font-mono tracking-[0.2em] px-3 py-1 rounded-full border border-white/10 text-white/40 group-hover:border-white/20 group-hover:text-white/60 transition-colors duration-500">
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors duration-500">
            {project.title}
          </h3>
          
          <p className="text-sm md:text-base text-text-muted leading-relaxed font-light line-clamp-3 mb-6">
            {project.description}
          </p>

          <div className="flex items-center gap-2 text-white font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
            View Project 
            <span className="w-8 h-[1px] bg-white/30 group-hover:w-12 group-hover:bg-accent-primary transition-all duration-500" />
          </div>
        </div>

      </a>
    </FadeUp>
  );
}

export function WorksSection({ limit }: { limit?: number }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <section className="py-12 md:py-32 px-4 md:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="columns-1 md:columns-2 gap-8 md:gap-12 space-y-6 md:space-y-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
