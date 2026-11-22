// src/pages/MissionDetail.jsx
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, DollarSign, CheckCircle, UserPlus } from "lucide-react";
import { useAgencyStore } from "../store/useAgencyStore";
import MissionPriorityBadge from "../components/missions/MissionPriorityBadge";
import AgentStatusBadge from "../components/agents/AgentStatusBadge";

export default function MissionDetail() {
  const { id } = useParams();
  const mission = useAgencyStore((state) => state.missions.find((m) => m.id === id));
  const agents = useAgencyStore((state) => state.agents);
  
  // Acciones del store
  const assignAgent = useAgencyStore((state) => state.assignAgentToMission);
  const updateMissionStatus = useAgencyStore((state) => state.updateMissionStatus);

  if (!mission) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl text-white mb-4">Misión no encontrada</h2>
        <Link to="/missions" className="text-cyan-400 hover:underline">Volver al tablero</Link>
      </div>
    );
  }

  // Agentes ya asignados y disponibles
  const assignedAgents = agents.filter((a) => mission.assignedAgentIds.includes(a.id));
  const availableAgents = agents.filter((a) => !mission.assignedAgentIds.includes(a.id));

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Link to="/missions" className="inline-flex items-center text-sm text-slate-400 hover:text-white transition-colors mb-2">
        <ArrowLeft className="w-4 h-4 mr-2" /> Volver al tablero
      </Link>

      {/* Cabecera de la misión */}
      <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-8 relative overflow-hidden">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-white tracking-wide">{mission.title}</h1>
              <MissionPriorityBadge priority={mission.priority} />
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-400">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {mission.location}</span>
              <span className="flex items-center gap-1 text-emerald-400 font-mono"><DollarSign className="w-4 h-4" /> {mission.reward.toLocaleString()}</span>
            </div>
          </div>

          {/* Botón para cambiar el estado (solo demo) */}
          {mission.status !== "completada" && (
            <button
              onClick={() => updateMissionStatus(mission.id, mission.status === "pendiente" ? "en-curso" : "completada")}
              className="flex items-center gap-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-4 py-2 rounded-lg hover:bg-cyan-500/20 transition-colors text-sm font-medium shrink-0"
            >
              <CheckCircle className="w-4 h-4" />
              {mission.status === "pendiente" ? "Iniciar Misión" : "Completar Misión"}
            </button>
          )}
        </div>
        
        <p className="text-slate-300 max-w-3xl mt-6">{mission.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Agentes asignados */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Equipo Asignado</h2>
          {assignedAgents.length === 0 ? (
            <p className="text-sm text-slate-500 italic">No hay agentes asignados a esta misión.</p>
          ) : (
            <ul className="space-y-3">
              {assignedAgents.map((agent) => (
                <li key={agent.id} className="flex items-center justify-between p-3 bg-[#0a0e1a] border border-[#1f2937] rounded-lg">
                  <Link to={`/agents/${agent.id}`} className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                    <span className="text-xl">{agent.avatar}</span>
                    <span className="font-medium text-sm">{agent.codename}</span>
                  </Link>
                  <AgentStatusBadge status={agent.status} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Añadir agentes */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Asignar Refuerzos</h2>
          {availableAgents.length === 0 ? (
            <p className="text-sm text-slate-500 italic">Todos los agentes ya están en esta misión.</p>
          ) : (
            <ul className="space-y-3">
              {availableAgents.map((agent) => (
                <li key={agent.id} className="flex items-center justify-between p-3 bg-[#0a0e1a] border border-[#1f2937] rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{agent.avatar}</span>
                    <div>
                      <p className="font-medium text-sm text-slate-300">{agent.codename}</p>
                      <p className="text-xs text-slate-500 capitalize">{agent.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => assignAgent(mission.id, agent.id)}
                    className="p-1.5 text-cyan-400 hover:bg-cyan-500/20 rounded-md transition-colors"
                    title="Asignar a misión"
                  >
                    <UserPlus className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}