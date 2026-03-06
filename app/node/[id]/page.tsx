import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Card from "@/components/Card";
import ChipLink from "@/components/ChipLink";
import Section from "@/components/Section";
import PromptBox from "@/components/PromptBox";
import { getMergedNode, getConnectionNodes } from "@/lib/graph";

export default function NodePage({ params }: { params: { id: string } }) {
  const { base, curated } = getMergedNode(params.id);
  if (!base) return notFound();

  const connections = getConnectionNodes(base, 18);

  return (
    <main>
      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <Link href="/journeys" className="text-sm text-neutral-600 hover:text-neutral-900">Journeys</Link>
            <Link href="/explore" className="text-sm text-neutral-600 hover:text-neutral-900">Explore</Link>
          </div>

          <div className="mt-6">
            <div className="text-xs text-neutral-500">
              {base.domain}{base.subdomain ? ` • ${base.subdomain}` : ""}{` • Level ${base.level}`}
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{curated?.title || base.title}</h1>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <div className="p-6">
                  <Section title="What it is">
                    <span className="text-neutral-700">
                      {curated?.whatIsIt || base.explanation || "Add a short explanation here."}
                    </span>
                  </Section>

                  <Section title="Why it matters">
                    <span className="text-neutral-700">
                      {curated?.whyItMatters || "Add why this concept matters in the wider energy system."}
                    </span>
                  </Section>

                  <Section title="Real world example">
                    <span className="text-neutral-700">
                      {curated?.example || base.example || "Add a real-world example that students can picture easily."}
                    </span>
                  </Section>

                  <Section title="Think about it">
                    <span className="text-neutral-700">
                      {curated?.thinkAboutIt || base.question || "Add a question that encourages reasoning rather than recall."}
                    </span>
                  </Section>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Explore next</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {(curated?.exploreNext || []).map((id) => (
                      <ChipLink key={id} href={`/node/${id}`} label={id.replaceAll("-", " ")} />
                    ))}
                    {!curated?.exploreNext?.length && connections.map((c) => (
                      <ChipLink key={c.id} href={`/node/${c.id}`} label={c.title} />
                    ))}
                  </div>

                  <div className="mt-6 text-xs font-semibold uppercase tracking-wide text-neutral-500">Wider graph connections</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {connections.slice(0, 10).map((c) => (
                      <ChipLink key={c.id} href={`/node/${c.id}`} label={c.title} />
                    ))}
                  </div>
                </div>
              </Card>

              <div className="mt-4">
                <PromptBox
                  title="Learning prompt"
                  text="Explain this concept in your own words, then connect it to one environmental issue and one possible solution."
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
