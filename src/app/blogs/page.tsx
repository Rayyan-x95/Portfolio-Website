"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { Metadata } from "next";
import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowUpRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Why Prompt Engineering Alone Is Outdated in 2026",
    excerpt: "If you are still tweaking 'act as an expert' prompts, you are falling behind. Here is the actual engineering skill replacing it in 2026: system architecture, clean data...",
    date: "FEB 13, 2026",
    readTime: "7 MIN READ",
    tags: ["AI", "prompt-engineering", "agentic-workflows", "+2"]
  },
  {
    title: "I Replaced Google with AI for 7 Days. Here's What Broke.",
    excerpt: "I went a full week using only LLMs for debugging instead of StackOverflow. It was a productivity boost but here is why traditional search still matters.",
    date: "FEB 10, 2026",
    readTime: "7 MIN READ",
    tags: ["AI", "productivity", "debugging", "+2"],
    featured: true
  },
  {
    title: "Hands-On with Claude Opus 4.6 vs Gemini 3 Pro vs GPT-5.2",
    excerpt: "I tested Anthropic's newest Claude Opus 4.6 against Gemini 3 Pro and GPT-5.2 in a real 3-prompt product prototype. Here's what actually worked and where each...",
    date: "FEB 06, 2026",
    readTime: "6 MIN READ",
    tags: ["AI", "Claude", "Opus 4.6", "+4"]
  },
  {
    title: "Typography as Interface: Why Inter and Outfit Rule the Web",
    excerpt: "Why I chose Inter and Outfit for my portfolio and Rune AI. A deep dive into font functionality, readability at scale, and how typography defines digital product identity.",
    date: "JAN 31, 2026",
    readTime: "3 MIN READ",
    tags: ["design", "typography", "ui-ux", "+1"]
  },
  {
    title: "Designing Fluid Interfaces: My Approach to Animation",
    excerpt: "Moving beyond 'making things move' to 'making things feel'. A deep dive into physics-based animation, Framer Motion, and creating emotional connections with UI.",
    date: "JAN 01, 2026",
    readTime: "2 MIN READ",
    tags: ["design", "animation", "framer-motion", "+1"]
  },
  {
    title: "How I Approach a Problem Before Writing Code",
    excerpt: "Stop coding immediately. Learn the 80/20 rule of software engineering: 80% planning, 20% typing. A guide to thinking like a senior engineer.",
    date: "JAN 01, 2026",
    readTime: "3 MIN READ",
    tags: ["Engineering", "Productivity", "Guide", "+1"]
  },
];

export default function BlogsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full selection:bg-accent-primary selection:text-black pb-32">
      <PageHeader 
        title="Blogs" 
        description="Insights on design, engineering, and AOSP." 
      />
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <FadeUp key={post.title} delay={index * 0.1}>
              <motion.div 
                whileHover={{ y: -8 }}
                className="group relative flex flex-col h-[500px] p-10 rounded-[2.5rem] bg-[#050505] border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                {/* Header: Date & Read Time */}
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                      {post.date}
                    </span>
                    <span className="text-[10px] text-white/10">•</span>
                    <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">
                      {post.readTime}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 relative z-10">
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase tracking-tighter leading-[1.1] group-hover:text-accent-primary transition-colors duration-500">
                    {post.title}
                  </h2>
                  <p className="text-sm text-white/40 leading-relaxed font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags Footer */}
                <div className="flex flex-wrap gap-2 pt-8 relative z-10">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-white/40 uppercase tracking-widest group-hover:text-white group-hover:border-white/20 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* READ ARTICLE Badge (for featured card) */}
                {post.featured && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="relative w-24 h-24 flex items-center justify-center">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0"
                      >
                        <svg className="w-full h-full" viewBox="0 0 100 100">
                          <path
                            id="circlePath"
                            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                            fill="none"
                          />
                          <text className="text-[10px] font-mono uppercase fill-white/40 tracking-[0.1em]">
                            <textPath href="#circlePath" startOffset="0%">
                              READ ARTICLE • READ ARTICLE •
                            </textPath>
                          </text>
                        </svg>
                      </motion.div>
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                  </div>
                )}

                {/* Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
