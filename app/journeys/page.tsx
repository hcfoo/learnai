import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getJourneys } from "@/lib/data";

export default function JourneysPage() {
  const journeys = getJourneys();
  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Learning journeys</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            Begin with a clear sequence so students understand the big ideas before diving into the wider graph.
          </p>
          <div className="mt-8 grid gap-4">
            {journeys.map((journey) => (
              <Card key={journey.slug}>
                <Link href={`/journeys/${journey.slug}`} className="block p-6">
                  <div className="text-lg font-semibold text-slate-900">{journey.title}</div>
                  <div className="mt-2 text-sm text-sky-700">{journey.essentialQuestion}</div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-700">{journey.summary}</div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
