"use client";

import Link from "next/link";
import { FadeUp } from "./FadeUp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const categories = [
    {
      title: "General",
      links: [
        { name: "Home", href: "/#hero" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Blogs", href: "/blogs" },
        { name: "Services", href: "/services" },
      ],
    },
    {
      title: "Studio",
      links: [
        { name: "Uses", href: "/uses" },
        { name: "Labs", href: "/labs" },
        { name: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "Titan", href: "https://github.com/rayyan-x95/Titan" },
        { name: "EduCard", href: "https://github.com/rayyan-x95/EduCard" },
        { name: "Habitate", href: "https://github.com/rayyan-x95/Habitate" },
        { name: "Guestbook", href: "/guestbook" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="px-4 md:px-6 pb-8 md:pb-12">
      <FadeUp>
        <div className="container mx-auto max-w-7xl bg-[#080808] border border-white/5 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          {/* Background Technical Detail */}
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
            <span className="text-[120px] font-heading font-black leading-none">SPEC</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 relative z-10">
            
            {/* Brand Section */}
            <div className="md:col-span-4 flex flex-col items-start">
              <Link href="/" className="group">
                <h2 className="font-heading text-4xl md:text-5xl font-black tracking-tighter text-white uppercase transition-all duration-500 group-hover:text-accent-primary">
                  RAYYAN<span className="text-accent-primary">.</span>
                </h2>
              </Link>
              <div className="mt-8 flex flex-col gap-6">
                <p className="text-sm font-light text-white/50 leading-relaxed max-w-xs">
                  // Architecting the intersection of high-performance engineering and cinematic design.
                </p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">System Status: Operational</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-secondary" />
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">Kernel: Custom AOSP v14.2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {categories.map((cat) => (
                <div key={cat.title}>
                  <h3 className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 mb-8 flex items-center gap-2">
                    <span className="w-1 h-1 bg-white/10" />
                    {cat.title}
                  </h3>
                  <ul className="space-y-4">
                    {cat.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-white/60 hover:text-accent-primary transition-colors duration-300 font-sans text-xs md:text-sm font-medium uppercase tracking-wider"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">
                © {currentYear} <a href="https://ninety5.dpdns.org/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-primary transition-colors">Ninety5 Studio</a> • BUILD_ID: 2026.05.14_PROD
              </p>
              <div className="h-4 w-[1px] bg-white/5 hidden md:block" />
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-mono text-accent-primary uppercase tracking-[0.4em]">LAT: 13.0827° N</span>
                <span className="text-[9px] font-mono text-accent-secondary uppercase tracking-[0.4em]">LNG: 80.2707° E</span>
              </div>
            </div>
            <div className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] flex gap-4">
              <Link href="/privacy" className="hover:text-white transition-colors underline decoration-white/10">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors underline decoration-white/10">Terms</Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
