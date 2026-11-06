const stats = [
  { label: "Clients served", value: "100+" },
  { label: "Delivered", value: "400+" },
  { label: "Contributions", value: "1.7K+" },
  { label: "Years experience", value: "3+" },
];

export function Stats() {
  return (
    <section className="bg-paper px-4 pb-16 pt-10 text-ink md:px-8 md:pb-24 md:pt-20">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-2 gap-px border border-ink/25 bg-ink/25 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-paper px-4 py-6 md:px-6 md:py-8">
              <span className="mono-label block text-muted">{stat.label}</span>
              <span className="mt-3 block font-mono text-3xl tracking-[-0.06em] md:text-5xl">
                {stat.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
