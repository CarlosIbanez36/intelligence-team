// src/components/missions/MissionPriorityBadge.jsx
export default function MissionPriorityBadge({ priority }) {
  const styles = {
    critica: "bg-red-500/10 text-red-400 border-red-500/20",
    alta: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    media: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    baja: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };

  const labels = {
    critica: "CRÍTICA",
    alta: "ALTA",
    media: "MEDIA",
    baja: "BAJA",
  };

  return (
    <span className={`px-2 py-0.5 text-[10px] font-bold tracking-wider rounded border ${styles[priority] || styles.baja}`}>
      {labels[priority] || priority.toUpperCase()}
    </span>
  );
}