import Link from "next/link";
import { SectionHead } from "@/components/ui/SectionHead";

const services = [
  { title: "Full-stack engineering", stack: "Next.js / React / TypeScript" },
  { title: "UI/UX & design systems", stack: "Figma / Tokens / Motion" },
  { title: "Mobile & AOSP", stack: "Kotlin / Jetpack Compose / Linux" },
  { title: "Creative development", stack: "GSAP / WebGL / Lenis" },
];

export function Capability() {
  return (
    <section id="capability" className="scroll-mt-16 bg-paper px-4 py-16 text-ink md:scroll-mt-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <SectionHead
          number="02"
          title="Capability"
          meta="What I do ✦"
          action={{ label: "Full services", href: "/services" }}
        />

        <div className="mt-8 grid grid-cols-12 gap-8 md:mt-12 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <p className="max-w-[38ch] text-base leading-[1.6] text-ink/80 md:text-lg">
              Four disciplines, one operator. I take products from a blank Figma
              file to a running system — no handoff gaps.
            </p>
            <p className="mono-label mt-8 rounded-full border border-ink/40 bg-paper-elevated px-3 py-1 text-muted">Stack index</p>
            <p className="mt-4 rounded-2xl border-2 border-ink bg-signal/15 p-3 font-mono text-xs leading-relaxed tracking-wide">
              NEXT.JS / REACT / TYPESCRIPT / KOTLIN / AOSP / LINUX / GSAP / FIGMA
            </p>
          </div>

          <div className="col-span-12 space-y-3 md:col-span-8">
            {services.map((service, index) => (
              <Link
                key={service.title}
                href="/services"
                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-1 rounded-2xl border-2 border-ink/20 bg-paper-elevated px-5 py-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-signal hover:shadow-[5px_5px_0_rgba(0,0,0,.55)]"
              >
                <span className="mono-label col-span-2 rounded-full border-2 border-ink bg-signal-pink px-2 py-1 text-center text-ink">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 font-heading text-xl font-bold uppercase tracking-tight transition-colors duration-150 group-hover:text-signal md:col-span-6 md:text-2xl">
                  {service.title}
                </span>
                <span className="mono-label col-span-10 col-start-3 text-muted md:col-span-4 md:col-start-auto md:text-right">
                  {service.stack}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
