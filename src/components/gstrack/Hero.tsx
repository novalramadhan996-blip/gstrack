import { RadarHero } from "./RadarHero";
import logo from "../../assets/gstrack-logo.png";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 70% 40%, oklch(0.62 0.22 295 / 0.18), transparent 60%)" }}
      />

      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-8 lg:py-24">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-3 panel px-3 py-1.5 corner-frame">
            <span className="h-1.5 w-1.5 rounded-full bg-signal dot-blink" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Operational · Tier 1 Clearance
            </span>
          </div>

          <h1 className="font-display font-bold leading-[0.95] tracking-tight text-foreground">
            <img
              src={logo}
              alt="GSTrack logo"
              className="mb-6 h-24 w-auto sm:h-32 lg:h-40"
            />
            <span className="block text-3xl font-medium text-muted-foreground sm:text-4xl lg:text-5xl">
              <span className="text-foreground">
                GSTrack<span className="text-intel text-glow-intel">™</span>
              </span>{" "}
              Anything. Covertly.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            An enterprise-grade tracking intelligence platform for intelligence
            and law enforcement agencies — integrating 400+ devices to follow
            targets, illicit goods and evidence across denied signal zones,
            contested terrain and adversarial networks.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#access"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-sm border border-intel/60 bg-gradient-to-br from-intel/30 to-intel/10 px-7 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-all hover:border-intel hover:shadow-[var(--shadow-glow-intel)]"
            >
              <span className="relative z-10">Contact Person</span>
              <span className="relative z-10 text-intel transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 -translate-x-full bg-intel/20 transition-transform duration-500 group-hover:translate-x-0" />
            </a>
            <a
              href="#access"
              className="inline-flex items-center gap-2 px-2 py-2 font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="h-px w-6 bg-current" />
              Job Opening
            </a>
          </div>

          {/* Telemetry */}
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-px border border-panel-border bg-panel-border/40 font-mono">
            {[
              { l: "Devices Supported", v: "400+" },
              { l: "Coverage", v: "92 ZONES" },
              { l: "Signal Loss", v: "0.04%" },
            ].map((t) => (
              <div key={t.l} className="bg-card/60 p-3">
                <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">{t.l}</div>
                <div className="mt-1 text-sm font-semibold text-foreground">{t.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
          <RadarHero />
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        scroll · briefing inbound ↓
      </div>
    </section>
  );
}