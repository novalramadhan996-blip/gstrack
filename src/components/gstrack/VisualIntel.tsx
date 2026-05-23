import { SectionHeader } from "./SectionHeader";

const feeds = [
  {
    label: "CCTV · NODE 14",
    code: "CAM-014",
    status: "REC",
    statusColor: "alert",
    bg: "from-intel/20 via-background to-background",
    content: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-24 w-12 -translate-x-1/2 -translate-y-1/2 bg-foreground/30 blur-sm" />
        <div className="absolute bottom-6 left-6 right-6 h-px bg-signal/40" />
      </div>
    ),
  },
  {
    label: "DRONE · UAS-09",
    code: "ALT 320m",
    status: "TRACKING",
    statusColor: "signal",
    bg: "from-signal/15 via-background to-background",
    content: (
      <div className="absolute inset-0">
        <svg className="absolute inset-0 h-full w-full opacity-50" viewBox="0 0 200 120">
          <path d="M0 80 L40 60 L80 70 L120 40 L160 50 L200 30" stroke="oklch(0.78 0.19 152)" strokeWidth="0.5" fill="none" />
          <path d="M0 100 L40 90 L80 95 L120 80 L160 85 L200 70" stroke="oklch(0.78 0.19 152 / 0.5)" strokeWidth="0.5" fill="none" />
        </svg>
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal shadow-[0_0_20px_var(--signal)] dot-blink" />
      </div>
    ),
  },
  {
    label: "RF SENSOR · 0xA4F",
    code: "2.4 GHz",
    status: "SCAN",
    statusColor: "intel",
    bg: "from-alert/10 via-background to-background",
    content: (
      <div className="absolute inset-0 flex items-end gap-1 px-4 pb-4">
        {Array.from({ length: 28 }).map((_, i) => (
          <div
            key={i}
            className="flex-1 bg-intel/70"
            style={{
              height: `${20 + Math.sin(i * 0.7) * 25 + Math.random() * 30}%`,
              animation: `blink ${1 + (i % 4) * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.05}s`,
            }}
          />
        ))}
      </div>
    ),
  },
];

export function VisualIntel() {
  return (
    <section className="relative border-t border-panel-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        <SectionHeader
          index="// 06"
          label="Visual Intelligence Layer · Optional"
          title="Discover the target. Covertly."
          kicker="CCTV · DRONE · BODYCAM · BINOCULAR · ACTION-CAM"
        />

        <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          GSTrack™ integrates with hundreds of CCTV makers, drones, body-worn
          cameras, connected binoculars and action-camera devices through
          ready-to-use APIs for live and on-demand streaming. Feeds are
          time-stamped and automatically associated with the tracked asset —
          when a target enters a geofenced zone, nearby cameras trigger on
          their own, surfacing who is in the vehicle, who is near the package,
          and what is happening around the asset in real time.
        </p>

        <div className="grid gap-4 lg:grid-cols-3">
          {feeds.map((f) => (
            <div key={f.code} className={`panel relative aspect-[4/3] overflow-hidden corner-frame scanline bg-gradient-to-br ${f.bg}`}>
              {f.content}
              <div className="absolute left-3 top-3 flex items-center gap-2 panel px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                <span className={`h-1.5 w-1.5 rounded-full bg-${f.statusColor} dot-blink`} />
                {f.label}
              </div>
              <div className="absolute right-3 top-3 panel px-2 py-1 font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                {f.code}
              </div>
              <div className={`absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.3em] text-${f.statusColor} text-glow-${f.statusColor}`}>
                ● {f.status}
              </div>
              <div className="absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                {new Date().toISOString().slice(11, 19)}Z
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}