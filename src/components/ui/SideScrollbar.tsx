"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export function SideScrollbar() {
  const { scrollYProgress } = useScroll();
  const [isClient, setIsClient] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsClient(true);
    });
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Liquid spring for the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 35,
    restDelta: 0.001
  });

  // Calculate pixel-perfect translation
  // top-12 (48px) + bottom-12 (48px) = 96px offset
  // Thumb is 100px. Total subtract = 196px.
  const translateY = useTransform(
    smoothProgress, 
    [0, 1], 
    [0, windowHeight - 196]
  );

  if (!isClient || windowHeight === 0) return null;

  return (
    <div className="fixed right-3 top-12 bottom-12 w-1 z-[120] pointer-events-none hidden md:block">
      {/* Track */}
      <div className="absolute inset-0 bg-white/10">
        {/* Fill/Thumb */}
        <motion.div
          style={{ 
            height: 100, 
            y: translateY
          }}
          className="w-full bg-signal"
        />
      </div>
    </div>
  );
}


