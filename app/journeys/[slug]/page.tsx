import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Card from "@/components/Card";
import PromptBox from "@/components/PromptBox";
import { getJourney, getJourneyNodes } from "@/lib/graph";

export default function JourneyDetailPage({ params }: { params: { slug: string } }) {
  const journey = getJourney(params.slug);
  if (!journey) return notFound();

  const items = getJourneyNodes(params.slug);

  return (
    <main>
      <Container>
        <div className="py-10">
          <Link href="/journeys" className="text-sm text-neutral-600 hover:text-neutral-900">
            Back to journeys
          </Link>

          <div className="mt-4 max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight">{journey.title}</h1>
            <div className="mt-3 text-sm text-neutral-500">Essential question</div>
            <p className="mt-1 leading-relaxed text-neutral-700">{journey.essentialQuestion}</p>
            <p className="mt-4 leading-relaxed text-neutral-600">{journey.goal}</p>
          </div>

          <div className="mt-6">
            <PromptBox title="Learning challenge" text={journey.challenge} />
          </div>

          <div className="mt-8 grid gap-4">
            {items.map((item) => (
              <Card key={item.id}>
                <Link href={`/node/${item.id}`} className="block p-5">
                  <div className="text-base font-semibold text-neutral-900">
                    {item.curated?.title || item.base?.title}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {item.curated?.whatIsIt || item.base?.title}
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
