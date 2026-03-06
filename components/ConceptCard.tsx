import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import type { ConceptInfo } from "@/lib/data";

export default function ConceptCard({ title, info }: { title: string; info: ConceptInfo }) {
  return (
    <Card>
      <div className="p-5">
        <div className="text-lg font-semibold text-slate-900">{title}</div>
        <div className="mt-5"><SectionTitle>What it is</SectionTitle><p className="mt-2 text-sm leading-relaxed text-slate-700">{info.what}</p></div>
        <div className="mt-5"><SectionTitle>Why it matters</SectionTitle><p className="mt-2 text-sm leading-relaxed text-slate-700">{info.why}</p></div>
        <div className="mt-5"><SectionTitle>Real-life example</SectionTitle><p className="mt-2 text-sm leading-relaxed text-slate-700">{info.example}</p></div>
        <div className="mt-5"><SectionTitle>Think about it</SectionTitle><p className="mt-2 text-sm leading-relaxed text-slate-700">{info.question}</p></div>
      </div>
    </Card>
  );
}
