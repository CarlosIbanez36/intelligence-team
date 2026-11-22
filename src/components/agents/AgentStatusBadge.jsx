// src/components/agents/AgentStatusBadge.jsx
export default function AgentStatusBadge({ status }) {
  const styles = {
    activo: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "en-mision": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    descanso: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    offline: "bg-slate-500/10 text-slate-400 border-slate-500/20",
  };

  const labels = {
    activo: "Activo",
    "en-mision": "En Misión",
    descanso: "Descanso",
    offline: "Offline",
  };

  return (
    <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${styles[status] || styles.offline}`}>
      {labels[status] || status}
    </span>
  );
}
