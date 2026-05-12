"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Zap, 
  Sparkles, 
  Smile, 
  Music, 
  Hash, 
  Briefcase, 
  Globe 
} from "lucide-react";

const integrations = [
  {
    name: "ChatGPT",
    role: "AI Assistant",
    icon: MessageSquare,
    color: "text-[#74aa9c]"
  },
  {
    name: "Claude",
    role: "Advanced Reasoning",
    icon: Zap,
    color: "text-[#d97757]"
  },
  {
    name: "Gemini",
    role: "Multimodal AI",
    icon: Sparkles,
    color: "text-[#4285f4]"
  },
  {
    name: "Hugging Face",
    role: "AI Models",
    icon: Smile,
    color: "text-[#ffbd1e]"
  },
  {
    name: "Spotify",
    role: "Audio Streaming",
    icon: Music,
    color: "text-[#1db954]"
  },
  {
    name: "X",
    role: "Tech Twitter",
    icon: Hash,
    color: "text-white"
  },
  {
    name: "LinkedIn",
    role: "Professional Network",
    icon: Briefcase,
    color: "text-[#0077b5]"
  },
  {
    name: "Peerlist",
    role: "Developer Network",
    icon: Globe,
    color: "text-[#00aa45]"
  }
];

export function UsesIntegrations() {
  return (
    <section className="px-4 md:px-6 relative py-32 md:py-64">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-accent-primary" />
                <span className="text-[10px] font-mono tracking-[0.4em] text-accent-primary uppercase">03. Integrations</span>
              </div>
              <h2 className="font-heading text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-10 leading-[0.9]">
                AI & SOCIALS
              </h2>
              <p className="text-lg font-light text-white/40 leading-relaxed max-w-md">
                Beyond bare metal and development tools, these are the platforms powering my daily workflows. I leverage advanced LLMs for rapid prototyping, reasoning, and context analysis, while staying connected across professional design networks. Every API and social integration is meticulously selected to amplify productivity.
              </p>
            </FadeUp>
          </div>

          {/* Grid Section */}
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrations.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeUp key={item.name} delay={index * 0.05}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 overflow-hidden text-center aspect-square"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:bg-white relative z-10">
                      <Icon className={`w-8 h-8 text-white group-hover:text-black transition-colors duration-500`} />
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="text-sm font-bold text-white uppercase tracking-tight mb-1 group-hover:text-accent-primary transition-colors">{item.name}</h3>
                      <p className="text-[10px] text-white/30 font-mono uppercase tracking-widest">{item.role}</p>
                    </div>

                    {/* Gradient Glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.div>
                </FadeUp>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
