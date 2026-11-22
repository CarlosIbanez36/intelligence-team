// src/pages/Agents.jsx
import { useAgencyStore } from "../store/useAgencyStore";
import AgentList from "../components/agents/AgentList";

export default function Agents() {
  const agents = useAgencyStore((state) => state.agents);

  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Directorio de Agentes</h1>
          <p className="text-slate-400 mt-1">Personal de élite disponible para asignación.</p>
        </div>
        <div className="text-sm text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
          {agents.length} agentes registrados
        </div>
      </header>

      <AgentList agents={agents} />
    </div>
  );
}