import { create } from 'zustand';

type CharacterState = {
  selectedId: number | null;
  setSelectedId: (id: number | null) => void;
  openDetail: (id: number) => void;
  closeDetail: () => void;
  isDetailOpen: boolean;
};

export const useCharacterStore = create<CharacterState>((set) => ({
  selectedId: null,
  setSelectedId: (id) => set({ selectedId: id }),
  isDetailOpen: false,
  openDetail: (id) =>
    set({
      selectedId: id,
      isDetailOpen: true,
    }),

  closeDetail: () =>
    set({
      selectedId: null,
      isDetailOpen: false,
    }),
}));
