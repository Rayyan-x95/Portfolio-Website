"use client";

import Link from "next/link";
import { ArrowRight, AlertTriangle, Home, Briefcase, FileText, Mail } from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current || !orbRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40;
      const y = (clientY / window.innerHeight - 0.5) * 40;
      
      gsap.to(orbRef.current, {
        x: `${x}vw`,
        y: `${y}vh`,
        duration: 3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, { scope: containerRef });

  return (
    <main 
      ref={containerRef} 
      className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 md:px-6 py-24 w-full selection:bg-accent-primary selection:text-black"
    >
      {/* Background Elements */}
      <div 
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent-primary/20 rounded-full blur-[80px] md:blur-[120px] opacity-30 mix-blend-screen pointer-events-none" 
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container max-w-2xl relative z-10 flex flex-col items-center text-center">
        {/* Glow Warning Badge */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-red-400 mb-8 backdrop-blur-md">
            <AlertTriangle className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase">Error // Route_Not_Resolved</span>
          </div>
        </FadeUp>

        {/* Large 404 Visual */}
        <FadeUp delay={0.2}>
          <h1 className="font-heading text-[8rem] md:text-[12rem] font-bold leading-none tracking-tighter uppercase select-none text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700">
            404
          </h1>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.3}>
          <h2 className="font-heading text-2xl md:text-3xl font-medium tracking-tight uppercase mb-4 text-white">
            Lost in the Stack
          </h2>
        </FadeUp>

        {/* Description */}
        <FadeUp delay={0.4}>
          <p className="text-base md:text-lg font-light text-text-muted leading-relaxed max-w-md mb-12">
            The page you are looking for has either been garbage-collected, renamed, or never existed in the first place. Let&apos;s redirect your request.
          </p>
        </FadeUp>

        {/* Action Options Grid */}
        <FadeUp delay={0.5} className="w-full">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-10">
            <Link 
              href="/"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                <Home className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-text-muted">Return to</p>
                <p className="text-sm font-heading font-medium tracking-wide uppercase text-white group-hover:text-accent-primary transition-colors">Home</p>
              </div>
            </Link>

            <Link 
              href="/work"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-text-muted">Browse my</p>
                <p className="text-sm font-heading font-medium tracking-wide uppercase text-white group-hover:text-accent-primary transition-colors">Work</p>
              </div>
            </Link>

            <Link 
              href="/blogs"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                <FileText className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-text-muted">Read my</p>
                <p className="text-sm font-heading font-medium tracking-wide uppercase text-white group-hover:text-accent-primary transition-colors">Blogs</p>
              </div>
            </Link>

            <Link 
              href="/contact"
              className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group"
            >
              <div className="p-2 rounded-lg bg-accent-primary/10 text-accent-primary">
                <Mail className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-mono text-text-muted">Start a</p>
                <p className="text-sm font-heading font-medium tracking-wide uppercase text-white group-hover:text-accent-primary transition-colors">Project</p>
              </div>
            </Link>
          </div>
        </FadeUp>

        {/* Bottom Button */}
        <FadeUp delay={0.6}>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.2em] text-accent-primary hover:text-white transition-colors duration-300 uppercase group"
          >
            Go to Homepage
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeUp>
      </div>
    </main>
  );
}
