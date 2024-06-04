import { initialLabelTask } from "@/data/initial-data";
import { Label } from "@/types";
import { create } from "zustand";

export type LabelState = {
  labels: Label[];
};

export type LabelActions = {
  setLabels: (labels: Label[]) => void;
};

export type LabelStore = LabelState & LabelActions;

export const useLabelStore = create<LabelStore>((set) => ({
  labels: [initialLabelTask[0]],
  setLabels: (labels: Label[]) => set({ labels: labels }),
}));
