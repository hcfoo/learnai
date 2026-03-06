import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { getPathways } from "@/lib/data";

export default function PathwaysPage() {
  const pathways = getPathways();
  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Pathway explorer</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            Use pathways to help students see inputs, processes and outcomes in a clean systems-thinking format.
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {pathways.map((pathway) => (
              <Card key={pathway.slug}>
                <Link href={`/pathways/${pathway.slug}`} className="block p-6">
                  <div className="text-lg font-semibold text-slate-900">{pathway.title}</div>
                  <div className="mt-2 text-sm text-sky-700">{pathway.question}</div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-700">{pathway.explanation}</div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
