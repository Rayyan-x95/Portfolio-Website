"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Terminal, Music, ArrowRight, Briefcase, Send } from "lucide-react";

export function Curtains() {
  return (
    <section className="px-4 md:px-6 py-32 relative bg-[#050505]">
      <div className="container mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <FadeUp>
            <span className="text-[10px] font-mono tracking-[0.5em] text-white/30 uppercase block mb-6">Behind the Curtains</span>
            <h2 className="text-5xl md:text-8xl font-heading font-bold text-white uppercase tracking-tighter leading-[0.9]">
              Decoding logic <br /> 
              <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-blue-500 to-accent-secondary">
                && the lyrics
              </span>
            </h2>
          </FadeUp>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* GitHub Card */}
          <FadeUp delay={0.1}>
            <div className="group relative h-[450px] bg-black border border-white/5 rounded-[2.5rem] p-10 flex flex-col hover:border-white/20 transition-all duration-700 overflow-hidden">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Terminal className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-heading font-bold text-white uppercase italic tracking-tighter">Rayyan&apos;s GitHub</span>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/30">Latest Push</span>
                  <div className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[9px] font-mono text-green-500 uppercase tracking-tighter">8h ago</span>
                  </div>
                </div>
                <p className="text-lg font-medium text-white leading-relaxed group-hover:text-white transition-colors">
                  &quot;feat: add scripts for template registry generation, operational checks, and stor...&quot;
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Repo:</span>
                  <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest font-bold">Private work</span>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/5 flex gap-6">
                <Terminal className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                <Briefcase className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
                <Send className="w-4 h-4 text-white/20 hover:text-white transition-colors cursor-pointer" />
              </div>

              {/* Decorative Glow */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/[0.02] blur-[100px] rounded-full" />
            </div>
          </FadeUp>

          {/* Guestbook Card */}
          <FadeUp delay={0.2}>
            <div className="group relative h-[450px] bg-black border border-white/5 rounded-[2.5rem] p-10 flex flex-col hover:border-white/20 transition-all duration-700 overflow-hidden">
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 mb-8 block">Visitors</span>
              
              <div className="mb-10">
                <h3 className="text-5xl font-heading font-bold text-white uppercase tracking-tighter leading-none mb-2">
                  Leave your <br />
                  <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">signature</span>
                </h3>
                <p className="text-sm text-white/40 font-light mt-6">Let me know you were here.</p>
              </div>

              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-white/10 overflow-hidden">
                        <Image 
                          src={`https://i.pravatar.cc/100?u=${i}`}
                          alt="Visitor"
                          width={40}
                          height={40}
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">Join others</span>
                </div>

                <Link 
                  href="/guestbook"
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2 group/btn"
                >
                  Sign Guestbook <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Animated Background Pulse */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-10 bg-accent-secondary/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>
          </FadeUp>

          {/* Spotify Card */}
          <FadeUp delay={0.3}>
            <div className="group relative h-[450px] bg-black border border-white/5 rounded-[2.5rem] p-10 flex flex-col hover:border-white/20 transition-all duration-700 overflow-hidden">
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 rounded-full bg-[#1DB954] flex items-center justify-center">
                  <Music className="w-4 h-4 text-black" />
                </div>
                <span className="text-sm font-bold text-white uppercase tracking-widest">Last Played</span>
              </div>

              <div className="relative z-10">
                <p className="text-lg font-light text-white/60 leading-relaxed">
                  I recently listened to <span className="text-white font-bold">Under the Influence</span> by <span className="text-white font-bold">Chris Brown</span> from the album <span className="text-white/40 italic">Indigo (Extended)</span>
                </p>
              </div>

              {/* Vinyl Animation */}
              <div className="mt-auto relative h-48 w-full flex items-center justify-center">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="relative w-40 h-40 rounded-full bg-[#111] border-[10px] border-[#1a1a1a] shadow-2xl flex items-center justify-center overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(255,255,255,0.05)_41%,transparent_42%)] bg-[length:10px_10px]" />
                  <div className="w-16 h-16 rounded-full bg-white/10 overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop"
                      alt="Album Cover"
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
                
                {/* Floating Artwork */}
                <div className="absolute -bottom-4 right-0 w-32 h-32 rounded-2xl overflow-hidden shadow-2xl rotate-6 group-hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src="https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1974&auto=format&fit=crop"
                    alt="Current Track"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
