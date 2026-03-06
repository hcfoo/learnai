import nodes from "@/data/energy_knowledge_graph_1001_nodes.json";

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

const graph = nodes as GraphNode[];
const byId = new Map<string, GraphNode>(graph.map(n => [n.id, n]));

export function getAllNodes() {
  return graph;
}

export function getNode(id: string) {
  return byId.get(id) ?? null;
}

export function getDomainNodes() {
  return graph.filter(n => n.level === 1);
}

export function getConnectionNodes(node: GraphNode, limit = 24) {
  const ids = (node.connections || []).slice(0, limit);
  return ids.map(id => byId.get(id)).filter(Boolean) as GraphNode[];
}
