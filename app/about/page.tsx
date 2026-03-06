import Container from "@/components/Container";
import GlassCard from "@/components/GlassCard";

export default function AboutPage() {
  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-white">About this version</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-300">This version is designed around pathway learning. Students begin with visible systems maps, then connect those maps to deeper concepts, impacts and solutions.</p>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <GlassCard><div className="p-6"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Why this works</div><ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-slate-200"><li>Students see cause and effect</li><li>Inputs, processes and outcomes become visible</li><li>The learning starts simple and grows deeper</li></ul></div></GlassCard>
            <GlassCard><div className="p-6"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">How to use it</div><ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-slate-200"><li>Choose a pathway question</li><li>Discuss the visible system map</li><li>Use the challenge prompt for reasoning</li><li>Search the wider graph for deeper research</li></ul></div></GlassCard>
          </div>
        </div>
      </Container>
    </main>
  );
}
