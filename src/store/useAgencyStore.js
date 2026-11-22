// src/store/useAgencyStore.js
import { create } from "zustand";
import { agents as initialAgents } from "../data/agents";
import { missions as initialMissions } from "../data/missions";

export const useAgencyStore = create((set) => ({
  // Estado
  agents: initialAgents,
  missions: initialMissions,

  // Acciones sobre agentes
  updateAgentStatus: (agentId, status) =>
    set((state) => ({
      agents: state.agents.map((agent) =>
        agent.id === agentId ? { ...agent, status } : agent
      ),
    })),

  getAgentById: (agentId) => {
    // Esta función no cambia el estado, se puede usar directamente
    // Pero en Zustand se suele sacar con un selector. La dejamos por comodidad.
  },

  // Acciones sobre misiones
  assignAgentToMission: (missionId, agentId) =>
    set((state) => ({
      missions: state.missions.map((mission) =>
        mission.id === missionId &&
        !mission.assignedAgentIds.includes(agentId)
          ? {
              ...mission,
              assignedAgentIds: [...mission.assignedAgentIds, agentId],
            }
          : mission
      ),
    })),

  updateMissionStatus: (missionId, status) =>
    set((state) => ({
      missions: state.missions.map((mission) =>
        mission.id === missionId ? { ...mission, status } : mission
      ),
    })),
}));