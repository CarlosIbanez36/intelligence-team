// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Agents from "./pages/Agents";
import AgentDetail from "./pages/AgentDetail";
import Missions from "./pages/Missions";
import MissionDetail from "./pages/MissionDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="agents" element={<Agents />} />
          <Route path="agents/:id" element={<AgentDetail />} />
          <Route path="missions" element={<Missions />} />
          <Route path="missions/:id" element={<MissionDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;