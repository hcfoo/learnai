"use client";

import Link from "next/link";
import Container from "@/components/Container";
import Card from "@/components/Card";
import { useEffect, useMemo, useState } from "react";

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
      .then(r => r.json())
      .then((data: Result[]) => setResults(data))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [q]);

  const hint = useMemo(() => {
    if (!q.trim()) return "Try a keyword such as solar, entropy, battery or carbon.";
    if (loading) return "Searching…";
    if (!results.length) return "No matches yet, try a shorter keyword.";
    return "";
  }, [q, loading, results.length]);

  return (
    <main>
      <Container>
        <div className="py-10">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-2xl font-semibold">Explore</h1>
            <Link className="text-sm text-neutral-600 hover:text-neutral-900" href="/">
              Home
            </Link>
          </div>

          <div className="mt-5">
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search concepts"
              className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-200"
            />
            {hint ? <div className="mt-2 text-sm text-neutral-500">{hint}</div> : null}
          </div>

          <div className="mt-6 grid gap-3">
            {results.map(r => (
              <Card key={r.id}>
                <Link href={`/node/${r.id}`} className="block p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-neutral-900">{r.title}</div>
                    <div className="text-xs text-neutral-500">{r.domain}</div>
                  </div>
                  {r.subdomain ? (
                    <div className="mt-1 text-xs text-neutral-500">{r.subdomain}</div>
                  ) : null}
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </main>
  );
}
