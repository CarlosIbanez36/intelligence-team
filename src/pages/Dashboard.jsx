// src/pages/Dashboard.jsx
import { useAgencyStore } from "../store/useAgencyStore";
import { Users, Target, ShieldAlert, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const agents = useAgencyStore((state) => state.agents);
  const missions = useAgencyStore((state) => state.missions);

  // Cálculos dinámicos
  const activeAgents = agents.filter((a) => a.status === "activo" || a.status === "en-mision").length;
  const activeMissions = missions.filter((m) => m.status === "en-curso").length;
  const pendingMissions = missions.filter((m) => m.status === "pendiente").length;
  const completedMissions = missions.filter((m) => m.status === "completada").length;
  
  // Misión más urgente (la primera crítica que no esté completada)
  const topPriorityMission = missions.find((m) => m.priority === "critica" && m.status !== "completada");

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-white tracking-tight">Panel de Control</h1>
        <p className="text-slate-400 mt-1">Resumen en tiempo real del estado de la agencia.</p>
      </header>

      {/* Tarjetas de estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#111827] border border-[#1f2937] p-6 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-400 font-medium">Agentes Operativos</p>
            <p className="text-2xl font-bold text-white">{activeAgents}</p>
          </div>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] p-6 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-amber-500/10 rounded-lg text-amber-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-400 font-medium">Misiones en Curso</p>
            <p className="text-2xl font-bold text-white">{activeMissions}</p>
          </div>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] p-6 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-emerald-500/10 rounded-lg text-emerald-400">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-400 font-medium">Completadas</p>
            <p className="text-2xl font-bold text-white">{completedMissions}</p>
          </div>
        </div>

        <div className="bg-[#111827] border border-[#1f2937] p-6 rounded-xl flex items-center gap-4">
          <div className="p-3 bg-red-500/10 rounded-lg text-red-400">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm text-slate-400 font-medium">Pendientes</p>
            <p className="text-2xl font-bold text-white">{pendingMissions}</p>
          </div>
        </div>
      </div>

      {/* Sección de Alerta / Prioridad */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Misión Crítica */}
        <div className="lg:col-span-2 bg-gradient-to-br from-[#111827] to-[#1f2937] border border-red-500/20 rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>
          
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-400" />
            Alerta de Alta Prioridad
          </h2>
          
          {topPriorityMission ? (
            <div>
              <h3 className="text-xl font-semibold text-red-100 mb-2">{topPriorityMission.title}</h3>
              <p className="text-slate-400 text-sm mb-4 max-w-xl">{topPriorityMission.description}</p>
              <Link 
                to={`/missions/${topPriorityMission.id}`}
                className="inline-flex items-center justify-center px-4 py-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 rounded-lg text-sm font-medium transition-colors"
              >
                Ver Detalles de la Misión
              </Link>
            </div>
          ) : (
            <p className="text-slate-400 text-sm">No hay misiones críticas pendientes. Buena trabajo, agente.</p>
          )}
        </div>

        {/* Accesos Rápidos */}
        <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-6">
          <h2 className="text-lg font-bold text-white mb-4">Accesos Rápidos</h2>
          <div className="space-y-3">
            <Link to="/agents" className="flex items-center justify-between p-3 bg-[#0a0e1a] rounded-lg border border-[#1f2937] hover:border-cyan-500/30 transition-colors group">
              <span className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">Directorio de Agentes</span>
              <Users className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </Link>
            <Link to="/missions" className="flex items-center justify-between p-3 bg-[#0a0e1a] rounded-lg border border-[#1f2937] hover:border-cyan-500/30 transition-colors group">
              <span className="text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">Tablero de Misiones</span>
              <Target className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}