import { create } from "zustand";

export type ModalState = {
  isModalOpen: boolean;
};

export type ModalActions = {
  setIsModalOpen: (isOpen: boolean) => void;
};

export type ModalStore = ModalState & ModalActions;

export const useModalStore = create<ModalStore>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isOpen: boolean) => set({ isModalOpen: isOpen }),
}));
