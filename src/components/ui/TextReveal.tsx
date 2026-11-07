"use client";

import { useEffect, useRef } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p";
}

// Same stale-ScrollTrigger issue as FadeUp: rewritten on IntersectionObserver.
// Word spans start clipped only after JS mounts; no-JS/reduced-motion shows text.
export function TextReveal({
  text,
  className = "",
  delay = 0,
  once = true,
  as: Component = "h1",
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = Array.from(el.querySelectorAll<HTMLElement>(".reveal-word-inner"));
    words.forEach((w, i) => {
      w.style.transitionDelay = `${delay + i * 0.03}s`;
    });
    el.classList.add("textreveal-pending");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("textreveal-in");
            if (once) io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, delay, once]);

  const wordsArray = text.split(" ");

  return (
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={containerRef as any}
      className={`${className} flex flex-wrap gap-y-1`}
    >
      {wordsArray.map((word, idx) => (
        <span
          key={idx}
          className="relative inline-block overflow-hidden py-1.5 -my-1.5 mr-[0.25em]"
          style={{ verticalAlign: "bottom" }}
        >
          <span className="reveal-word-inner inline-block will-change-transform font-heading">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
