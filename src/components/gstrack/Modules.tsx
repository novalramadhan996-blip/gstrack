import { SectionHeader } from "./SectionHeader";

const modules = [
  {
    id: "M-01",
    name: "Device Integration Layer",
    short: "400+ devices · zero lock-in",
    detail:
      "Native integration with 400+ tracking devices across manufacturers and technologies — vehicles, wearables, covert trackers and sensors — unified into one normalized telemetry pipeline.",
  },
  {
    id: "M-02",
    name: "Field Operations App",
    short: "Real-time field coordination",
    detail:
      "Dedicated mobile application giving ground teams live tracking data, dynamic task assignment and continuous coordination — even when conditions change by the minute.",
  },
  {
    id: "M-03",
    name: "Geospatial Intelligence Engine",
    short: "Map-based situational awareness",
    detail:
      "Intuitive map interface that turns complex multi-source tracking data into clear visual insight — navigable layers, asset movement and overlays for technical and non-technical users alike.",
  },
  {
    id: "M-04",
    name: "Autonomous Geofencing System",
    short: "Zones, triggers, escalations",
    detail:
      "Define virtual perimeters around restricted zones, delivery corridors or areas of interest — automated entry/exit triggers drive proactive monitoring, compliance and silent escalation.",
  },
  {
    id: "M-05",
    name: "Annotation & Tagging Layer",
    short: "Augmented contextual intel",
    detail:
      "Enrich tracks with notes, tags and visual markers — capturing not just where assets are but why events occur, building a shared operational picture across teams and time.",
  },
  {
    id: "M-06",
    name: "Predictive Analytics Core",
    short: "Alerting · reporting · forecasting",
    detail:
      "Comprehensive alerting flags critical events the moment they occur, while reporting and analytics turn raw telemetry into trends, optimization and data-driven decisions.",
  },
  {
    id: "M-07",
    name: "Secure & Anonymous Network",
    short: "Encrypted · anonymous (optional)",
    detail:
      "Encrypted connectivity meets enterprise security standards across regulated environments. Optional anonymity protects sensitive identities and operations without compromising visibility.",
  },
];

export function Modules() {
  return (
    <section className="relative border-t border-panel-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        <SectionHeader
          index="// 04"
          label="Core Modules"
          title="Seven systems. One operational picture."
          kicker="07 modules · interlocked"
        />

        <div className="grid gap-px border border-panel-border bg-panel-border/40 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => (
            <article
              key={m.id}
              className={`group relative overflow-hidden bg-card/60 p-7 transition-all duration-300 hover:bg-card ${
                i === 6 ? "lg:col-span-3" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-intel">
                  {m.id}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-signal">
                  ◉ ACTIVE
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold leading-tight text-foreground">
                {m.name}
              </h3>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {m.short}
              </p>
              <div className="mt-6 max-h-0 overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all duration-500 group-hover:max-h-40">
                {m.detail}
              </div>
              <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground transition-colors group-hover:text-intel">
                <span className="h-px w-6 bg-current transition-all group-hover:w-12" />
                Open module
              </div>
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, oklch(0.62 0.22 295 / 0.4), transparent 70%)" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}