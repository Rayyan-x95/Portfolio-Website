"use client";
import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";

export function About() {
  return (
    <section className="relative py-24 md:py-48 px-4 md:px-6 overflow-hidden bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-start">

          {/* Large Vertical Heading */}
          <div className="md:col-span-12">
            <FadeUp>
              <h2 className="font-heading text-fluid-huge font-bold tracking-tighter text-white uppercase mb-16 md:mb-32">
                Designer <br />
                <span className="text-accent-primary">Who Codes</span>
              </h2>
            </FadeUp>
          </div>

          {/* Portrait & Core Identity */}
          <div className="md:col-span-5 relative">
            <FadeUp delay={0.2}>
              <div className="aspect-[3/4] rounded-[3rem] overflow-hidden bg-white/[0.02] border border-white/5 relative group">
                <Image
                  src="/profile.webp"
                  alt="Mohammed Rayyan"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-bottom grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-12 left-12">
                  <span className="text-xs font-mono text-accent-primary uppercase tracking-[0.4em] block mb-4">{"// Established"}</span>
                  <span className="text-4xl font-heading font-bold text-white uppercase tracking-tighter italic">2008</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Editorial Copy */}
          <div className="md:col-span-6 md:col-start-7 space-y-12 md:space-y-20">
            <FadeUp delay={0.3}>
              <h3 className="text-2xl md:text-4xl font-light text-white leading-[1.3] tracking-tight">
                I bridge the gap between <span className="italic font-medium text-accent-primary">raw system performance</span> and high-end visual storytelling.
              </h3>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="space-y-8 text-lg md:text-xl font-light text-text-muted leading-relaxed">
                <p>
                  Based at the intersection of design and engineering, my work focuses on crafting digital products that don&apos;t just work—they perform with cinematic intent.
                </p>
                <p>
                  As the Founder & Lead Designer of <span className="text-white font-medium">Ninety5 Studio</span>, I lead projects that challenge conventional UI patterns, leveraging my background in AOSP development to build interfaces that are as technically sound as they are visually striking.
                </p>
                <p>
                  I believe that true minimalism isn&apos;t just about removing the unnecessary, but about engineering the essential to perfection.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <span className="text-[10px] font-mono text-accent-primary uppercase tracking-[0.4em] block mb-4">Philosophy</span>
                  <p className="text-white font-heading text-xl uppercase tracking-tighter italic">Intelligent Flow</p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-accent-primary uppercase tracking-[0.4em] block mb-4">Focus</span>
                  <p className="text-white font-heading text-xl uppercase tracking-tighter italic">Cinematic UX</p>
                </div>
              </div>
            </FadeUp>
          </div>

        </div>
      </div>
    </section>
  );
}
