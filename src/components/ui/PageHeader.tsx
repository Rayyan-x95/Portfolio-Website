import { FadeUp } from "./FadeUp";

interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="px-4 pb-14 pt-28 md:px-8 md:pb-20 md:pt-36">
      <div className="mx-auto max-w-[1600px]">
        <div className="mono-label flex items-center justify-between gap-4 border-b border-white/15 pb-3 text-text-muted">
          <span>Index / {title}</span>
          <span>Rayyan — 2026</span>
        </div>

        <div className="mt-8 grid grid-cols-12 items-end gap-8 md:mt-12">
          <div className="col-span-12 lg:col-span-8">
            <FadeUp>
              <h1 className="font-heading text-[clamp(3rem,9vw,8rem)] font-black uppercase leading-[0.86] tracking-[-0.04em] text-white">
                {title}
              </h1>
            </FadeUp>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-2">
            <FadeUp delay={0.1}>
              <p className="max-w-[42ch] text-base leading-relaxed text-text-muted">
                {description}
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
