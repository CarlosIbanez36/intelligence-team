// src/components/layout/Layout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout() {
  return (
    <div className="flex h-screen bg-[#0a0e1a] text-slate-200 font-sans overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet /> {/* Aquí se renderizarán las páginas */}
        </main>
      </div>
    </div>
  );
}