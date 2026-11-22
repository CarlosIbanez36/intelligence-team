// src/pages/Missions.jsx
import { useAgencyStore } from "../store/useAgencyStore";
import MissionBoard from "../components/missions/MissionBoard";

export default function Missions() {
  const missions = useAgencyStore((state) => state.missions);

  return (
    <div className="space-y-6 h-full flex flex-col">
      <header className="flex items-end justify-between shrink-0">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Tablero de Misiones</h1>
          <p className="text-slate-400 mt-1">Gestión de operaciones activas y pendientes.</p>
        </div>
      </header>

      <div className="flex-1 overflow-x-auto">
        <MissionBoard missions={missions} />
      </div>
    </div>
  );
}