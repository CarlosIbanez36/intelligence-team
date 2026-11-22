// src/components/missions/MissionBoard.jsx
import MissionCard from "./MissionCard";

const COLUMNS = [
  { id: "pendiente", title: "Pendientes", color: "bg-slate-500" },
  { id: "en-curso", title: "En Curso", color: "bg-cyan-500" },
  { id: "completada", title: "Completadas", color: "bg-emerald-500" },
];

export default function MissionBoard({ missions }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {COLUMNS.map((col) => {
        const columnMissions = missions.filter((m) => m.status === col.id);
        
        return (
          <div key={col.id} className="bg-[#0d1322] rounded-xl border border-[#1f2937] p-4 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4 px-1">
              <div className={`w-2 h-2 rounded-full ${col.color}`} />
              <h2 className="font-bold text-slate-200 text-sm uppercase tracking-wide">
                {col.title}
              </h2>
              <span className="ml-auto bg-[#111827] text-slate-400 text-xs py-0.5 px-2 rounded-full border border-[#1f2937]">
                {columnMissions.length}
              </span>
            </div>

            <div className="flex-1">
              {columnMissions.map((mission) => (
                <MissionCard key={mission.id} mission={mission} />
              ))}
              {columnMissions.length === 0 && (
                <div className="text-center py-8 text-sm text-slate-600 border border-dashed border-[#1f2937] rounded-lg">
                  No hay misiones
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}