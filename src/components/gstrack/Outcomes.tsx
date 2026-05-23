import { SectionHeader } from "./SectionHeader";

const outcomes = [
  {
    id: "OP-Δ-114",
    title: "Covert Target Monitoring",
    summary: "Sustained 47-day persistent track on high-evasion subject across 6 jurisdictions.",
    metrics: [
      ["Detection events", "0"],
      ["Position fixes", "12,408"],
      ["Confidence", "98.2%"],
    ],
  },
  {
    id: "OP-Σ-220",
    title: "Illicit Supply Chain Disruption",
    summary: "Mapped end-to-end logistics network — 14 nodes, 3 financiers — without forward signal exposure.",
    metrics: [
      ["Nodes mapped", "14"],
      ["Seizures enabled", "9"],
      ["Time to map", "11 days"],
    ],
  },
  {
    id: "OP-Ω-307",
    title: "Offline Environment Tracking",
    summary: "Mesh-relay tracking maintained in fully GPS-denied subterranean environment for 96 hours.",
    metrics: [
      ["Signal coverage", "100%"],
      ["Drift", "< 4m"],
      ["Endurance", "96 h"],
    ],
  },
  {
    id: "OP-Φ-401",
    title: "Intelligence Amplification",
    summary: "Predictive analytics surfaced 3 imminent rendezvous events before any human analyst flagged them.",
    metrics: [
      ["Lead time", "+2.4 h"],
      ["Precision", "94%"],
      ["Alerts", "3"],
    ],
  },
];

export function Outcomes() {
  return (
    <section className="relative border-t border-panel-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        <SectionHeader
          index="// 07"
          label="Mission Outcomes"
          title="Recorded, declassified, replicable."
          kicker="Field-validated · 2024"
        />

        <div className="grid gap-px border border-panel-border bg-panel-border/40 lg:grid-cols-2">
          {outcomes.map((o) => (
            <article key={o.id} className="bg-card/60 p-8 transition-colors hover:bg-card">
              <div className="flex items-start justify-between">
                <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-intel">
                  {o.id}
                </div>
                <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-signal">
                  ✓ MISSION COMPLETE
                </div>
              </div>
              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-foreground">
                {o.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {o.summary}
              </p>
              <div className="mt-6 grid grid-cols-3 gap-px border border-panel-border bg-panel-border/40">
                {o.metrics.map(([k, v]) => (
                  <div key={k} className="bg-background/40 p-3">
                    <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">{k}</div>
                    <div className="mt-1 font-display text-lg font-semibold text-foreground">{v}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}