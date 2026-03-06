import Link from "next/link";
import Container from "@/components/Container";
import GlassCard from "@/components/GlassCard";
import { getPathways } from "@/lib/data";

export default function PathwaysPage() {
  const pathways = getPathways();
  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-white">Pathway explorer</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">These curated maps help students follow how energy moves through systems, technologies and outcomes.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {pathways.map((pathway) => (
              <GlassCard key={pathway.slug}>
                <Link href={`/pathways/${pathway.slug}`} className="block p-6">
                  <div className="text-lg font-semibold text-white">{pathway.title}</div>
                  <div className="mt-2 text-sm text-cyan-200">{pathway.question}</div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-300">{pathway.explanation}</div>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
