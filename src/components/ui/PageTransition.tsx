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
    }, 950);
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
          duration: 0.9,
          ease: [0.76, 0, 0.24, 1] 
        }}
        className="fixed inset-0 bg-signal z-[9998]"
      />
      
      {/* Layer 2: Main Branding Panel */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%", "-100%"] }}
        transition={{ 
          times: [0, 0.45, 1],
          duration: 0.9,
          delay: 0.06,
          ease: [0.76, 0, 0.24, 1] 
        }}
        className="fixed inset-0 bg-ink z-[9999] flex flex-col items-center justify-center pointer-events-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: [0, 1, 1, 0], y: [15, 0, 0, -15] }}
          transition={{ 
            times: [0, 0.35, 0.55, 0.95],
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-heading text-4xl font-black uppercase tracking-[-0.04em] text-white md:text-6xl">
            RAY—95
          </span>
          <div className="mono-label flex items-center gap-3 text-white/40">
            <div className="h-1.5 w-1.5 bg-signal animate-pulse" />
            <span>Loading section</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
