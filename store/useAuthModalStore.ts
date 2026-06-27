import { create } from "zustand";

type AuthView = "signin" | "signup" | "logout";

interface ModalStore {
  isOpen: boolean;
  view: AuthView;
  openModal: (view?: AuthView) => void;
  closeModal: () => void;
  setView: (view: AuthView) => void;
}

export const useAuthModalStore = create<ModalStore>((set) => ({
  isOpen: false,
  view: "signin",

  openModal: () => set({ isOpen: true }),

  closeModal: () => set({ isOpen: false }),

  setView: (view) => set({ view }),
}));
