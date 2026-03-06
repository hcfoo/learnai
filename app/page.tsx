import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getJourneys, getPathways } from "@/lib/data";

export default function HomePage() {
  const journeys = getJourneys().slice(0, 3);
  const pathways = getPathways().slice(0, 3);

  return (
    <main>
      <Container>
        <div className="py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-600">
              Built for learning and user experience
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
              Learn energy systems through clear pathways and guided journeys
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700">
              Start with a structured journey, explore a systems pathway, then search the wider knowledge graph when students are ready to go deeper.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/journeys" className="rounded-xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-700">
                Start with journeys
              </Link>
              <Link href="/pathways" className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50">
                Explore pathways
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Learning journeys</h2>
              <div className="mt-4 grid gap-4">
                {journeys.map((journey) => (
                  <Card key={journey.slug}>
                    <Link href={`/journeys/${journey.slug}`} className="block p-5">
                      <div className="text-lg font-semibold text-slate-900">{journey.title}</div>
                      <div className="mt-2 text-sm leading-relaxed text-slate-700">{journey.summary}</div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-slate-900">Pathway explorer</h2>
              <div className="mt-4 grid gap-4">
                {pathways.map((pathway) => (
                  <Card key={pathway.slug}>
                    <Link href={`/pathways/${pathway.slug}`} className="block p-5">
                      <div className="text-lg font-semibold text-slate-900">{pathway.title}</div>
                      <div className="mt-2 text-sm text-sky-700">{pathway.question}</div>
                      <div className="mt-3 text-sm leading-relaxed text-slate-700">{pathway.explanation}</div>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
