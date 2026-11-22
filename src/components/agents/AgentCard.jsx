// src/components/agents/AgentCard.jsx
import { Link } from "react-router-dom";
import AgentStatusBadge from "./AgentStatusBadge";

export default function AgentCard({ agent }) {
  return (
    <Link 
      to={`/agents/${agent.id}`}
      className="bg-[#111827] border border-[#1f2937] rounded-xl p-6 hover:border-cyan-500/50 transition-colors group block"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-2xl border border-slate-700 group-hover:border-cyan-500/30 transition-colors">
            {agent.avatar}
          </div>
          <div>
            <h3 className="text-white font-bold text-lg leading-tight group-hover:text-cyan-400 transition-colors">
              {agent.codename}
            </h3>
            <p className="text-sm text-slate-400 capitalize">{agent.role}</p>
          </div>
        </div>
        <AgentStatusBadge status={agent.status} />
      </div>
      
      <div className="flex items-center justify-between text-sm text-slate-500 mt-6 pt-4 border-t border-[#1f2937]">
        <span>Nivel {agent.level}</span>
        <span>{agent.missionsCompleted} misiones</span>
      </div>
    </Link>
  );
}
