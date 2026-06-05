"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FadeUp } from "@/components/ui/FadeUp";
import { Code2, Cpu, Palette } from "lucide-react";
import Image from "next/image";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          rotateY: x * 0.1,
          rotateX: -y * 0.1,
          duration: 1,
          ease: "power1.out"
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-32 bg-black">
      {/* Background Dynamics */}
      <div
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-accent-primary/10 rounded-full blur-[100px] md:blur-[150px] opacity-20 mix-blend-screen pointer-events-none"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left: Identity & Copy */}
          <div className="lg:col-span-8 flex flex-col items-start text-left relative z-20">
            <FadeUp delay={0.1}>
              <h1 className="font-heading text-fluid-huge font-black tracking-tighter uppercase text-white leading-[0.8] mb-12">
                Mohammed <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-accent-primary italic pr-10">Rayyan</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2} className="max-w-2xl">
              <p className="text-xl md:text-3xl font-light text-text-muted leading-tight tracking-tight mb-12">
                Founder of <a href="https://www.ninety5.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-accent-primary underline decoration-accent-primary/20 hover:decoration-accent-primary underline-offset-4 decoration-1 transition-all duration-300">Ninety5 Studio</a>. Architecting the intersection of <span className="text-white italic">Graphic Design</span> and high-performance AOSP engineering.
              </p>

              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-primary/10 flex items-center justify-center border border-accent-primary/20 group-hover:bg-accent-primary/20 transition-all">
                    <Code2 className="w-5 h-5 text-accent-primary" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Full-Stack</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-secondary/10 flex items-center justify-center border border-accent-secondary/20 group-hover:bg-accent-secondary/20 transition-all">
                    <Cpu className="w-5 h-5 text-accent-secondary" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">AOSP/Kernel</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl bg-accent-tertiary/10 flex items-center justify-center border border-accent-tertiary/20 group-hover:bg-accent-tertiary/20 transition-all">
                    <Palette className="w-5 h-5 text-accent-tertiary" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">UI/UX Design</span>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: Cinematic Portrait */}
          <div className="lg:col-span-4 relative group perspective-1000">
            <FadeUp delay={0.4}>
              <div
                ref={imageRef}
                className="relative aspect-[3/4] rounded-[4rem] overflow-hidden bg-white/[0.02] border border-white/5 shadow-2xl transition-transform duration-500 ease-out"
              >
                <Image
                  src="/profile.png"
                  alt="Mohammed Rayyan"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-bottom grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                {/* Floating Meta-Info */}
                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-accent-primary uppercase tracking-[0.4em] mb-2">{"// Origin"}</span>
                    <span className="text-2xl font-heading font-bold text-white uppercase italic">2008</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] mb-2">Location</span>
                    <span className="text-xs font-mono text-white uppercase tracking-widest">Chennai, India</span>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Decorative Element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-primary/10 rounded-full blur-3xl -z-10 group-hover:bg-accent-primary/20 transition-colors duration-1000" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <FadeUp delay={1} className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/20 hover:text-white/50 transition-colors">
        <span className="text-[8px] uppercase tracking-[0.5em] font-mono mb-4 text-accent-secondary">Discover</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-secondary/50 to-transparent animate-shimmer" />
      </FadeUp>
    </section>
  );
}
