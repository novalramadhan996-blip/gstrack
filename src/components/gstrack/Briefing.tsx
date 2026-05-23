import { SectionHeader } from "./SectionHeader";

const items = [
  {
    id: "01",
    title: "Target Evasion",
    desc: "High-value subjects who know they are watched abandon phones and conventional devices — collapsing GPS, cellular and app-based tracking into operational blind spots.",
    metric: "0 phones",
    metricLabel: "carried by aware targets",
  },
  {
    id: "02",
    title: "Signal Denial",
    desc: "Warehouses, shipping containers, border regions and subterranean facilities offer no cellular or internet uplink — disabling commercial tracking and breaking chain-of-custody.",
    metric: "8 of 10",
    metricLabel: "ops in denied terrain",
  },
  {
    id: "03",
    title: "Intelligence Gaps",
    desc: "Fragmented hardware, siloed feeds and disconnected video produce partial pictures — eroding response time, evidence integrity and mission outcomes.",
    metric: "47 min",
    metricLabel: "median intel latency",
  },
];

export function Briefing() {
  return (
    <section id="briefing" className="relative border-t border-panel-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        <SectionHeader
          index="// 02"
          label="Situational Briefing"
          title="The terrain has changed. Your tooling hasn't."
          kicker="Classification · Restricted"
        />

        <div className="grid gap-px border border-panel-border bg-panel-border/40 sm:grid-cols-3">
          {items.map((it) => (
            <article
              key={it.id}
              className="group relative bg-card/60 p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-intel">
                  [{it.id}]
                </span>
                <span className="flex h-2 w-2">
                  <span className="absolute h-2 w-2 animate-ping rounded-full bg-alert/60" />
                  <span className="relative h-2 w-2 rounded-full bg-alert" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide text-foreground">
                {it.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {it.desc}
              </p>
              <div className="mt-8 flex items-end justify-between border-t border-panel-border pt-4">
                <div className="font-display text-3xl font-bold text-glow-alert text-foreground">
                  {it.metric}
                </div>
                <div className="text-right font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
                  {it.metricLabel}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px scale-x-0 bg-intel transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}