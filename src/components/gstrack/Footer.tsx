import logo from "../../assets/gstrack-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-panel-border/60 py-10">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-6 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:flex-row">
        <div className="flex items-center gap-3">
          <img src={logo} alt="GSTrack logo" className="h-10 w-auto" />
          GSTrack<span className="text-intel">™</span> System Interface
        </div>
        <div className="text-center">
          Secure · Restricted · Intelligence Use Only
        </div>
        <div>The Octagon, Singapore · 069534</div>
      </div>
    </footer>
  );
}