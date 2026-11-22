// src/pages/AgentDetail.jsx
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Shield, Target, Star } from "lucide-react";
import { useAgencyStore } from "../store/useAgencyStore";
import AgentStatusBadge from "../components/agents/AgentStatusBadge";

export default function AgentDetail() {
  const { id } = useParams();
  const agent = useAgencyStore((state) => state.agents.find((a) => a.id === id));
  const missions = useAgencyStore((state) => state.missions);

  if (!agent) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-white mb-4">Agente no encontrado</h2>
        <Link to="/agents" className="text-cyan-400 hover:underline">Volver al directorio</Link>
      </div>
    );
  }

  // Filtramos las misiones que tiene asignadas este agente
  const agentMissions = missions.filter((m) => m.assignedAgentIds.includes(agent.id));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link to="/agents" className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors mb-2">
        <ArrowLeft className="w-4 h-4 mr-2" /> Volver al directorio
      </Link>

      {/* Cabecera del perfil */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-8 flex items-start gap-8 relative overflow-hidden">
        {/* Adorno de fondo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="w-24 h-24 rounded-2xl bg-slate-800 flex items-center justify-center text-5xl border border-slate-700 shrink-0">
          {agent.avatar}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-3xl font-bold text-white tracking-wide">{agent.codename}</h1>
            <AgentStatusBadge status={agent.status} />
          </div>
          <p className="text-cyan-400 font-medium capitalize mb-4">{agent.role} · Nivel {agent.level}</p>
          <p className="text-slate-300 max-w-2xl">{agent.bio}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Columna de Habilidades */}
        <div className="md:col-span-2 bg-[#111827] border border-[#1f2937] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" /> Habilidades
          </h2>
          <div className="space-y-4">
            {agent.skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-300">{skill.name}</span>
                  <span className="text-cyan-400 font-mono">{skill.value}/100</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-cyan-500 rounded-full" 
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna de Misiones */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-red-400" /> Misiones Asignadas
          </h2>
          {agentMissions.length === 0 ? (
            <p className="text-sm text-slate-500 italic">Sin misiones activas.</p>
          ) : (
            <ul className="space-y-3">
              {agentMissions.map((m) => (
                <li key={m.id} className="text-sm border-l-2 border-cyan-500 pl-3">
                  <p className="text-white font-medium">{m.title}</p>
                  <p className="text-slate-500 capitalize text-xs">{m.status}</p>
                </li>
              ))}
            </ul>
          )}
          
          <div className="mt-8 pt-6 border-t border-[#1f2937]">
            <h3 className="text-sm font-bold text-slate-400 mb-2 uppercase tracking-wider flex items-center gap-2">
              <Shield className="w-4 h-4" /> Récord
            </h3>
            <p className="text-3xl font-bold text-white">{agent.missionsCompleted} <span className="text-sm font-normal text-slate-500">completadas</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}