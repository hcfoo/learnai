import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import GlassCard from "@/components/GlassCard";
import PathwayMap from "@/components/PathwayMap";
import LearningPanel from "@/components/LearningPanel";
import { getPathway, getLearning } from "@/lib/data";

export default function PathwayDetailPage({ params }: { params: { slug: string } }) {
  const pathway = getPathway(params.slug);
  if (!pathway) return notFound();
  const focusItems = [...pathway.left.slice(-1), ...pathway.centre.slice(0, 1), ...pathway.right.slice(-1)];

  return (
    <main>
      <Container>
        <div className="py-10">
          <Link href="/pathways" className="text-sm text-slate-400 hover:text-white">Back to pathways</Link>
          <div className="mt-4 max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight text-white">{pathway.title}</h1>
            <p className="mt-3 text-lg text-cyan-200">{pathway.question}</p>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{pathway.explanation}</p>
          </div>
          <div className="mt-8"><PathwayMap pathway={pathway} /></div>
          <div className="mt-6">
            <GlassCard><div className="p-5"><div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Student challenge</div><p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-200">{pathway.challenge}</p></div></GlassCard>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {focusItems.map((item) => {
              const info = getLearning(item);
              if (!info) return null;
              return <LearningPanel key={item} title={item} what={info.what} why={info.why} />;
            })}
          </div>
        </div>
      </Container>
    </main>
  );
}
