"use client";

import { PageHeader } from "@/components/ui/PageHeader";
import { FadeUp } from "@/components/ui/FadeUp";
import { ArrowUpRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { posts } from "@/lib/blog-data";
import Link from "next/link";

export function BlogsList() {
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
              <Link href={`/blog/${post.slug}`} className="block h-full group focus:outline-none">
                <motion.div 
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col h-[500px] p-10 rounded-[2.5rem] bg-[#050505] border border-white/5 group-hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
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
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </main>
  );
}
