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
    <section className="bg-ink px-4 py-16 text-paper md:px-8 md:py-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex items-end justify-between gap-4 border-t border-paper/25 pt-3">
          <div className="flex items-baseline gap-4 md:gap-6">
            <span className="mono-label text-signal">03</span>
            <h2 className="font-heading text-lg font-black uppercase tracking-tight md:text-xl">
              Operator
            </h2>
          </div>
          <span className="mono-label hidden text-paper/50 sm:block">
            The human
          </span>
        </div>

        <div className="mt-10 grid grid-cols-12 items-start gap-8 md:mt-14 md:gap-10">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-heading text-[clamp(2rem,5vw,4.5rem)] font-black uppercase leading-[0.95] tracking-[-0.03em]">
              The same hands write the kernel and the interface.
            </p>

            <div className="mt-8 grid max-w-3xl grid-cols-1 gap-8 md:mt-10 md:grid-cols-2">
              <p className="text-base leading-[1.6] text-paper/70">
                I focus on the intersection of system-level performance and visual
                storytelling. From custom Android kernels to high-end design
                systems, the &quot;how&quot; gets as much attention as the
                &quot;what&quot;.
              </p>

              <dl className="mono-label divide-y divide-paper/20 border-y border-paper/20">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex justify-between gap-4 py-2.5">
                    <dt className="text-paper/50">{fact.label}</dt>
                    <dd className="text-right">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Link
              href="/about"
              className="mono-label group mt-8 inline-flex items-center gap-3 border border-paper/40 px-5 py-3.5 transition-colors hover:bg-paper hover:text-ink"
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

          <figure className="col-span-12 lg:col-span-4 lg:pl-10">
            <div className="relative aspect-[3/4] overflow-hidden border border-paper/30">
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
