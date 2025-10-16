import { create } from "zustand";
import { PlanetData } from "../../data/planetData";

interface SolarSystemState {
  selectedPlanet: PlanetData | null;
  isPaused: boolean;
  animationSpeed: number;
  
  // Actions
  setSelectedPlanet: (planet: PlanetData | null) => void;
  togglePause: () => void;
  setAnimationSpeed: (speed: number) => void;
}

export const useSolarSystem = create<SolarSystemState>((set) => ({
  selectedPlanet: null,
  isPaused: false,
  animationSpeed: 1,
  
  setSelectedPlanet: (planet) => set({ selectedPlanet: planet }),
  
  togglePause: () => set((state) => ({ isPaused: !state.isPaused })),
  
  setAnimationSpeed: (speed) => set({ animationSpeed: Math.max(0.1, Math.min(5, speed)) })
}));
