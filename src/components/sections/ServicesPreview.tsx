"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { useState, useRef, MouseEvent } from "react";

function ServiceCard({ service, index }: { service: { title: string; desc: string }; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  return (
    <FadeUp delay={index * 0.1}>
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 cursor-pointer overflow-hidden"
      >
        {/* Background Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] md:rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(300px circle at ${coords.x}px ${coords.y}px, rgba(58, 190, 249, 0.06), transparent 80%)`,
          }}
        />
        
        {/* Border Spotlight Glow */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] md:rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-accent-primary z-20"
          style={{
            maskImage: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
            WebkitMaskImage: `radial-gradient(120px circle at ${coords.x}px ${coords.y}px, black, transparent)`,
          }}
        />

        <div className="absolute top-0 right-0 p-8 md:p-12 opacity-20 group-hover:opacity-100 group-hover:text-accent-primary transition-all duration-700 scale-75 group-hover:scale-100">
          <ArrowUpRight className="w-12 h-12" />
        </div>
        
        <div className="relative z-10">
          <span className="text-sm font-mono text-white/20 mb-6 block">0{index + 1}</span>
          <h3 className="font-heading text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors duration-500">
            {service.title}
          </h3>
          <p className="text-lg text-text-muted font-light max-w-xs opacity-60 group-hover:opacity-100 transition-opacity duration-500">
            {service.desc}
          </p>
        </div>
      </div>
    </FadeUp>
  );
}

export function ServicesPreview() {
  const services = [
    { title: "Full-Stack Engineering", desc: "Building scalable, type-safe systems." },
    { title: "UI/UX Design", desc: "Cinematic, user-centric interfaces." },
    { title: "Design Systems", desc: "Atomic scalability and consistency." },
    { title: "Mobile & AOSP", desc: "Native performance and custom kernels." },
  ];

  return (
    <section className="py-12 md:py-48 px-4 md:px-6 relative overflow-hidden bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          
          {/* Header */}
          <div className="md:col-span-12 mb-8 md:mb-24">
            <FadeUp>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-accent-primary" />
                <span className="text-xs font-mono tracking-[0.4em] text-accent-primary uppercase">Expertise</span>
              </div>
              <h2 className="font-heading text-fluid-huge font-bold uppercase tracking-tighter text-white">
                Core <br /> Services
              </h2>
            </FadeUp>
          </div>

          {/* Service Cards Grid */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* Footer CTA */}
          <div className="md:col-span-12 mt-12 md:mt-24 flex justify-center">
            <FadeUp>
              <Link href="/services" className="group flex items-center gap-6 px-10 py-5 rounded-full bg-white text-black font-heading text-lg uppercase tracking-widest hover:bg-accent-primary transition-all duration-500">
                Explore Expertise
                <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
