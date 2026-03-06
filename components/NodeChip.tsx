export default function NodeChip({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className={active ? "rounded-xl border border-sky-300 bg-sky-50 px-3 py-2 text-sm font-medium text-sky-900" : "rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700"}>
      {label}
    </div>
  );
}
