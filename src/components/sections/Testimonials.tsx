"use client";

import { FadeUp } from "@/components/ui/FadeUp";

const testimonials = [
  {
    quote: "Mohammed delivered an exceptional website that exceeded all expectations. The attention to detail in design and code was outstanding.",
    author: "Alex Mercer",
    role: "CEO at Veloce Solutions",
    initials: "AM"
  },
  {
    quote: "The branding and vision Rayyan produced for our startup was world-class. Creative vision and great communication throughout.",
    author: "Julian Koren",
    role: "Marketing Lead at Massive Online Marketing",
    initials: "JK"
  },
  {
    quote: "Best developer I've worked with! Clean code, pixel-perfect designs, and always available for revisions. Highly recommend.",
    author: "Sarah Park",
    role: "Product Director at Cognizant",
    initials: "SP"
  },
  {
    quote: "Rayyan's unique blend of custom AOSP engineering and fluid design brought our hardware integration project to life ahead of schedule.",
    author: "Thomas Ryan",
    role: "Founder at RyTech",
    initials: "TR"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="flex flex-col h-full bg-[#050505] border border-white/5 p-8 rounded-[2rem] hover:border-white/10 transition-all duration-300">
                <div className="flex gap-1 mb-6 text-accent-secondary" aria-label="5 out of 5 stars rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden="true">★</span>
                  ))}
                </div>
                <span className="text-accent-primary font-mono text-sm mb-8 tracking-[0.2em] block uppercase">
                  {"// Case 0"}{index + 1}
                </span>
                <p className="text-lg md:text-xl font-light text-white leading-relaxed mb-12 italic">
                  &quot;{item.quote}&quot;
                </p>
                <div className="mt-auto">
                  <p className="text-white font-heading text-lg uppercase tracking-tight">{item.author}</p>
                  <p className="text-xs font-mono text-text-muted uppercase tracking-widest mt-2">{item.role}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
