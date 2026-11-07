"use client";

import { motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransition() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsActive(true);
    });
    const timer = setTimeout(() => {
      setIsActive(false);
    }, 1200);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, [pathname]);

  const shouldReduceMotion = useReducedMotion();
  if (!isActive || shouldReduceMotion) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Layer 1: Accent Panel */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{ 
          times: [0, 0.45, 1],
          duration: 1.15,
          ease: [0.76, 0, 0.24, 1] 
        }}
        className="fixed inset-0 bg-accent-primary z-[9998]"
      />
      
      {/* Layer 2: Main Branding Panel */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{ 
          times: [0, 0.45, 1],
          duration: 1.15,
          delay: 0.06,
          ease: [0.76, 0, 0.24, 1] 
        }}
        className="fixed inset-0 bg-[#090909] z-[9999] flex flex-col items-center justify-center pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: [0, 1, 1, 0], y: [15, 0, 0, -15] }}
          transition={{ 
            times: [0, 0.35, 0.55, 0.95],
            duration: 1.15,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-heading text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            RAYYAN<span className="text-accent-primary">.</span>
          </span>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
            <span className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30">
              Entering Experience
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
