import { SectionHeader } from "./SectionHeader";

export function Access() {
  return (
    <section id="access" className="relative border-t border-panel-border/60 py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-6">
        <SectionHeader
          index="// 08"
          label="Get In Touch"
          title="Connect with the GSTrack™ Team"
          kicker="Contact & recruitment channel"
        />

        <div className="panel relative overflow-hidden p-8 sm:p-14 corner-frame">
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full" style={{ background: "var(--gradient-radial)" }} />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full opacity-50" style={{ background: "radial-gradient(circle, oklch(0.62 0.24 22 / 0.25), transparent 70%)" }} />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-intel">
                ◉ TRANSMISSION SECURE · TLS 1.3 / CURVE25519
              </p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
                Reach the people behind the system.
                <span className="block text-muted-foreground">Talk to our team or join the mission.</span>
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Whether you are evaluating GSTrack™ for your agency or
                exploring a career with us, get in touch through the secure
                channel below. Our team will respond on a per-request basis.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@gstrack.tech&su=Request%20for%20Demo"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-sm border border-intel/60 bg-gradient-to-br from-intel/30 to-intel/10 px-7 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-all hover:border-intel hover:shadow-[var(--shadow-glow-intel)]"
                >
                  Request Access
                  <span className="text-intel transition-transform group-hover:translate-x-1">→</span>
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=connect@gstrack.tech&su=Joining%20The%20Team"
                  className="inline-flex items-center gap-3 rounded-sm border border-panel-border bg-card/40 px-7 py-4 font-mono text-xs uppercase tracking-[0.3em] text-foreground transition-colors hover:border-foreground/40 hover:bg-card"
                >
                  Apply Job
                </a>
              </div>
            </div>

            {/* Clearance card */}
            <div className="panel relative p-6 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-panel-border pb-3 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Contact Form · GST-407</span>
                <span className="text-alert">SECURE</span>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  ["Full Name", "[ your name ]"],
                  ["Organization", "[ agency / company ]"],
                  ["Intent", "[ contact · recruitment ]"],
                  ["Message", "[ brief summary ]"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">{k}</div>
                    <div className="mt-1 border-b border-panel-border pb-2 text-foreground/80">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal dot-blink" />
                  Channel secure
                </span>
                <span>FORM v4.07</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}