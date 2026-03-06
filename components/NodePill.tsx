export default function NodePill({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className={active ? "rounded-xl border border-cyan-300/60 bg-cyan-400/15 px-3 py-2 text-xs uppercase tracking-wide text-cyan-100 shadow-glow" : "rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-xs uppercase tracking-wide text-slate-200"}>
      {label}
    </div>
  );
}
