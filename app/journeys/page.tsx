import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getJourneys } from "@/lib/graph";

export default function JourneysPage() {
  const journeys = getJourneys();

  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-3xl font-semibold tracking-tight">Learning journeys</h1>
          <p className="mt-3 max-w-2xl leading-relaxed text-neutral-600">
            These journeys give students a clear starting point and a coherent pathway through the topic.
          </p>

          <div className="mt-8 grid gap-4">
            {journeys.map((journey) => (
              <Card key={journey.slug}>
                <Link href={`/journeys/${journey.slug}`} className="block p-6">
                  <div className="text-lg font-semibold text-neutral-900">{journey.title}</div>
                  <div className="mt-2 text-sm text-neutral-500">Essential question</div>
                  <div className="mt-1 text-sm leading-relaxed text-neutral-700">{journey.essentialQuestion}</div>
                  <div className="mt-3 text-sm leading-relaxed text-neutral-600">{journey.goal}</div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
