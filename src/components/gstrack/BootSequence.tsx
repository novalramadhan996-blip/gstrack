import { useEffect, useState } from "react";

const lines = [
  "[00:00:01] Initializing tracking protocol…",
  "[00:00:02] Establishing covert uplink → NODE GST-07",
  "[00:00:03] Handshake: AES-256 / Curve25519 — OK",
  "[00:00:04] Loading geospatial intelligence layer…",
  "[00:00:05] Cross-referencing 14,322 active assets",
  "[00:00:06] Signal denial countermeasures: ACTIVE",
  "[00:00:07] System Online: GSTrack™",
];

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (i >= lines.length) {
      const t = setTimeout(onDone, 600);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setI(i + 1), 220 + Math.random() * 180);
    return () => clearTimeout(t);
  }, [i, onDone]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <div className="grid-bg absolute inset-0 opacity-40" />
      <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, transparent 0%, var(--background) 80%)" }} />
      <div className="relative w-full max-w-2xl px-6 font-mono text-sm">
        <div className="mb-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-alert dot-blink" />
          SECURE TERMINAL · GST-07
        </div>
        <div className="space-y-1.5 text-signal/90">
          {lines.slice(0, i).map((l, idx) => (
            <div key={idx} className="opacity-80">
              <span className="text-muted-foreground">› </span>{l}
            </div>
          ))}
          {i < lines.length && (
            <div className="text-foreground">
              <span className="text-muted-foreground">› </span>
              {lines[i]}
              <span className="ml-0.5 inline-block h-3 w-2 -mb-0.5 bg-signal dot-blink" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}