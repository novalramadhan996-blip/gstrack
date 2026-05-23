export function RadarHero() {
  return (
    <div className="relative aspect-square w-full max-w-[520px]">
      {/* Outer rings */}
      {[1, 0.78, 0.56, 0.34].map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 rounded-full border border-intel/20"
          style={{ transform: `scale(${s})` }}
        />
      ))}
      {/* Crosshair */}
      <div className="absolute left-0 right-0 top-1/2 h-px bg-intel/15" />
      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-intel/15" />

      {/* Sweep */}
      <div
        className="absolute inset-0"
        style={{ animation: "radar-sweep 6s linear infinite" }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-1/2 w-1/2 origin-top-left"
          style={{
            background:
              "conic-gradient(from 0deg, oklch(0.62 0.22 295 / 0.55), transparent 25%)",
            clipPath: "polygon(0 0, 100% 0, 0 100%)",
          }}
        />
      </div>

      {/* Pulse points */}
      {[
        { top: "32%", left: "58%", color: "signal", delay: 0 },
        { top: "62%", left: "38%", color: "alert", delay: 0.6 },
        { top: "44%", left: "72%", color: "intel", delay: 1.2 },
        { top: "70%", left: "65%", color: "signal", delay: 1.8 },
      ].map((p, i) => (
        <div key={i} className="absolute" style={{ top: p.top, left: p.left }}>
          <span
            className={`absolute -inset-1 rounded-full bg-${p.color}/40`}
            style={{ animation: `pulse-ring 2.4s ease-out ${p.delay}s infinite` }}
          />
          <span className={`relative block h-2 w-2 rounded-full bg-${p.color}`} />
        </div>
      ))}

      {/* Center node */}
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-intel shadow-[0_0_24px_var(--intel)]" />
      <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-intel/60" />

      {/* Coordinate ticks */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest text-muted-foreground">000°</div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-widest text-muted-foreground">180°</div>
      <div className="absolute top-1/2 -left-3 -translate-y-1/2 font-mono text-[9px] tracking-widest text-muted-foreground">270°</div>
      <div className="absolute top-1/2 -right-3 -translate-y-1/2 font-mono text-[9px] tracking-widest text-muted-foreground">090°</div>
    </div>
  );
}