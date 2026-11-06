"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ delay: 0.8 });
    tl.from(".hero-line", {
      yPercent: 112,
      duration: 1,
      ease: "power4.out",
      stagger: 0.09,
    }).from(
      ".hero-fade",
      { opacity: 0, y: 14, duration: 0.6, ease: "power3.out", stagger: 0.07 },
      0.3
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-paper pb-6 pt-24 text-ink md:pt-28"
    >
      {/* Arcade glow orbs */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-signal/30 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-signal-pink/30 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-signal-violet/30 blur-[110px]" />
      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col px-4 md:px-8">
        <div className="hero-fade mono-label flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-ink/25 pb-3">
          <span>Portfolio / Vol. 03</span>
          <span className="hidden text-muted lg:block">
            Chennai, IN — 13.0827°N / 80.2707°E
          </span>
          <span className="flex items-center gap-2 rounded-full border-2 border-ink/60 bg-paper-elevated px-3 py-1 text-ink">
            <span className="h-2 w-2 rounded-full bg-signal-mint" aria-hidden="true" />
            Available for select projects
          </span>
        </div>

        <div className="grid flex-1 grid-cols-12 gap-x-4 gap-y-8 pt-8 md:pt-14">
          <div className="col-span-12 flex flex-col">
            <p className="hero-fade mono-label flex items-center gap-2 text-muted">
              <span className="text-signal" aria-hidden="true">▪</span>
              Creative technologist — Founder, Ninety5
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="sticker animate-wiggle bg-signal text-ink">● AI-native</span>
              <span className="sticker animate-floaty bg-signal-pink text-ink" style={{ ["--tilt" as never]: "2deg" }}>✦ shipped</span>
              <span className="sticker animate-floaty bg-signal-mint text-ink" style={{ ["--tilt" as never]: "-3deg" }}>★ Chennai → World</span>
            </div>
            <h1 className="mt-6 font-heading text-[clamp(3.4rem,11.4vw,10.5rem)] font-black uppercase leading-[0.82] tracking-[-0.04em] md:mt-8">
              <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <span className="hero-line block">Design the</span>
              </span>
              <span className="block overflow-hidden pb-[0.06em] -mb-[0.06em]">
                <span className="hero-line block bg-gradient-to-r from-signal via-signal-pink to-signal-violet bg-clip-text text-transparent">Machine.</span>
              </span>
            </h1>
          </div>

          <div className="hero-fade col-span-12 mt-auto md:col-span-8 lg:col-span-6">
            <p className="max-w-[48ch] text-lg leading-[1.5] text-ink/85 md:text-xl">
              I&apos;m Mohammed Rayyan — a designer who ships the interface and the
              machine underneath it. Founder of{" "}
              <a
                href="https://www.ninety5.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-ink/30 underline-offset-4 transition-colors hover:text-signal"
              >
                Ninety5
              </a>
              , building AOSP kernels and Next.js systems from Chennai.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="#work"
                className="mono-label btn-pop group inline-flex items-center gap-3 bg-signal px-6 py-4 text-ink"
              >
                Selected work
                <span
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <Link
                href="/contact"
                className="mono-label btn-pop inline-flex items-center gap-2 border-2 border-ink/60 bg-paper-elevated px-6 py-4 text-ink transition-colors hover:bg-signal hover:text-ink"
              >
                Start a project ✦
              </Link>
            </div>
          </div>

          <dl className="hero-fade mono-label col-span-12 space-y-2 text-muted md:col-span-4 lg:col-span-6 lg:ml-auto lg:w-auto">
            <div className="flex gap-4 md:justify-end">
              <dt>Focus</dt>
              <dd className="text-ink">Interface / Systems</dd>
            </div>
            <div className="flex gap-4 md:justify-end">
              <dt>Studio</dt>
              <dd className="text-ink">Ninety5.in</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-[1600px] px-4 md:px-8">
        <div className="mono-label flex items-center justify-between border-t border-ink/25 pt-3 text-muted">
          <span className="animate-bob">Scroll ↓</span>
          <span className="hidden sm:block">Design / AOSP / Motion</span>
          <span>00 — 04</span>
        </div>
      </div>
    </section>
  );
}
