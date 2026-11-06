"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { projects } from "@/lib/projects";
import { SectionHead } from "@/components/ui/SectionHead";

const selected = projects.slice(0, 5);

export function WorkIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useGSAP(() => {
    const el = previewRef.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.45, ease: "power3.out" });

    const handleMove = (event: MouseEvent) => {
      const x = Math.min(event.clientX + 28, window.innerWidth - 348);
      const y = Math.min(
        Math.max(event.clientY - 130, 96),
        window.innerHeight - 300
      );
      xTo(x);
      yTo(y);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="work"
      className="scroll-mt-16 bg-paper px-4 py-4 text-ink md:scroll-mt-20 md:px-8 md:py-6"
      onMouseLeave={() => setActive(null)}
    >
      <div className="mx-auto max-w-[1600px]">
        <SectionHead
          number="01"
          title="Selected work"
          meta="(05 / 10)"
          action={{ label: "Full index", href: "/work" }}
        />

        <div className="mt-8 md:mt-12">
          {selected.map((project, index) => {
            const href = project.url === "#" ? "/work" : project.url;
            const external = href.startsWith("http");

            return (
              <a
                key={project.title}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onBlur={() => setActive(null)}
                className="group flex items-baseline gap-4 border-t border-ink/25 py-4 last:border-b md:gap-6 md:py-6"
              >
                <span className="mono-label w-7 shrink-0 text-muted">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-heading text-[clamp(1.7rem,4.4vw,3.4rem)] font-black uppercase leading-none tracking-[-0.03em] transition-colors duration-150 group-hover:text-signal">
                  {project.title}
                </span>
                <span className="mono-label hidden w-60 shrink-0 text-right text-muted md:block">
                  {project.tags.join(" / ")}
                </span>
                <span
                  aria-hidden="true"
                  className="mono-label shrink-0 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-signal"
                >
                  ↗
                </span>
              </a>
            );
          })}
        </div>

        <div className="mono-label mt-6 flex items-center justify-between text-muted">
          <span>Archive 2021 — 2026</span>
          <Link href="/work" className="underline decoration-1 underline-offset-4 hover:text-signal">
            All projects ↗
          </Link>
        </div>
      </div>

      <div
        ref={previewRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[60] hidden w-[320px] lg:block ${
          active === null ? "opacity-0" : "opacity-100"
        } transition-opacity duration-150`}
      >
        {active !== null && (
          <div className="border border-ink bg-paper p-3">
            <div className="flex items-start justify-between border-b border-ink/25 pb-2">
              <span className="mono-label text-signal">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="h-3 w-3 bg-signal" aria-hidden="true" />
            </div>
            <div className="flex h-[190px] items-end pt-6">
              <p className="font-heading text-3xl font-black uppercase leading-[0.9] tracking-[-0.03em]">
                {selected[active].title}
              </p>
            </div>
            <div className="mono-label flex justify-between gap-4 border-t border-ink/25 pt-2 text-muted">
              <span>{selected[active].tags.join(" / ")}</span>
              <span>View ↗</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
