import NodeChip from "@/components/NodeChip";
import SectionTitle from "@/components/SectionTitle";
import type { Pathway } from "@/lib/data";

export default function PathwayView({ pathway }: { pathway: Pathway }) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <SectionTitle>Inputs and sources</SectionTitle>
        <div className="mt-4 space-y-3">
          {pathway.inputs.map((item, index) => <NodeChip key={item} label={item} active={index === pathway.inputs.length - 1} />)}
        </div>
      </div>

      <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5">
        <SectionTitle>Core process</SectionTitle>
        <div className="mt-4 space-y-3">
          {pathway.processes.map((item, index) => <NodeChip key={item} label={item} active={index === 0 || index === pathway.processes.length - 1} />)}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
        <SectionTitle>Uses and outcomes</SectionTitle>
        <div className="mt-4 space-y-3">
          {pathway.outcomes.map((item, index) => <NodeChip key={item} label={item} active={index === 0 || index === pathway.outcomes.length - 1} />)}
        </div>
      </div>
    </div>
  );
}
