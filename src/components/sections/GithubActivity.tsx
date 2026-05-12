"use client";

import { FadeUp } from "@/components/ui/FadeUp";

export function GithubActivity() {
  return (
    <section className="py-32 px-4 md:px-6 relative bg-[#090909]">
      <div className="container mx-auto max-w-7xl">
        <FadeUp>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tighter">
              Open Source
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeUp delay={0.1} className="md:col-span-2">
            <div className="border border-white/5 bg-surface rounded-2xl p-8 h-full">
              <h3 className="text-text-muted font-mono text-sm mb-8 uppercase tracking-widest">Contribution Matrix</h3>
              {/* Fake minimal heatmap */}
              <div className="flex gap-2 flex-wrap opacity-80">
                {Array.from({ length: 160 }).map((_, i) => {
                  // Deterministic pseudo-random generation based on index to avoid hydration mismatch
                  const intensity = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
                  const bg = intensity > 0.8 ? "bg-accent-secondary" : intensity > 0.5 ? "bg-accent-secondary/60" : intensity > 0.2 ? "bg-accent-secondary/30" : "bg-white/5";
                  return (
                    <div key={i} className={`w-3 h-3 rounded-[2px] ${bg} hover:scale-150 transition-transform duration-200 cursor-crosshair`} />
                  );
                })}
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="border border-white/5 bg-surface rounded-2xl p-8 h-full flex flex-col justify-between">
               <div>
                  <h3 className="text-text-muted font-mono text-sm mb-4 uppercase tracking-widest">Top Languages</h3>
                  <div className="space-y-4">
                    {[
                      { lang: "Kotlin", percent: 45, color: "bg-[#A97BFF]" },
                      { lang: "TypeScript", percent: 30, color: "bg-[#3178C6]" },
                      { lang: "C++", percent: 15, color: "bg-[#f34b7d]" },
                      { lang: "Shell", percent: 10, color: "bg-[#89e051]" }
                    ].map(stat => (
                      <div key={stat.lang}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-white">{stat.lang}</span>
                          <span className="text-text-muted font-mono">{stat.percent}%</span>
                        </div>
                        <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                          <div className={`h-full ${stat.color}`} style={{ width: `${stat.percent}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               <div className="mt-8 pt-6 border-t border-white/5">
                 <div className="text-3xl font-heading font-bold text-white">1,402</div>
                 <div className="text-xs text-text-muted font-mono uppercase tracking-wider">Commits this year</div>
               </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
