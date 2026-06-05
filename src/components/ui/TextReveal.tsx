"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p";
}

export function TextReveal({ 
  text, 
  className = "", 
  delay = 0, 
  once = true,
  as: Component = "h1"
}: TextRevealProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".reveal-word-inner");
    if (words.length === 0) return;

    gsap.fromTo(
      words,
      { y: "115%" },
      {
        y: "0%",
        duration: 1.1,
        stagger: 0.03,
        delay: delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=50",
          once: once,
        },
      }
    );
  }, { scope: containerRef, dependencies: [text, delay, once] });

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
          <span className="reveal-word-inner inline-block translate-y-[115%] will-change-transform font-heading">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
