import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getDomainNodes } from "@/lib/graph";

export default function Home() {
  const domains = getDomainNodes();

  return (
    <main>
      <Container>
        <div className="py-10 sm:py-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700">
              Learning map • 1001 nodes
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Explore Energy Systems and Sustainability
            </h1>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Browse domains, search concepts and follow connections to learn like a knowledge network.
              You can later add student written explanations, examples and check questions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/explore" className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-black">
                Explore concepts
              </Link>
              <Link href="/node/energy-systems-and-sustainability" className="rounded-xl border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-50">
                Start at the centre node
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {domains.map(d => (
              <Card key={d.id}>
                <Link href={`/node/${d.id}`} className="block p-5">
                  <div className="text-sm font-semibold text-neutral-900">{d.title}</div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Open this domain and follow linked ideas.
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
