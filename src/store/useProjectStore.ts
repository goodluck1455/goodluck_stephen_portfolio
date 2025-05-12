// useToggleStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';



type ProjectState = {
  moreProject: boolean;

  setMorePoroject: () => void;
 
};

export const useProjectStore = create<ProjectState>()(
   persist(
    (set) => ({
      moreProject: false,
      setMorePoroject: () => set((state) => ({ moreProject: !state.moreProject })),
}),
{
    name: 'toggle-storage'
  }
) 
);
