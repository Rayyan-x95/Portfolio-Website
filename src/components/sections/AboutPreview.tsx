import Image from "next/image";
import Link from "next/link";

const facts = [
  { label: "Role", value: "Founder, Ninety5" },
  { label: "Base", value: "Chennai, India" },
  { label: "Focus", value: "AOSP + Interface" },
  { label: "Status", value: "Open to select work" },
];

export function AboutPreview() {
  return (
    <section className="bg-paper-elevated px-4 py-16 text-ink md:px-8 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between gap-4 pt-3">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="mono-label rounded-full border-2 border-ink bg-signal-pink px-3 py-1 text-ink shadow-[3px_3px_0_rgba(0,0,0,.55)]">03</span>
            <h2 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
              Operator
            </h2>
          </div>
          <span className="mono-label hidden rounded-full border border-ink/40 px-3 py-1 text-muted sm:block">
            The human ✦
          </span>
        </div>

        <div className="mt-10 grid grid-cols-12 items-start gap-8 md:mt-14 md:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]">
              The same hands write the kernel and the interface.
            </p>

            <div className="mt-8 grid max-w-3xl grid-cols-1 gap-8 md:mt-10 md:grid-cols-2">
              <p className="rounded-2xl border-2 border-ink/20 bg-paper p-5 text-base leading-[1.6] text-ink/80">
                I focus on the intersection of system-level performance and visual
                storytelling. From custom Android kernels to high-end design
                systems, the &quot;how&quot; gets as much attention as the
                &quot;what&quot;.
              </p>

              <dl className="mono-label divide-y divide-ink/15 rounded-2xl border-2 border-ink/20 bg-paper p-4">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-muted">{fact.label}</dt>
                    <dd className="text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href="/about"
              className="mono-label btn-pop group mt-8 inline-flex items-center gap-3 bg-signal px-6 py-4 text-ink"
            >
              Read the full profile
              <span
                aria-hidden="true"
                className="transition-transform duration-150 group-hover:translate-x-1"
              >
                ↗
              </span>
            </Link>
          </div>

          <figure className="col-span-12 rotate-2 lg:col-span-4 lg:pl-10">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-ink shadow-[8px_8px_0_rgba(0,0,0,.55)] bg-paper-elevated">
              <Image
                src="/profile.webp"
                alt="Mohammed Rayyan, founder of Ninety5, photographed in the hills near Chennai"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover grayscale contrast-125"
              />
            </div>
            <figcaption className="mono-label mt-2 flex justify-between gap-4 text-paper/50">
              <span>Fig. 01 — M. Rayyan</span>
              <span>Chennai, IN</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
