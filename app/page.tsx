import Link from "next/link";
import Container from "@/components/Container";
import GlassCard from "@/components/GlassCard";
import { getPathways } from "@/lib/data";

export default function HomePage() {
  const pathways = getPathways().slice(0, 4);
  return (
    <main>
      <Container>
        <div className="py-10 sm:py-14">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-300">Systems thinking for students</div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-6xl">Learn energy through pathways, not isolated facts</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">Start with a visible cause-and-effect map. See how sources, technologies, uses and impacts connect, then go deeper into the wider energy knowledge graph.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/pathways" className="rounded-xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">Open pathway explorer</Link>
              <Link href="/explore" className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white hover:bg-white/[0.08]">Search the wider map</Link>
            </div>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {pathways.map((pathway) => (
              <GlassCard key={pathway.slug}>
                <Link href={`/pathways/${pathway.slug}`} className="block p-6">
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">Pathway</div>
                  <div className="mt-2 text-xl font-semibold text-white">{pathway.title}</div>
                  <div className="mt-3 text-sm leading-relaxed text-slate-300">{pathway.question}</div>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
