const stats = [
  { label: "Clients served", value: "100+", tint: "bg-signal text-ink", tilt: "-rotate-2" },
  { label: "Delivered", value: "400+", tint: "bg-signal-pink text-ink", tilt: "rotate-1" },
  { label: "Contributions", value: "1.7K+", tint: "bg-signal-violet text-white", tilt: "-rotate-1" },
  { label: "Years experience", value: "3+", tint: "bg-signal-mint text-ink", tilt: "rotate-2" },
];

export function Stats() {
  return (
    <section className="bg-paper px-4 pb-16 pt-10 text-ink md:px-8 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className={`rounded-3xl border-2 border-ink p-5 shadow-[6px_6px_0_rgba(0,0,0,.55)] transition-transform duration-200 hover:-translate-y-1 hover:rotate-0 md:p-8 ${stat.tint} ${stat.tilt}`}>
              <span className="mono-label block opacity-80">{stat.label}</span>
              <span className="mt-3 block font-heading text-4xl font-black tracking-tight md:text-6xl">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
