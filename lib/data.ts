import journeys from "@/data/journeys.json";
import pathways from "@/data/pathways.json";
import concepts from "@/data/concepts.json";
import graph from "@/data/energy_knowledge_graph_1001_nodes.json";

export type Journey = { slug: string; title: string; summary: string; essentialQuestion: string; steps: string[]; };
export type Pathway = { slug: string; title: string; question: string; inputs: string[]; processes: string[]; outcomes: string[]; explanation: string; challenge: string; };
export type ConceptInfo = { what: string; why: string; example: string; question: string; };
export type Result = { id: string; title: string; domain: string; subdomain: string | null; level: number; };

const journeyList = journeys as Journey[];
const pathwayList = pathways as Pathway[];
const conceptMap = concepts as Record<string, ConceptInfo>;
const graphList = graph as any[];

export function getJourneys() { return journeyList; }
export function getJourney(slug: string) { return journeyList.find((j) => j.slug === slug) ?? null; }
export function getPathways() { return pathwayList; }
export function getPathway(slug: string) { return pathwayList.find((p) => p.slug === slug) ?? null; }
export function getConcept(title: string) { return conceptMap[title] ?? null; }

export function searchGraph(query: string): Result[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return graphList
    .filter((n) =>
      String(n.title).toLowerCase().includes(q) ||
      String(n.domain).toLowerCase().includes(q) ||
      String(n.id).toLowerCase().includes(q)
    )
    .slice(0, 60)
    .map((n) => ({ id: n.id, title: n.title, domain: n.domain, subdomain: n.subdomain ?? null, level: n.level }));
}
