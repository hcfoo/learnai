import NodePill from "@/components/NodePill";
import type { Pathway } from "@/lib/data";

export default function PathwayMap({ pathway }: { pathway: Pathway }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-stars bg-[length:220px_220px,260px_260px,auto] p-6">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr_1fr]">
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Inputs and sources</div>
          <div className="space-y-3">
            {pathway.left.map((item, idx) => <NodePill key={item} label={item} active={idx === pathway.left.length - 1} />)}
          </div>
        </div>
        <div className="relative">
          <div className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Core process</div>
          <div className="space-y-3">
            {pathway.centre.map((item, idx) => <NodePill key={item} label={item} active={idx === 0 || idx === pathway.centre.length - 1} />)}
          </div>
          <svg className="pointer-events-none absolute inset-0 hidden lg:block" viewBox="0 0 600 420" preserveAspectRatio="none">
            <path d="M20 220 C130 220, 160 160, 240 150" stroke="rgba(56,189,248,0.8)" strokeWidth="3" fill="none" />
            <path d="M360 150 C440 150, 470 210, 580 210" stroke="rgba(148,163,184,0.65)" strokeWidth="3" fill="none" />
            <path d="M360 185 C430 185, 465 240, 580 255" stroke="rgba(148,163,184,0.35)" strokeWidth="2" fill="none" />
          </svg>
        </div>
        <div>
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Uses and outcomes</div>
          <div className="space-y-3">
            {pathway.right.map((item, idx) => <NodePill key={item} label={item} active={idx === 0 || idx === pathway.right.length - 1} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
