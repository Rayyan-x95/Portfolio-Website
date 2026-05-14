"use client";

import { ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export function FadeUp({ children, delay = 0, className, yOffset = 20 }: FadeUpProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { 
        opacity: 0, 
        y: yOffset,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        delay: delay,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=40",
          once: true,
        }
      }
    );
  }, { scope: containerRef, dependencies: [delay, yOffset] });

  return (
    <div ref={containerRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
