import GlassCard from "@/components/GlassCard";

export default function LearningPanel({ title, what, why }: { title: string; what: string; why: string }) {
  return (
    <GlassCard>
      <div className="p-5">
        <div className="text-sm font-semibold text-white">{title}</div>
        <div className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">What it is</div>
        <p className="mt-2 text-sm leading-relaxed text-slate-200">{what}</p>
        <div className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Why it matters</div>
        <p className="mt-2 text-sm leading-relaxed text-slate-200">{why}</p>
      </div>
    </GlassCard>
  );
}
