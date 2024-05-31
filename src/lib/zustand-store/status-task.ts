import { initialStatusTask } from "@/data/initData";
import { Status } from "@/types";
import { create } from "zustand";

export type StatusTaskState = {
  statusTask: Status;
};

export type StatusTaskActions = {
  setStatusTask: (status: Status) => void;
};

export type StatusTaskStore = StatusTaskState & StatusTaskActions;

export const useStatusTaskStore = create<StatusTaskStore>((set) => ({
  statusTask: initialStatusTask[0],
  setStatusTask: (status: Status) => set({ statusTask: status }),
}));
