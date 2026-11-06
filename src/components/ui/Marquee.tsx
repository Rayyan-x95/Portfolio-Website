const WORDS = ["DESIGN", "CODE", "AOSP", "MOTION", "SHIPPED", "CINEMATIC", "NEXT.JS"];

export function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div aria-hidden="true" className="overflow-hidden border-y-4 border-ink bg-signal py-3 text-ink">
      <div className="animate-marquee flex w-max items-center gap-8 font-heading text-lg font-black uppercase tracking-widest md:text-xl">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8 pr-8">
            {row.map((w, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-8">
                <span>{w}</span>
                <span className="text-2xl">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
