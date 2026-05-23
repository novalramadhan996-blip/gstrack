import { useEffect, useState } from "react";
import logo from "../../assets/gstrack-logo.png";
export function StatusBar() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const fmt = time.toISOString().replace("T", " ").slice(0, 19);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 border-b border-panel-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:text-[11px]">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-75 dot-blink" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="text-signal">SYS·ONLINE</span>
          </div>
          <span className="hidden sm:inline">NODE / GST-07</span>
          <span className="hidden md:inline">CLEARANCE / TS-SCI</span>
        </div>
        <div className="font-display text-foreground/90 text-xs tracking-[0.35em]">
          GSTRACK<span className="text-intel">™</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:inline">LAT 24.71034°N</span>
          <span className="hidden md:inline">LON 46.67528°E</span>
          <span>{fmt}Z</span>
        </div>
      </div>
    </div>
  );
}