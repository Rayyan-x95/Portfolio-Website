"use client";

import { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  }, [pathname]);

  return (
    <ReactLenis 
      ref={lenisRef} 
      root 
      autoRaf={false}
      options={{ 
        lerp: 0.1, 
        duration: 1.0, 
        smoothWheel: true,
        wheelMultiplier: 1.1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
