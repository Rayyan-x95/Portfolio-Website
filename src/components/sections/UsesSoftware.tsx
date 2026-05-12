"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { 
  Code2, 
  Terminal, 
  Globe, 
  Zap, 
  Layout, 
  GitBranch, 
  Cloud, 
  Box, 
  MousePointer2, 
  BookOpen, 
  PenTool, 
  Lock 
} from "lucide-react";

const tools = [
  { name: "VS Code", sub: "Primary IDE", icon: Code2 },
  { name: "Cursor", sub: "AI Code Editor", icon: Zap },
  { name: "Arc", sub: "The Internet Computer", icon: Globe },
  { name: "Raycast", sub: "Launcher & Extensions", icon: Terminal },
  { name: "Linear", sub: "Project Tracking", icon: Layout },
  { name: "GitHub", sub: "Code Hosting", icon: GitBranch },
  { name: "Vercel", sub: "Deployment", icon: Cloud },
  { name: "Figma", sub: "Interface Design", icon: Box },
  { name: "Framer", sub: "No-Code Sites", icon: MousePointer2 },
  { name: "Obsidian", sub: "Second Brain", icon: BookOpen },
  { name: "Notion", sub: "Knowledge Base", icon: PenTool },
  { name: "1Password", sub: "Secrets Manager", icon: Lock },
];

export function UsesSoftware() {
  return (
    <section className="px-4 md:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Header */}
          <div className="lg:col-span-4">
            <FadeUp>
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-accent-primary" />
                <span className="text-xs font-mono tracking-[0.4em] text-accent-primary uppercase">02. Software</span>
              </div>
              <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-8">
                Dev Tools
              </h2>
              <p className="text-lg md:text-xl font-light text-text-muted leading-relaxed">
                A highly optimized, blazingly fast software stack. I rely heavily on VS Code/Cursor for primary development, Arc for fluid browsing, and an ensemble of productivity tools like Raycast and Obsidian. My digital workspace is strictly curated. If an app doesn't serve a critical function or sparks joy with its UI, it doesn't stay.
              </p>
            </FadeUp>
          </div>

          {/* Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <FadeUp key={tool.name} delay={index * 0.05}>
                  <div className="group relative flex flex-col items-center justify-center p-6 md:p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 text-center">
                    <Icon className="w-8 h-8 mb-6 text-white group-hover:text-accent-primary transition-colors duration-500" />
                    <h3 className="font-heading text-base font-bold text-white uppercase tracking-tight mb-1">
                      {tool.name}
                    </h3>
                    <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
                      {tool.sub}
                    </p>
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
