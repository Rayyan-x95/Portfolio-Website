"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
                <span className="text-[10px] font-mono tracking-[0.5em] text-accent-primary uppercase">// Expertise_Matrix</span>
                <div className="w-12 h-[1px] bg-white/10" />
              </div>
              <h2 className="font-heading text-fluid-huge font-black uppercase tracking-tighter text-white">
                Core <br /> <span className="font-editorial italic text-accent-primary">Services</span>
              </h2>
            </FadeUp>
          </div>

          {/* Service Cards Grid */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4">
            {services.map((service, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div 
                  data-cursor="expand"
                  className="group relative p-8 md:p-16 rounded-3xl bg-[#080808] border border-white/5 hover:border-accent-primary/20 transition-all duration-500 cursor-pointer overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-100 group-hover:text-accent-primary transition-all duration-500">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                  
                  {/* Technical ID */}
                  <div className="absolute bottom-8 right-8 text-[8px] font-mono text-white/5 uppercase tracking-[0.4em] group-hover:text-accent-primary/10 transition-colors">
                    SRV_ID_0{index + 1}
                  </div>

                  <div className="relative z-10">
                    <span className="text-[10px] font-mono text-accent-secondary mb-8 block tracking-[0.4em]">// 0{index + 1}</span>
                    <h3 className="font-heading text-2xl md:text-5xl font-black text-white mb-6 group-hover:text-accent-primary transition-colors duration-500 uppercase tracking-tighter">
                      {service.title}
                    </h3>
                    <p className="text-lg text-white/50 font-light max-w-xs leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  
                  {/* Scanline Overlay */}
                  <div className="absolute inset-0 scanline opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" />
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="md:col-span-12 mt-12 md:mt-24 flex justify-center">
            <FadeUp>
              <Link href="/services" className="group flex items-center gap-6 px-10 py-5 rounded-full bg-white text-black font-sans text-xs uppercase tracking-[0.4em] font-bold hover:bg-accent-primary transition-all duration-500">
                Explore_Expertise
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
              </Link>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
