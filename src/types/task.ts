import { type LucideIcon } from "lucide-react";

export enum StatusTask {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export type StatusTaskType = {
  value: StatusTask;
  name: string;
  icon: LucideIcon;
};

export type LabelTaskType = {
  id: string;
  value: string;
  name: string;
  color?: string;
};

export type TTask = {
  id: string;
  title: string;
  description: string;
  status: StatusTaskType;
  label: LabelTaskType[];
  startDate: Date;
  endDate: Date;
};

export type TaskType = {
  id: string;
  taskName: string;
  status: string;
  label: string;
  startDate: Date;
  endDate: Date;
};
