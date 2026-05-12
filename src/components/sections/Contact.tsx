"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowUpRight, Camera, Briefcase, Terminal, Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);
  
  const socials = [
    { name: "Instagram", icon: Camera, url: "https://instagram.com/rayyan_x95" },
    { name: "LinkedIn", icon: Briefcase, url: "https://linkedin.com/in/rayyan-x95" },
    { name: "GitHub", icon: Terminal, url: "https://github.com/rayyan-x95" },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText("mmohammedrayyan0808@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 md:py-64 px-4 md:px-6 relative bg-black overflow-hidden">
      <div className="container mx-auto max-w-[1400px]">
        
        {/* Editorial Header */}
        <div className="mb-24">
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase">Availability: Q2 2026</span>
            </div>
            <h2 className="font-heading text-6xl md:text-[8rem] font-bold text-white uppercase tracking-tighter leading-[0.8]">
              Got an idea? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary italic">Let's Talk.</span>
            </h2>
          </FadeUp>
        </div>

        {/* Redesigned Direct Inquiry Section */}
        <FadeUp delay={0.2}>
          <div className="group relative border-y border-white/5 py-20 mb-24">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
              
              <div className="relative flex-1 group/email">
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20 mb-6 block group-hover/email:text-accent-primary transition-colors">
                  // Direct Inquiry
                </span>
                
                <div className="relative inline-block">
                  <a 
                    href="mailto:mmohammedrayyan0808@gmail.com"
                    className="font-heading text-3xl md:text-7xl font-bold text-white tracking-tighter block hover:text-accent-primary transition-all duration-700 break-all pr-20"
                  >
                    mmohammedrayyan0808@gmail.com
                  </a>
                  
                  {/* Copy Button Inside */}
                  <button 
                    onClick={handleCopy}
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white hover:text-black transition-all duration-500"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                        >
                          <Check className="w-5 h-5 text-accent-primary" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.5, opacity: 0 }}
                        >
                          <Copy className="w-5 h-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              {/* Haptic CTA Pill */}
              <div className="flex flex-col items-center gap-6">
                <a 
                  href="mailto:mmohammedrayyan0808@gmail.com"
                  className="group/pill relative w-48 h-16 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center overflow-hidden hover:border-white transition-all duration-700"
                >
                  <span className="relative z-10 text-[11px] font-bold text-white uppercase tracking-[0.3em] group-hover/pill:text-black transition-colors duration-700">
                    Send Mail
                  </span>
                  <motion.div 
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", damping: 20 }}
                    className="absolute inset-0 bg-white"
                  />
                </a>
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Average response: 24h</span>
              </div>

            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-primary/5 via-transparent to-accent-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
          </div>
        </FadeUp>

        {/* Social Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {socials.map((social, index) => (
            <FadeUp key={social.name} delay={index * 0.1}>
              <a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-10 rounded-[2.5rem] bg-[#050505] border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden"
              >
                <div className="flex items-center gap-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent-primary group-hover:text-black transition-all duration-500">
                    <social.icon className="w-4 h-4" />
                  </div>
                  <span className="font-heading text-lg font-bold uppercase tracking-tighter text-white/60 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 relative z-10" />
                
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </a>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
