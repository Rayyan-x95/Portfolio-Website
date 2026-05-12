"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import Image from "next/image";

export function UsesHardware() {
  return (
    <section className="px-4 md:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-accent-primary" />
                <span className="text-xs font-mono tracking-[0.4em] text-accent-primary uppercase">01. Hardware</span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-8">
                My Workstation
              </h2>
              <p className="text-lg md:text-xl font-light text-text-muted leading-relaxed mb-8">
                I believe in a setup that is both powerful and expressive. My workflow is anchored by an ASUS TUF F15, a machine built for raw endurance and high-end performance, paired with the iconic Nothing Phone 3a—a device that embodies my philosophy of technical transparency and minimal design.
              </p>
              <ul className="space-y-4 text-sm font-mono text-white/60">
                <li>• ASUS TUF F15 (High Performance Workhorse)</li>
                <li>• Nothing Phone 3a (Daily Driver / Technical Aesthetic)</li>
              </ul>
            </FadeUp>
          </div>

          {/* Image */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <FadeUp delay={0.2}>
              <div className="relative aspect-video rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-[#050505] border border-white/5 group">
                <Image 
                  src="https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=2070&auto=format&fit=crop"
                  alt="Workstation"
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 right-8 text-right">
                  <span className="text-[10px] font-mono text-accent-primary uppercase tracking-[0.4em] block mb-2">// Setup</span>
                  <span className="text-2xl font-heading font-bold text-white uppercase italic">Essential V1</span>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
