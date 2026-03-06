"use client";

import { useEffect, useMemo, useState } from "react";
import Container from "@/components/Container";
import Card from "@/components/Card";

type Result = {
  id: string;
  title: string;
  domain: string;
  subdomain: string | null;
  level: number;
};

export default function ExplorePage() {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = q.trim();
    if (!query) {
      setResults([]);
      return;
    }

    const controller = new AbortController();
    setLoading(true);

    fetch(`/api/search?q=${encodeURIComponent(query)}`, { signal: controller.signal })
      .then((r) => r.json())
      .then((data: Result[]) => setResults(data))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [q]);

  const hint = useMemo(() => {
    if (!q.trim()) return "Try solar, grid, climate, battery or transport.";
    if (loading) return "Searching...";
    if (!results.length) return "No matches yet, try a shorter keyword.";
    return "";
  }, [q, loading, results.length]);

  return (
    <main>
      <Container>
        <div className="py-10">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900">Explore the wider graph</h1>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-700">
            Use search when students are ready to move beyond the guided journeys and pathways.
          </p>

          <div className="mt-5">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search concepts"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-sky-100"
            />
            {hint ? <div className="mt-2 text-sm text-slate-500">{hint}</div> : null}
          </div>

          <div className="mt-6 grid gap-3">
            {results.map((r) => (
              <Card key={r.id}>
                <div className="p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-slate-900">{r.title}</div>
                    <div className="text-xs text-slate-500">{r.domain}</div>
                  </div>
                  {r.subdomain ? <div className="mt-1 text-xs text-slate-500">{r.subdomain}</div> : null}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
