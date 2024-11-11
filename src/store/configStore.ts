import { create } from 'zustand';

interface ConfigState {
  theme: 'light' | 'dark';
  apiKey: string;
  model: string;
  robotColor: string;
  metalness: number;
  roughness: number;
  animationSpeed: number;
  backgroundColor: string;
  lightIntensity: number;
  cameraPosition: { x: number; y: number; z: number };
  setTheme: (theme: 'light' | 'dark') => void;
  setApiKey: (key: string) => void;
  setModel: (model: string) => void;
  setRobotColor: (color: string) => void;
  setMetalness: (value: number) => void;
  setRoughness: (value: number) => void;
  setAnimationSpeed: (speed: number) => void;
  setBackgroundColor: (color: string) => void;
  setLightIntensity: (intensity: number) => void;
  setCameraPosition: (position: { x: number; y: number; z: number }) => void;
}

export const useConfigStore = create<ConfigState>((set) => ({
  theme: 'dark',
  apiKey: '',
  model: 'gpt-4',
  robotColor: '#4a9eff',
  metalness: 0.5,
  roughness: 0.5,
  animationSpeed: 1,
  backgroundColor: '#000000',
  lightIntensity: 1,
  cameraPosition: { x: 5, y: 5, z: 5 },
  setTheme: (theme) => set({ theme }),
  setApiKey: (apiKey) => set({ apiKey }),
  setModel: (model) => set({ model }),
  setRobotColor: (robotColor) => set({ robotColor }),
  setMetalness: (metalness) => set({ metalness }),
  setRoughness: (roughness) => set({ roughness }),
  setAnimationSpeed: (animationSpeed) => set({ animationSpeed }),
  setBackgroundColor: (backgroundColor) => set({ backgroundColor }),
  setLightIntensity: (lightIntensity) => set({ lightIntensity }),
  setCameraPosition: (cameraPosition) => set({ cameraPosition }),
}));