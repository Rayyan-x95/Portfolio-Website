"use client";

import { FadeUp } from "@/components/ui/FadeUp";

export function Stats() {
  const stats = [
    { label: "Clients Served", value: "100+", span: "md:col-span-2 md:row-span-2" },
    { label: "Delivered", value: "400+", span: "md:col-span-1 md:row-span-1" },
    { label: "Contributions", value: "1.7K+", span: "md:col-span-1 md:row-span-2" },
    { label: "Years Exp", value: "3+", span: "md:col-span-1 md:row-span-1" }
  ];

  return (
    <section className="py-12 md:py-32 px-4 md:px-6 relative border-y border-white/5 bg-black">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {stats.map((stat, index) => (
            <FadeUp key={stat.label} delay={index * 0.1} className={stat.span}>
              <div className="h-full flex flex-col items-center justify-center text-center p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-700 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <span className="text-5xl md:text-6xl lg:text-8xl font-heading font-bold text-white mb-4 relative z-10 tracking-tighter">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs font-mono text-text-muted uppercase tracking-[0.3em] relative z-10 group-hover:text-accent-secondary transition-colors duration-500">
                  {stat.label}
                </span>
                
                {/* Decorative Element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-accent-primary/10 transition-colors duration-700" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
