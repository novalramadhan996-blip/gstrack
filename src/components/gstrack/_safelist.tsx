// Safelist: ensure Tailwind picks up dynamically-constructed class names.
// This file is never imported at runtime — it exists only so the Tailwind
// scanner sees these literal strings.
export const _safelist = [
  "bg-signal", "bg-alert", "bg-intel",
  "bg-signal/30", "bg-alert/30", "bg-intel/30",
  "bg-signal/40", "bg-alert/40", "bg-intel/40",
  "bg-signal/60", "bg-alert/60", "bg-intel/60",
  "text-signal", "text-alert", "text-intel",
  "text-glow-signal", "text-glow-alert", "text-glow-intel",
  "border-signal", "border-alert", "border-intel",
  "border-signal/60", "border-alert/60", "border-intel/60",
];