import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getJourney, getConcept } from "@/lib/data";

export default function JourneyDetailPage({ params }: { params: { slug: string } }) {
  const journey = getJourney(params.slug);
  if (!journey) return notFound();

  return (
    <main>
      <Container>
        <div className="py-10">
          <Link href="/journeys" className="text-sm text-slate-600 hover:text-slate-900">Back to journeys</Link>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">{journey.title}</h1>
          <p className="mt-3 text-lg text-sky-700">{journey.essentialQuestion}</p>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{journey.summary}</p>

          <div className="mt-8 grid gap-4">
            {journey.steps.map((step, index) => {
              const concept = getConcept(step);
              return (
                <Card key={step}>
                  <div className="p-5">
                    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Step {index + 1}</div>
                    <div className="mt-2 text-lg font-semibold text-slate-900">{step}</div>
                    <div className="mt-2 text-sm leading-relaxed text-slate-700">{concept?.what || "Core concept in this journey."}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
