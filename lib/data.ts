import pathways from "@/data/pathways.json";
import learning from "@/data/node_learning.json";
import graph from "@/data/energy_knowledge_graph_1001_nodes.json";

export type Pathway = {
  slug: string;
  title: string;
  question: string;
  left: string[];
  centre: string[];
  right: string[];
  explanation: string;
  challenge: string;
};

type GraphNode = {
  id: string;
  title: string;
  domain: string;
  subdomain: string | null;
  level: number;
  explanation: string;
  example: string;
  question: string;
  difficulty: string;
  connections: string[];
};

const pathwayList = pathways as Pathway[];
const graphList = graph as GraphNode[];
const learningMap = learning as Record<string, { what: string; why: string }>;

export function getPathways() { return pathwayList; }
export function getPathway(slug: string) { return pathwayList.find((p) => p.slug === slug) ?? null; }
export function getLearning(title: string) { return learningMap[title] ?? null; }
export function searchGraph(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return graphList.filter((n) => n.title.toLowerCase().includes(q) || n.domain.toLowerCase().includes(q) || n.id.toLowerCase().includes(q)).slice(0,60);
}
