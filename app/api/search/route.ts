import { NextResponse } from "next/server";
import nodes from "@/data/energy_knowledge_graph_1001_nodes.json";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").trim().toLowerCase();
  if (!q) return NextResponse.json([]);

  const results = (nodes as any[])
    .filter((n) =>
      String(n.title).toLowerCase().includes(q) ||
      String(n.domain).toLowerCase().includes(q) ||
      String(n.id).toLowerCase().includes(q)
    )
    .slice(0, 60)
    .map((n) => ({
      id: n.id,
      title: n.title,
      domain: n.domain,
      subdomain: n.subdomain ?? null,
      level: n.level
    }));

  return NextResponse.json(results, {
    headers: { "Cache-Control": "public, max-age=300" }
  });
}
