"use client";

import { ReactNode, useEffect, useRef } from "react";

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

// ScrollTrigger/GSAP measurements went stale as images/fonts shifted layout,
// leaving wrappers stuck at opacity:0 (invisible content). IntersectionObserver
// observes real visibility, so reveals can't get stuck. SSR renders visible;
// the effect hides then reveals — progressive enhancement.
export function FadeUp({ children, delay = 0, className, yOffset = 24 }: FadeUpProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.classList.add("fadeup-pending");
    el.style.transitionDelay = `${delay}s`;
    el.style.setProperty("--fadeup-y", `${yOffset}px`);

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fadeup-in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, yOffset]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
