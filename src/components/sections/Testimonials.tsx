"use client";

import { FadeUp } from "@/components/ui/FadeUp";

const testimonials = [
  {
    quote: "Mohammed delivered an exceptional website that exceeded all expectations. The attention to detail in design and code was outstanding.",
    author: "Startup Founder",
    role: "E-Commerce Brand"
  },
  {
    quote: "The branding and vision Rayyan produced for our startup was world-class. Creative vision and great communication throughout.",
    author: "Creative Director",
    role: "Digital Agency"
  },
  {
    quote: "Best developer I've worked with! Clean code, pixel-perfect designs, and always available for revisions. Highly recommend.",
    author: "Product Manager",
    role: "SaaS Platform"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 px-4 md:px-6 relative bg-black">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <span className="text-accent-primary font-mono text-sm mb-8 tracking-[0.2em] block uppercase">
                  // Case 0{index + 1}
                </span>
                <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-12 italic">
                  "{item.quote}"
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
