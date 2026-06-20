"use client";

import Link from "next/link";
import { FadeUp } from "./FadeUp";
import { ArrowUp, ArrowUpRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Blogs", href: "/blogs" },
        { name: "Services", href: "/services" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Uses & Setup", href: "/uses" },
        { name: "Labs (Experiments)", href: "/labs" },
        { name: "Guestbook", href: "/guestbook" },
      ],
    },
    {
      title: "Projects",
      links: [
        { name: "Titan PWA", href: "https://github.com/rayyan-x95/Titan" },
        { name: "EduCard App", href: "https://github.com/rayyan-x95/EduCard" },
        { name: "Habitate App", href: "https://github.com/rayyan-x95/Habitate" },
      ],
    },
    {
      title: "Contact",
      links: [
        { name: "GitHub", href: "https://github.com/rayyan-x95" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/mohrayyan/" },
        { name: "Instagram", href: "https://www.instagram.com/rayyan.x95" },
        { name: "Telegram", href: "https://t.me/rayyan_x95" },
      ],
    },
  ];

  return (
    <footer className="px-4 md:px-6 pb-8 md:pb-12 mt-24">
      <FadeUp>
        <div className="container mx-auto max-w-7xl bg-[#080808]/80 backdrop-blur-md border border-white/5 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 relative overflow-hidden group">
          {/* Subtle Ambient light */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent-primary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent-primary/10 transition-colors duration-1000" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent-secondary/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-accent-secondary/10 transition-colors duration-1000" />

          <div className="relative z-10">
            {/* Top Row: Giant Text Header */}
            <div className="border-b border-white/5 pb-12 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
              <h2 className="font-heading text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                Let&apos;s build <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">something cinematic</span>
              </h2>
              <Link 
                href="/contact" 
                className="group/btn inline-flex items-center gap-3 bg-white text-black px-8 py-5 rounded-full font-heading text-sm font-bold uppercase tracking-widest hover:bg-accent-primary hover:text-black transition-all duration-500"
              >
                Start Transmission 
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />
              </Link>
            </div>

            {/* Middle Row: Links and Brand */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
              
              {/* Brand & Status Column */}
              <div className="lg:col-span-4 flex flex-col items-start justify-between">
                <div>
                  <Link href="/" className="group inline-block mb-6">
                    <h3 className="font-heading text-3xl font-extrabold tracking-tighter text-white uppercase group-hover:text-accent-primary transition-colors duration-500">
                      RAYYAN<span className="text-accent-primary">.</span>
                    </h3>
                  </Link>
                  <p className="text-text-muted font-light text-sm leading-relaxed max-w-sm">
                    Architecting the intersection of high-performance system engineering and cinematic UI design.
                  </p>
                </div>

                {/* Status Indicator */}
                <div className="mt-8 p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex items-center gap-4 w-full max-w-xs">
                  <div className="relative flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-accent-primary"></span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest leading-none">System Status</span>
                    <span className="text-[10px] font-mono text-white uppercase tracking-wider font-bold mt-1">Ready for projects</span>
                  </div>
                </div>
              </div>

              {/* Links Grid */}
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {categories.map((cat) => (
                  <div key={cat.title}>
                    <h4 className="font-heading text-[10px] font-black uppercase tracking-[0.3em] text-text-muted mb-6">
                      {cat.title}
                    </h4>
                    <ul className="space-y-3">
                      {cat.links.map((link) => {
                        const isExternal = link.href.startsWith("http");
                        
                        if (isExternal) {
                          return (
                            <li key={link.name}>
                              <a 
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${link.name} in a new tab`}
                                className="group/link inline-flex items-center gap-1.5 text-white/50 hover:text-accent-primary transition-colors duration-300 font-heading text-sm uppercase tracking-tight font-medium"
                              >
                                {link.name}
                                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                              </a>
                            </li>
                          );
                        }

                        return (
                          <li key={link.name}>
                            <Link 
                              href={link.href}
                              className="group/link inline-flex items-center gap-1.5 text-white/50 hover:text-accent-primary transition-colors duration-300 font-heading text-sm uppercase tracking-tight font-medium"
                            >
                              {link.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row: Metadata & Scroll to Top */}
            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                  © {currentYear} Ninety5 Studio
                </p>
                <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest">
                  Mohammed Rayyan • Chennai, India • hello@ninety5.in • +91 XXXXXXXXXX
                </p>
                <div className="hidden md:block w-1 h-1 bg-white/10 rounded-full" />
                <div className="text-[10px] font-mono text-text-muted uppercase tracking-widest space-x-4">
                  <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
                  <span>•</span>
                  <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                </div>
              </div>

              <button 
                onClick={handleScrollToTop}
                className="group/totop flex items-center gap-2 border border-white/10 hover:border-accent-primary rounded-full px-5 py-3 text-[10px] font-mono text-white/40 hover:text-accent-primary transition-all duration-300 uppercase tracking-widest"
              >
                Back to top 
                <ArrowUp className="w-3.5 h-3.5 group-hover/totop:-translate-y-0.5 transition-transform duration-300" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
