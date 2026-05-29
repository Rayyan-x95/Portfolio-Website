"use client";

import Link from "next/link";
import { FadeUp } from "./FadeUp";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const categories = [
    {
      title: "General",
      links: [
        { name: "Home", href: "/" },
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
        <div className="container mx-auto max-w-7xl bg-[#090909] border border-white/5 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            
            {/* Brand Section */}
            <div className="md:col-span-4 flex flex-col items-start">
              <Link href="/" className="group">
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tighter text-white uppercase group-hover:text-accent-primary transition-colors duration-500">
                  RAYYAN<span className="text-accent-primary">.</span>
                </h2>
              </Link>
              <p className="mt-8 text-text-muted font-light leading-relaxed max-w-xs">
                Building digital experiences that matter. 
                Architecting the intersection of Graphic Design and high-performance AOSP engineering.
                Every pixel has a purpose.
              </p>
            </div>

            {/* Links Grid */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
              {categories.map((cat) => (
                <div key={cat.title}>
                  <h3 className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
                    {cat.title}
                  </h3>
                  <ul className="space-y-4">
                    {cat.links.map((link) => (
                      <li key={link.name}>
                        <Link 
                          href={link.href}
                          className="text-white hover:text-accent-primary transition-colors duration-300 font-heading text-sm md:text-base font-bold uppercase tracking-tight"
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

          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              © {currentYear} Ninety5 Studio • All Rights Reserved
            </p>
            <div className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              This site is protected. Read our <Link href="/privacy" className="underline hover:text-white transition-colors">Privacy Policy</Link> & <Link href="/terms" className="underline hover:text-white transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </FadeUp>
    </footer>
  );
}
