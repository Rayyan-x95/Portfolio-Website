import Link from "next/link";

interface SectionHeadProps {
  number: string;
  title: string;
  meta?: string;
  action?: { label: string; href: string };
}

export function SectionHead({ number, title, meta, action }: SectionHeadProps) {
  return (
    <div className="flex items-end justify-between gap-4 border-t border-ink/25 pt-3">
      <div className="flex items-baseline gap-4 md:gap-6">
        <span className="mono-label text-signal">{number}</span>
        <h2 className="font-heading text-lg font-black uppercase tracking-tight md:text-xl">
          {title}
        </h2>
      </div>
      <div className="flex items-center gap-5">
        {meta && <span className="mono-label hidden text-muted sm:block">{meta}</span>}
        {action && (
          <Link
            href={action.href}
            className="mono-label underline decoration-1 underline-offset-4 transition-colors hover:text-signal"
          >
            {action.label}
          </Link>
        )}
      </div>
    </div>
  );
}
