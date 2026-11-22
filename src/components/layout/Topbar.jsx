// src/components/layout/Topbar.jsx
import { Search, Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="h-16 border-b border-[#1f2937] bg-[#0a0e1a]/80 backdrop-blur flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-2 bg-[#111827] border border-[#1f2937] px-4 py-2 rounded-md w-96">
        <Search className="w-4 h-4 text-slate-500" />
        <input
          type="text"
          placeholder="Buscar agentes, misiones..."
          className="bg-transparent border-none outline-none text-sm text-slate-300 w-full placeholder:text-slate-600"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-cyan-900 border border-cyan-700 flex items-center justify-center text-cyan-400 text-xs font-bold">
          DG
        </div>
      </div>
    </header>
  );
}