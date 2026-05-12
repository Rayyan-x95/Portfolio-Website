"use client";

import { FadeUp } from "@/components/ui/FadeUp";
import { useState } from "react";

export function TerminalSection() {
  const [history] = useState([
    { type: "cmd", text: "whoami" },
    { type: "out", text: "Mohammed Rayyan" },
    { type: "cmd", text: "skills" },
    { type: "out", text: "UI/UX Design\nBrand Identity\nCreative Direction\nFrontend Engineering\nMotion Design" },
    { type: "cmd", text: "currently" },
    { type: "out", text: "Building interfaces that feel alive." }
  ]);

  return (
    <section className="py-32 px-4 md:px-6 relative flex justify-center">
      <div className="container mx-auto max-w-3xl">
        <FadeUp>
          <div className="rounded-xl border border-white/10 bg-black/60 backdrop-blur-2xl shadow-2xl overflow-hidden font-mono text-sm relative">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2 relative z-10">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="ml-4 text-white/40 text-xs">rayyan@system:~</span>
            </div>
            <div className="p-6 md:p-8 min-h-[300px] flex flex-col gap-4 text-text-muted relative z-10">
              {history.map((line, i) => (
                <div key={i} className="whitespace-pre-line">
                  {line.type === "cmd" ? (
                    <div><span className="text-accent-secondary mr-2">$</span> <span className="text-white">{line.text}</span></div>
                  ) : (
                    <div className="pl-4 text-white/70 mt-1">{line.text}</div>
                  )}
                </div>
              ))}
              <div className="flex items-center mt-2">
                <span className="text-accent-secondary mr-2">$</span>
                <div className="w-2 h-4 bg-white animate-pulse" />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
