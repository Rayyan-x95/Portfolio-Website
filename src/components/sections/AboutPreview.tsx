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
              <h2 className="font-heading text-fluid-title font-black uppercase tracking-tighter text-white mb-8">
                The <br />
                <span className="text-accent-primary font-editorial italic">Philosophy</span>
              </h2>
              <div className="w-20 h-[1.5px] bg-accent-primary mb-8" />
              <Link href="/about" className="group inline-flex items-center gap-4 text-white/50 font-mono text-[9px] tracking-[0.4em] uppercase hover:text-accent-primary transition-colors duration-500">
                // Explore_Origin
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </FadeUp>
          </div>

          {/* Scrolling Content Right */}
          <div className="md:col-span-6 md:col-start-7 space-y-12 md:space-y-24">
            <FadeUp delay={0.2}>
              <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#080808] border border-white/5 group mb-12">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 via-transparent to-accent-secondary/10 opacity-30 group-hover:opacity-40 transition-opacity duration-1000 z-10" />
                <img 
                  src="https://github.com/rayyan-x95.png" 
                  alt="Mohammed Rayyan"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 scanline opacity-10 pointer-events-none" />
              </div>
              <p className="text-xl md:text-3xl font-light text-white leading-tight mb-8">
                I focus on the intersection of <span className="text-accent-primary italic">system-level performance</span> and visual storytelling.
              </p>
              <p className="text-lg md:text-xl font-light text-white/50 leading-relaxed">
                From building custom Android kernels to crafting high-end design systems, I believe that great digital products are built when the "how" is as beautiful as the "what".
              </p>
            </FadeUp>
            
            <FadeUp delay={0.3}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-white/10 transition-colors">
                  <span className="block text-2xl font-heading font-black text-white mb-2 italic uppercase tracking-tighter">Minimal.</span>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">Aesthetic Core</span>
                </div>
                <div className="p-8 rounded-[2rem] bg-[#080808] border border-white/5 hover:border-white/10 transition-colors">
                  <span className="block text-2xl font-heading font-black text-white mb-2 italic uppercase tracking-tighter">Intelligent.</span>
                  <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">Engineered Flow</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
