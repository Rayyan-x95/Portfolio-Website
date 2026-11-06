import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/rayyan-x95" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohrayyan/" },
  { label: "Instagram", href: "https://www.instagram.com/rayyan.x95" },
  { label: "X", href: "https://x.com/rayyan_x95" },
];

export function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-ink/25 bg-paper px-4 py-16 text-ink md:scroll-mt-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="mono-label flex items-center justify-between border-t border-ink/25 pt-3">
          <div className="flex items-baseline gap-4 md:gap-6">
            <span className="text-signal">04</span>
            <span className="font-heading text-lg font-black uppercase tracking-tight md:text-xl">
              Contact
            </span>
          </div>
          <span className="hidden text-muted sm:block">Availability</span>
        </div>

        <div className="mt-10 grid grid-cols-12 items-end gap-8 md:mt-14 md:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-heading text-[clamp(3rem,10vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.04em]">
              Let&apos;s build
              <br />
              <span className="text-signal">something.</span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:pb-2">
            <p className="max-w-[42ch] text-base leading-[1.6] text-ink/80 md:text-lg">
              Have a product, a kernel, or a blank page that needs both? Tell me
              what you are making and where it is stuck.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/contact"
                className="mono-label group inline-flex items-center gap-3 bg-ink px-5 py-3.5 text-paper transition-colors hover:bg-signal hover:text-ink"
              >
                Start a project
                <span
                  aria-hidden="true"
                  className="transition-transform duration-150 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
              <a
                href="mailto:rayyan@ninety5.in"
                className="mono-label underline decoration-1 underline-offset-4 transition-colors hover:text-signal"
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
