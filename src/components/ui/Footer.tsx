"use client";

import Link from "next/link";

const categories = [
  {
    title: "Sitemap",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Work", href: "/work" },
      { name: "Services", href: "/services" },
      { name: "Blogs", href: "/blogs" },
    ],
  },
  {
    title: "Index",
    links: [
      { name: "Labs", href: "/labs" },
      { name: "Links", href: "/links" },
      { name: "Uses", href: "/uses" },
      { name: "Guestbook", href: "/guestbook" },
    ],
  },
  {
    title: "Projects",
    links: [
      { name: "Ninety5", href: "https://www.ninety5.in" },
      { name: "Titan", href: "https://github.com/rayyan-x95/Titan" },
      { name: "EduCard", href: "https://github.com/rayyan-x95/EduCard" },
      { name: "Habitate", href: "https://github.com/rayyan-x95/Habitate" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "GitHub", href: "https://github.com/rayyan-x95" },
      { name: "LinkedIn", href: "https://www.linkedin.com/in/mohrayyan/" },
      { name: "Instagram", href: "https://www.instagram.com/rayyan.x95" },
      { name: "Telegram", href: "https://t.me/rayyan_x95" },
      { name: "X", href: "https://x.com/rayyan_x95" },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-ink bg-paper-elevated px-4 py-10 text-ink md:px-8 md:py-14">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-8 border-b-2 border-ink/20 pb-10 md:gap-10 md:pb-14">
          <div className="col-span-12 lg:col-span-5">
            <p className="mono-label rounded-full border border-ink/40 bg-paper px-3 py-1 text-muted">Ninety5 Studio / Portfolio ✦</p>
            <Link
              href="/"
              className="mt-3 block font-heading text-[clamp(2.6rem,5vw,4.5rem)] font-black uppercase leading-none tracking-[-0.04em] transition-colors hover:text-signal-pink"
            >
              RAY—95
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/60">
              Mohammed Rayyan — designer and systems engineer. Founder of
              Ninety5, building interfaces and the machines beneath them from
              Chennai, India.
            </p>
            <div className="mono-label mt-6 flex items-center gap-2">
              <span className="h-2 w-2 bg-signal" aria-hidden="true" />
              Open for select projects
            </div>
          </div>

          <div className="col-span-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-7">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="mono-label mb-4 text-paper/50">{category.title}</h2>
                <ul className="space-y-2.5">
                  {category.links.map((link) => {
                    const isExternal = link.href.startsWith("http");
                    return (
                      <li key={link.name}>
                        {isExternal ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="me noopener noreferrer"
                            aria-label={`Open ${link.name} in a new tab`}
                            className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/75 transition-colors hover:text-signal"
                          >
                            {link.name} ↗
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="font-mono text-[11px] uppercase tracking-[0.08em] text-paper/75 transition-colors hover:text-signal"
                          >
                            {link.name}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mono-label flex flex-col justify-between gap-3 pt-6 text-paper/45 md:flex-row md:items-center">
          <p>© {currentYear} Ninety5 Studio</p>
          <p className="hidden lg:block">Chennai, IN — 13.0827°N / 80.2707°E</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-paper">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-paper">
              Terms
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="underline decoration-1 underline-offset-4 transition-colors hover:text-signal"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
