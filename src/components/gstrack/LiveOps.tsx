import { useEffect, useState } from "react";
import { SectionHeader } from "./SectionHeader";

const initialLogs = [
  { t: "12:04:11", c: "intel", msg: "Asset 114 acquired · vector 074°" },
  { t: "12:04:18", c: "signal", msg: "Geofence ALPHA-3 confirmed clean" },
  { t: "12:04:24", c: "alert", msg: "ALERT · perimeter breach · sector 7-G" },
  { t: "12:04:29", c: "intel", msg: "Predictive node: convergence in 04m12s" },
  { t: "12:04:35", c: "signal", msg: "Mesh relay handoff · GST-07 → GST-12" },
  { t: "12:04:41", c: "intel", msg: "Annotation added · CASE-2207-Δ" },
];

export function LiveOps() {
  const [logs, setLogs] = useState(initialLogs);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (tick === 0) return;
    const pool = [
      { c: "signal", msg: "Telemetry sync · 4,128 packets" },
      { c: "intel", msg: "Pattern match · subject behavior cluster B" },
      { c: "alert", msg: "ALERT · velocity spike · ASSET-308" },
      { c: "intel", msg: "Geospatial recompute · grid 9-E" },
      { c: "signal", msg: "Channel rekey · forward secrecy OK" },
    ];
    const pick = pool[tick % pool.length];
    const now = new Date();
    const t = now.toTimeString().slice(0, 8);
    setLogs((prev) => [{ t, ...pick }, ...prev].slice(0, 8));
  }, [tick]);

  return (
    <section className="relative border-t border-panel-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        <SectionHeader
          index="// 05"
          label="Live Operation Simulation"
          title="Continuous tracking — even when targets go dark."
          kicker="Offline-capable · chain-of-custody preserved"
        />

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          {/* Map sim */}
          <div className="panel relative aspect-[16/9] overflow-hidden corner-frame">
            <div className="absolute inset-0 grid-bg opacity-60" />
            {/* Moving dots */}
            {[
              { d: "M 5% 80% L 95% 20%", color: "signal", dur: 8 },
              { d: "M 90% 75% L 10% 25%", color: "intel", dur: 11 },
              { d: "M 50% 95% L 50% 10%", color: "alert", dur: 9 },
            ].map((p, i) => (
              <svg key={i} className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <path id={`p${i}`} d={p.d} fill="none" stroke={`oklch(0.62 0.18 ${p.color === "signal" ? 152 : p.color === "alert" ? 22 : 295})`} strokeOpacity="0.25" strokeDasharray="3 5" />
                <circle r="4" fill={`oklch(0.7 0.22 ${p.color === "signal" ? 152 : p.color === "alert" ? 22 : 295})`}>
                  <animateMotion dur={`${p.dur}s`} repeatCount="indefinite">
                    <mpath href={`#p${i}`} />
                  </animateMotion>
                </circle>
              </svg>
            ))}

            {/* Alert flash */}
            <div className="absolute right-6 top-6 panel border-alert/60 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.3em] text-alert text-glow-alert">
              ⚠ BREACH · SECTOR 7-G
            </div>

            {/* Bottom HUD */}
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-4 border-t border-panel-border bg-card/70 font-mono text-[10px]">
              {[
                ["VELOCITY", "62 km/h", "intel"],
                ["BEARING", "074°", "intel"],
                ["SIGNAL", "STRONG", "signal"],
                ["MODE", "COVERT", "alert"],
              ].map(([k, v, c]) => (
                <div key={k} className="border-r border-panel-border p-3 last:border-r-0">
                  <div className="text-muted-foreground tracking-[0.3em] uppercase">{k}</div>
                  <div className={`mt-1 text-${c} text-glow-${c}`}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Status logs */}
          <div className="panel flex flex-col p-5">
            <div className="flex items-center justify-between border-b border-panel-border pb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-signal dot-blink" />
                Status Log
              </span>
              <span>STREAM · LIVE</span>
            </div>
            <ul className="mt-3 flex-1 space-y-2 font-mono text-xs">
              {logs.map((l, i) => (
                <li
                  key={`${l.t}-${i}`}
                  className="flex items-start gap-3 leading-relaxed"
                  style={{ opacity: 1 - i * 0.08 }}
                >
                  <span className="text-muted-foreground/70">{l.t}</span>
                  <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-${l.c}`} />
                  <span className="text-foreground/90">{l.msg}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}