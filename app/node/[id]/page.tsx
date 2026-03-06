import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Card from "@/components/Card";
import ChipLink from "@/components/ChipLink";
import Section from "@/components/Section";
import { getNode, getConnectionNodes } from "@/lib/graph";

export default function NodePage({ params }: { params: { id: string } }) {
  const node = getNode(params.id);

  if (!node) {
    return notFound();
  }

  const connections = getConnectionNodes(node, 30);

  return (
    <main>
      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <Link className="text-sm text-neutral-600 hover:text-neutral-900" href="/explore">
              Explore
            </Link>
            <Link className="text-sm text-neutral-600 hover:text-neutral-900" href="/">
              Home
            </Link>
          </div>

          <div className="mt-6">
            <div className="text-xs text-neutral-500">
              {node.domain}
              {node.subdomain ? ` • ${node.subdomain}` : ""}
              {` • Level ${node.level}`}
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{node.title}</h1>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Card>
                <div className="p-6">
                  <Section title="Explanation">
                    <span className="text-neutral-600">
                      {node.explanation || "Add an explanation here. A good target is 60 to 90 words, then rewrite it in student voice."}
                    </span>
                  </Section>

                  <Section title="Example">
                    <span className="text-neutral-600">
                      {node.example || "Add a real world example that a student can picture."}
                    </span>
                  </Section>

                  <Section title="Check question">
                    <span className="text-neutral-600">
                      {node.question || "Add one question that checks understanding and invites reasoning."}
                    </span>
                  </Section>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <div className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Connections</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {connections.map((c) => (
                      <ChipLink key={c.id} href={`/node/${c.id}`} label={c.title} />
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <div className="text-sm font-semibold">Learning prompt</div>
                    <div className="mt-1 text-sm leading-relaxed text-neutral-600">
                      Pick two connections that feel far apart, then write one sentence linking them.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
