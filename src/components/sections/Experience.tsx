"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { motion } from "framer-motion";
import { Globe, Zap } from "lucide-react";

const experiences = [
  {
    role: "Founder & Lead Designer",
    company: "Ninety5 Studio",
    year: "2023 — PRES",
    desc: "Leading a creative collective focused on bridging the gap between raw code and cinematic design.",
    status: "Active",
    color: "bg-blue-500"
  },
  {
    role: "B.E. Computer Science",
    company: "Dhaanish Ahmed College of Engineering",
    year: "2025 — 2029",
    desc: "Specializing in software architecture and systems engineering while building the Ninety5 ecosystem.",
    status: "Academic",
    color: "bg-orange-500"
  },
  {
    role: "Design Engineer",
    company: "Independent",
    year: "2022 — PRESENT",
    desc: "Contracting for high-growth startups to implement precision UI systems and motion-first architectures.",
    status: "Active",
    color: "bg-orange-500"
  },
  {
    role: "ROM Developer",
    company: "AOSP Projects",
    year: "2021 — 2023",
    desc: "Developed custom Android skins focusing on kernel optimization and minimalist UI transparency.",
    status: "Legacy",
    color: "bg-blue-500"
  },
  {
    role: "UI/UX Intern",
    company: "Cognifyz Tech",
    year: "2026 — 2026",
    desc: "Exploring industrial-scale design systems and accessibility-first user journeys.",
    status: "Internship",
    color: "bg-zinc-500"
  },
];

export function Experience() {
  return (
    <section className="py-32 md:py-64 px-4 md:px-6 relative bg-black overflow-hidden">
      <div className="container mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-24 md:mb-48">
          <FadeUp>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-accent-primary" />
              <span className="text-[10px] font-mono tracking-[0.5em] text-accent-primary uppercase">02. Trajectory</span>
            </div>
            <h2 className="font-heading text-6xl md:text-[10rem] font-bold uppercase tracking-tighter text-white leading-[0.8] mb-12">
              Career <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Path</span>
            </h2>
          </FadeUp>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Track Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-24 md:space-y-48">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const accentColor = isEven ? "accent-primary" : "accent-secondary";
              return (
                <FadeUp key={index} delay={index * 0.1}>
                  <div className={`relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 ${isEven ? "md:flex-row-reverse" : ""}`}>

                    {/* Content Card */}
                    <div className="w-full md:w-[45%]">
                      <motion.div
                        whileHover={{ y: -5 }}
                        className={`group p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-${accentColor}/20 transition-all duration-700 relative overflow-hidden`}
                      >
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">{exp.year}</span>
                          <div className={`px-3 py-1 rounded-full bg-${accentColor}/10 border border-${accentColor}/20 text-[9px] font-mono uppercase tracking-widest text-${accentColor}`}>
                            {exp.status}
                          </div>
                        </div>

                        <h3 className={`text-3xl md:text-5xl font-heading font-bold text-white uppercase tracking-tighter leading-none mb-6 group-hover:text-${accentColor} transition-colors duration-500`}>
                          {exp.role}
                        </h3>

                        <div className="flex items-center gap-2 mb-6">
                          <Globe className="w-3 h-3 text-white/20" />
                          <span className="text-sm font-light text-text-muted">@ {exp.company}</span>
                        </div>

                        <p className="text-base text-white/40 leading-relaxed font-light">
                          {exp.desc}
                        </p>

                        {/* Background Glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-${accentColor}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                      </motion.div>
                    </div>

                    {/* Timeline Center Point */}
                    <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className="relative flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center relative z-10 group cursor-pointer">
                          <Zap className={`w-5 h-5 text-${accentColor} group-hover:scale-125 transition-transform`} />
                        </div>
                        {/* Animated Pulses */}
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className={`absolute inset-0 rounded-full bg-${accentColor}/20 blur-xl`}
                        />
                      </div>
                    </div>

                    {/* Empty Space for alignment */}
                    <div className="hidden md:block w-[45%]" />
                  </div>
                </FadeUp>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
