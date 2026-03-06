import graphNodes from "@/data/energy_knowledge_graph_1001_nodes.json";
import coreNodes from "@/data/core_learning_nodes.json";
import journeys from "@/data/learning_journeys.json";

export type GraphNode = {
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

export type CoreNode = {
  id: string;
  title: string;
  whatIsIt: string;
  whyItMatters: string;
  example: string;
  thinkAboutIt: string;
  exploreNext: string[];
};

export type Journey = {
  slug: string;
  title: string;
  goal: string;
  essentialQuestion: string;
  nodes: string[];
  challenge: string;
};

const graph = graphNodes as GraphNode[];
const graphById = new Map<string, GraphNode>(graph.map((n) => [n.id, n]));
const core = coreNodes as CoreNode[];
const coreById = new Map<string, CoreNode>(core.map((n) => [n.id, n]));
const journeyList = journeys as Journey[];

export function getAllNodes() {
  return graph;
}

export function getNode(id: string) {
  return graphById.get(id) ?? null;
}

export function getCoreNode(id: string) {
  return coreById.get(id) ?? null;
}

export function getMergedNode(id: string) {
  const base = getNode(id);
  const curated = getCoreNode(id);
  return { base, curated };
}

export function getDomainNodes() {
  return graph.filter((n) => n.level === 1);
}

export function getConnectionNodes(node: GraphNode, limit = 18) {
  return (node.connections || [])
    .slice(0, limit)
    .map((id) => graphById.get(id))
    .filter(Boolean) as GraphNode[];
}

export function searchNodes(query: string, limit = 60) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return graph
    .filter((n) =>
      n.title.toLowerCase().includes(q) ||
      n.domain.toLowerCase().includes(q) ||
      n.id.toLowerCase().includes(q)
    )
    .slice(0, limit);
}

export function getJourneys() {
  return journeyList;
}

export function getJourney(slug: string) {
  return journeyList.find((j) => j.slug === slug) ?? null;
}

export function getJourneyNodes(slug: string) {
  const journey = getJourney(slug);
  if (!journey) return [];
  return journey.nodes
    .map((id) => ({
      id,
      base: getNode(id),
      curated: getCoreNode(id)
    }))
    .filter((item) => item.base);
}

export function getFeaturedCoreNodes() {
  return core;
}
