import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/rayyan-x95" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohrayyan/" },
  { label: "Instagram", href: "https://www.instagram.com/rayyan.x95" },
  { label: "X", href: "https://x.com/rayyan_x95" },
];

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16 bg-paper px-4 py-16 text-ink md:scroll-mt-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mono-label flex items-center justify-between pt-3">
          <div className="flex items-center gap-4 md:gap-6">
            <span className="rounded-full border-2 border-ink bg-signal-mint px-3 py-1 text-ink shadow-[3px_3px_0_rgba(0,0,0,.55)]">04</span>
            <span className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
              Contact
            </span>
          </div>
          <span className="hidden rounded-full border border-ink/40 px-3 py-1 text-muted sm:block">Availability ✦</span>
        </div>

        <div className="mt-10 grid grid-cols-12 items-end gap-8 md:mt-14 md:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-heading text-[clamp(3rem,10vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.04em]">
              Let&apos;s build
              <br />
              <span className="bg-gradient-to-r from-signal-pink to-signal-violet bg-clip-text text-transparent">something.</span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pb-2">
            <p className="max-w-[42ch] rounded-2xl border-2 border-ink/20 bg-paper-elevated p-5 text-base leading-[1.6] text-ink/80 md:text-lg">
              Have a product, a kernel, or a blank page that needs both? Tell me
              what you are making and where it is stuck.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/contact"
                className="mono-label btn-pop group inline-flex items-center gap-3 bg-signal px-6 py-4 text-ink"
              >
                Start a project ✦
                <span
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <a
                href="mailto:rayyan@ninety5.in"
                className="mono-label btn-pop border-2 border-ink bg-paper-elevated px-5 py-4 text-ink transition-colors hover:bg-signal-mint"
              >
                rayyan@ninety5.in
              </a>
            </div>

            <ul className="mono-label mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink/25 pt-4 text-muted">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="transition-colors hover:text-signal"
                  >
                    {social.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
