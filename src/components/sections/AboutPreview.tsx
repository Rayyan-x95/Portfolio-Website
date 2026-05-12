"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-12 md:py-32 px-4 md:px-6 relative border-y border-white/5 bg-[#050505] overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8 items-start">
          
          {/* Sticky Header Left */}
          <div className="md:col-span-5 md:sticky md:top-32">
            <FadeUp>
              <h2 className="font-heading text-fluid-title font-bold uppercase tracking-tighter text-white mb-8">
                The <br />
                <span className="text-accent-primary">Philosophy</span>
              </h2>
              <div className="w-20 h-[1px] bg-accent-primary mb-8" />
              <Link href="/about" className="group inline-flex items-center gap-4 text-white font-mono text-xs tracking-[0.3em] uppercase hover:text-accent-secondary transition-colors duration-500">
                Explore About
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </FadeUp>
          </div>

          {/* Scrolling Content Right */}
          <div className="md:col-span-6 md:col-start-7 space-y-12 md:space-y-24">
            <FadeUp delay={0.2}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden bg-[#0a0a0a] border border-white/5 group mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 via-transparent to-accent-secondary/20 opacity-30 group-hover:opacity-40 transition-opacity duration-1000 z-10" />
                <img 
                  src="https://github.com/rayyan-x95.png" 
                  alt="Mohammed Rayyan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
              </div>
              <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-8">
                I focus on the intersection of system-level performance and visual storytelling.
              </p>
              <p className="text-lg md:text-xl font-light text-text-muted leading-relaxed">
                From building custom Android kernels to crafting high-end design systems, I believe that great digital products are built when the "how" is as beautiful as the "what".
              </p>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5">
                  <span className="block text-2xl font-heading font-bold text-white mb-2 italic">Minimal.</span>
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Aesthetic Core</span>
                </div>
                <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5">
                  <span className="block text-2xl font-heading font-bold text-white mb-2 italic">Intelligent.</span>
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest">Engineered Flow</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
