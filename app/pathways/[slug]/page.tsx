import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Card from "@/components/Card";
import PathwayView from "@/components/PathwayView";
import ConceptCard from "@/components/ConceptCard";
import { getPathway, getConcept } from "@/lib/data";

export default function PathwayDetailPage({ params }: { params: { slug: string } }) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();

  const featured = [
    pathway.inputs[pathway.inputs.length - 1],
    pathway.processes[0],
    pathway.outcomes[pathway.outcomes.length - 1]
  ];

  return (
    <main>
      <Container>
        <div className="py-10">
          <Link href="/pathways" className="text-sm text-slate-600 hover:text-slate-900">Back to pathways</Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">{pathway.title}</h1>
          <p className="mt-3 text-lg text-sky-700">{pathway.question}</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{pathway.explanation}</p>

          <div className="mt-8">
            <PathwayView pathway={pathway} />
          </div>

          <Card className="mt-6">
            <div className="p-5">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Student challenge</div>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-700">{pathway.challenge}</p>
            </div>
          </Card>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {featured.map((title) => {
              const info = getConcept(title);
              if (!info) return null;
              return <ConceptCard key={title} title={title} info={info} />;
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
