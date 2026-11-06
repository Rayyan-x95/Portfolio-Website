import Link from "next/link";

interface SectionHeadProps {
  number: string;
  title: string;
  meta?: string;
  action?: { label: string; href: string };
}

export function SectionHead({ number, title, meta, action }: SectionHeadProps) {
  return (
    <div className="flex items-end justify-between gap-4 pt-3">
      <div className="flex items-center gap-4 md:gap-6">
        <span className="mono-label rounded-full border-2 border-ink bg-signal px-3 py-1 text-ink shadow-[3px_3px_0_rgba(0,0,0,.55)]">{number}</span>
        <h2 className="font-heading text-xl font-black uppercase tracking-tight md:text-2xl">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-5">
        {meta && <span className="mono-label hidden rounded-full border border-ink/40 px-3 py-1 text-muted sm:block">{meta}</span>}
        {action && (
          <Link
            href={action.href}
            className="mono-label btn-pop border-2 border-ink bg-paper-elevated px-4 py-2 text-ink transition-colors hover:bg-signal hover:text-ink"
          >
            {action.label} ↗
          </Link>
        )}
      </div>
    </div>
  );
}
