// src/components/agents/AgentList.jsx
import AgentCard from "./AgentCard";

export default function AgentList({ agents }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
