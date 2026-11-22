// src/components/missions/MissionCard.jsx
import { Link } from "react-router-dom";
import { MapPin, DollarSign, Users } from "lucide-react";
import MissionPriorityBadge from "./MissionPriorityBadge";

export default function MissionCard({ mission }) {
  return (
    <Link
      to={`/missions/${mission.id}`}
      className="bg-[#111827] border border-[#1f2937] rounded-lg p-4 hover:border-cyan-500/50 transition-colors group block mb-3"
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors leading-tight">
          {mission.title}
        </h3>
        <MissionPriorityBadge priority={mission.priority} />
      </div>
      
      <p className="text-xs text-slate-400 line-clamp-2 mb-4">
        {mission.description}
      </p>

      <div className="space-y-1.5 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5" />
          <span className="truncate">{mission.location}</span>
        </div>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#1f2937]">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <DollarSign className="w-3.5 h-3.5" />
            <span className="font-mono">{mission.reward.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>{mission.assignedAgentIds.length} agentes</span>
          </div>
        </div>
      </div>
    </Link>
  );
}