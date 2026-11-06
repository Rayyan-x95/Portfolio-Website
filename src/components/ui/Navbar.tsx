"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";

const primaryLinks = [
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

const secondaryLinks = [
  { name: "Labs", href: "/labs" },
  { name: "Links", href: "/links" },
  { name: "Uses", href: "/uses" },
  { name: "Guestbook", href: "/guestbook" },
];

export function Navbar() {
  const pathname = usePathname();
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      closeButtonRef.current?.focus();
      const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsOpen(false);
          menuButtonRef.current?.focus();
        }
      };
      window.addEventListener("keydown", onKeyDown);
      return () => {
        window.removeEventListener("keydown", onKeyDown);
        lenis?.start();
      };
    }
  }, [isOpen, lenis]);

  const trapFocus = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const nodes = overlayRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])'
    );
    if (!nodes || nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const allLinks = [...primaryLinks, ...secondaryLinks];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[100] border-b-2 border-ink/60 bg-paper/90 text-ink backdrop-blur-md">
        <div className="mx-auto max-w-[1600px] px-4 md:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <Link
              href="/"
              className="font-heading text-lg font-black uppercase tracking-[-0.02em] md:text-xl"
            >
              RAY—95 <span className="animate-wiggle inline-block text-signal">★</span>
              <span className="sr-only"> — Mohammed Rayyan, home</span>
            </Link>

            <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
              {primaryLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`mono-label transition-colors duration-150 hover:text-signal ${
                      isActive ? "text-signal" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <span className="mono-label mr-2 hidden text-muted xl:block">
                13.0827°N / 80.2707°E
              </span>
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(new CustomEvent("open-command-palette"))
                }
                aria-label="Open command palette"
                className="mono-label btn-pop hidden items-center gap-2 border-2 border-ink bg-signal px-3 py-1.5 text-ink sm:inline-flex"
              >
                ⌘K ✦
              </button>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setIsOpen(true)}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                className="mono-label btn-pop border-2 border-ink bg-paper-elevated px-4 py-1.5 text-ink lg:hidden"
              >
                Menu ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen && (
        <div
          id="mobile-menu"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          onKeyDown={trapFocus}
          className="fixed inset-0 z-[150] flex flex-col bg-ink text-paper"
        >
          <div className="mx-auto flex h-16 w-full max-w-[1600px] shrink-0 items-center justify-between border-b border-paper/20 px-4 md:h-20 md:px-8">
            <Link
              href="/"
              className="font-heading text-lg font-black uppercase tracking-[-0.02em] md:text-xl"
            >
              RAY—95
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setIsOpen(false)}
              className="mono-label border border-paper/40 px-3 py-1.5 transition-colors hover:bg-paper hover:text-ink"
            >
              Close ✕
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="mx-auto w-full max-w-[1600px] flex-1 overflow-y-auto px-4 py-6 md:px-8"
            data-lenis-prevent
          >
            <ul>
              {allLinks.map((link, index) => (
                <li key={link.name} className="border-b border-paper/15">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-4 py-3.5 md:py-4"
                  >
                    <span className="mono-label w-7 shrink-0 text-signal">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-heading text-[clamp(1.8rem,7vw,3rem)] font-black uppercase leading-none tracking-[-0.03em] transition-colors group-hover:text-signal">
                      {link.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mono-label ml-auto text-paper/40 transition-transform group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mono-label mt-10 flex flex-col gap-3 text-paper/50">
              <a
                href="mailto:rayyan@ninety5.in"
                className="underline decoration-1 underline-offset-4 hover:text-signal"
              >
                rayyan@ninety5.in
              </a>
              <p>Chennai, India — 13.0827°N / 80.2707°E</p>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
