import { SectionHeader } from "./SectionHeader";

export function SystemOverview() {
  return (
    <section className="relative border-t border-panel-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        <SectionHeader
          index="// 03"
          label="System Architecture Overview"
          title="A unified operational intelligence layer."
          kicker="Multi-source fusion · Real-time"
        />

        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Map preview panel */}
          <div className="panel relative aspect-[16/10] overflow-hidden corner-frame scanline">
            {/* Topo grid */}
            <svg className="absolute inset-0 h-full w-full opacity-40" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="topo" width="120" height="120" patternUnits="userSpaceOnUse">
                  <path d="M0 60 Q 30 30, 60 60 T 120 60" fill="none" stroke="oklch(0.62 0.22 295 / 0.4)" strokeWidth="0.5"/>
                  <path d="M0 90 Q 30 60, 60 90 T 120 90" fill="none" stroke="oklch(0.62 0.22 295 / 0.25)" strokeWidth="0.5"/>
                  <path d="M0 30 Q 30 0, 60 30 T 120 30" fill="none" stroke="oklch(0.62 0.22 295 / 0.25)" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#topo)" />
            </svg>

            {/* Routes */}
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 800 500" preserveAspectRatio="none">
              <path d="M 60 380 Q 220 200, 420 260 T 740 120" stroke="oklch(0.78 0.19 152)" strokeWidth="1.5" fill="none" strokeDasharray="4 4">
                <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1.2s" repeatCount="indefinite" />
              </path>
              <path d="M 100 100 Q 300 220, 500 180 T 700 360" stroke="oklch(0.62 0.22 295)" strokeWidth="1" fill="none" strokeDasharray="3 6" opacity="0.7">
                <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="2s" repeatCount="indefinite" />
              </path>
            </svg>

            {/* Nodes */}
            {[
              { x: "8%", y: "76%", c: "signal", l: "ASSET-114" },
              { x: "52%", y: "52%", c: "intel", l: "RELAY-09" },
              { x: "92%", y: "24%", c: "signal", l: "ASSET-308" },
              { x: "30%", y: "20%", c: "alert", l: "ALERT-Δ" },
              { x: "70%", y: "78%", c: "intel", l: "GHOST-22" },
            ].map((n, i) => (
              <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: n.x, top: n.y }}>
                <span className={`absolute -inset-2 rounded-full bg-${n.c}/30`} style={{ animation: `pulse-ring 2.6s ease-out ${i * 0.3}s infinite` }} />
                <span className={`relative block h-2 w-2 rounded-full bg-${n.c} shadow-[0_0_12px_currentColor] text-${n.c}`} />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {n.l}
                </span>
              </div>
            ))}

            {/* HUD overlay */}
            <div className="absolute left-3 top-3 flex items-center gap-2 panel px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-signal dot-blink" />
              LIVE FEED · SECTOR 7-G
            </div>
            <div className="absolute right-3 top-3 panel px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
              ZOOM × 4.2 · ALT 320m
            </div>
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between panel px-3 py-2 font-mono text-[10px] text-muted-foreground">
              <span>LAT 24.71034° · LON 46.67528°</span>
              <span className="text-signal">5 ASSETS TRACKED</span>
            </div>
          </div>

          {/* Side panels */}
          <div className="grid gap-6">
            <div className="panel p-6 corner-frame">
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Source Aggregation</span>
                <span className="text-signal">07 / 07 ONLINE</span>
              </div>
              <ul className="mt-5 space-y-3 text-sm">
                {[
                  ["GPS · GLONASS · BeiDou", "98%"],
                  ["GSM Cell Triangulation", "94%"],
                  ["LoRa Mesh Backbone", "100%"],
                  ["RF Signature Capture", "87%"],
                  ["Optical / CCTV Layer", "76%"],
                ].map(([n, p]) => (
                  <li key={n} className="flex items-center gap-3">
                    <span className="flex-1 font-mono text-xs text-foreground/90">{n}</span>
                    <div className="h-1 w-24 overflow-hidden bg-panel-border">
                      <div className="h-full bg-intel" style={{ width: p }} />
                    </div>
                    <span className="w-10 text-right font-mono text-[10px] text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="panel p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Operational Brief</div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                GSTrack™ integrates with 400+ tracking devices and aggregates
                their positional streams into a unified operational intelligence
                layer — fusing satellite, terrestrial and ad-hoc mesh signals
                into a single ground truth, continuously and on one map.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}