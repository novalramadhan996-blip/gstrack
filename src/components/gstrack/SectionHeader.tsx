export function SectionHeader({
  index,
  label,
  title,
  kicker,
}: {
  index: string;
  label: string;
  title: string;
  kicker?: string;
}) {
  return (
    <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span className="text-intel">{index}</span>
          <span className="h-px w-10 bg-panel-border" />
          <span>{label}</span>
        </div>
        <h2 className="mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>
      {kicker && (
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          {kicker}
        </div>
      )}
    </div>
  );
}