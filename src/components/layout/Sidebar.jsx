// src/components/layout/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Users, Target, ShieldAlert } from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Agentes", path: "/agents", icon: Users },
  { name: "Misiones", path: "/missions", icon: Target },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-[#111827] border-r border-[#1f2937] flex flex-col h-full">
      <div className="h-16 flex items-center px-6 border-b border-[#1f2937]">
        <ShieldAlert className="text-cyan-400 w-6 h-6 mr-3" />
        <span className="text-white font-bold tracking-widest text-sm uppercase">
          Intell. Team
        </span>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium text-sm">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-[#1f2937]">
        <div className="flex items-center gap-3 px-2 text-xs text-slate-500">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
          Sistema Online
        </div>
      </div>
    </aside>
  );
}