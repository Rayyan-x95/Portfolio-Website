"use client";

import { FadeUp } from "./FadeUp";
import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PageHeaderProps {
  title: string;
  description: ReactNode;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !orbRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 50;
      const y = (clientY / window.innerHeight - 0.5) * 50;
      
      gsap.to(orbRef.current, {
        x: `${x}vw`,
        y: `${y}vh`,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 md:px-6 pt-20">
      {/* Background Elements */}
      <div 
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-accent-primary/20 rounded-full blur-[100px] md:blur-[120px] opacity-30 mix-blend-screen pointer-events-none" 
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center text-center">
        <FadeUp>
          <div className="flex items-center gap-4 mb-8">
            <span className="w-12 h-[1px] bg-accent-primary" />
            <span className="text-xs font-mono tracking-[0.4em] text-accent-primary uppercase">Chapter</span>
            <span className="w-12 h-[1px] bg-accent-primary" />
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="font-heading text-fluid-title md:text-fluid-huge font-bold uppercase tracking-tighter mb-8 text-white">
            {title}
          </h1>
        </FadeUp>

        <FadeUp delay={0.2} className="max-w-2xl">
          <p className="text-xl md:text-2xl font-light text-text-muted leading-relaxed tracking-tight">
            {description}
          </p>
        </FadeUp>
      </div>
      
      {/* Editorial Decorative Number */}
      <div className="absolute bottom-0 right-10 translate-y-1/2 opacity-5 select-none pointer-events-none">
        <span className="font-heading text-[20rem] font-bold text-white uppercase italic">
          {title.charAt(0)}
        </span>
      </div>
    </section>
  );
}
