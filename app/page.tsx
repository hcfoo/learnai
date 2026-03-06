import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getJourneys, getFeaturedCoreNodes } from "@/lib/graph";

export default function HomePage() {
  const journeys = getJourneys();
  const featured = getFeaturedCoreNodes().slice(0, 6);

  return (
    <main>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
              Guided learning • 5 journeys • 1001 nodes underneath
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              How does energy shape our world and how can we make it sustainable?
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-neutral-600">
              This app helps students learn energy systems and sustainability through guided journeys,
              meaningful learning prompts and deeper exploration into a connected knowledge graph.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/journeys" className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
                Start with learning journeys
              </Link>
              <Link href="/node/energy-systems-and-sustainability" className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
                Open the centre concept
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {journeys.map((journey) => (
              <Card key={journey.slug}>
                <Link href={`/journeys/${journey.slug}`} className="block p-5">
                  <div className="text-sm font-semibold text-neutral-900">{journey.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-600">{journey.goal}</div>
                </Link>
              </Card>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold">Featured concepts</h2>
            <p className="mt-2 text-sm text-neutral-600">
              Start with these key ideas before exploring the wider map.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((node) => (
                <Card key={node.id}>
                  <Link href={`/node/${node.id}`} className="block p-5">
                    <div className="text-sm font-semibold text-neutral-900">{node.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-neutral-600">{node.whyItMatters}</div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
