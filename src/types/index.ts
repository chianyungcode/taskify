import { LucideIcon } from "lucide-react";

enum Priority {
  Urgent,
  High,
  Medium,
  Low,
}

export type Label = {
  id: string;
  value: string;
  name: string;
};

export type Status = {
  id: string;
  value: string;
  name: string;
};

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: Priority;
  status: Status;
  labels: Label[];
};

export type Category = {
  id: string;
  name: string;
  value: string;
  icon: LucideIcon;
  tasks: Task[];
};
