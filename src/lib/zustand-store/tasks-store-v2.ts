import { initialData } from "@/data/initData";
import { Task } from "@/types";
import { create } from "zustand";

export type TasksState = {
  tasks: Task[];
  sortOrder: "asc" | "desc";
};

export type TasksActions = {
  addTask: (newTask: Task) => void;
  updateTask: (id: string, updatedTasks: Task) => void;
  deleteTask: (id: string) => void;
  sortTasks: () => void;
};

export type TasksStore = TasksState & TasksActions;

export const initialState: TasksState = {
  tasks:
    (localStorage.getItem("tasks") === null &&
      localStorage.setItem(
        "tasks",
        JSON.stringify(
          initialData.categories.flatMap((category) => category.tasks[0])
        )
      ),
    JSON.parse(localStorage.getItem("tasks") || "[]")),
  sortOrder: "asc",
};

export const useTasksStorev2 = create<TasksStore>((set) => ({
  ...initialState,
  addTask: (newTask: Task) =>
    set((state) => ({ tasks: [...state.tasks, newTask] })),
  updateTask: (id: string, updatedData: Task) =>
    set((state) => {
      const updatedTasks = state.tasks.map((task) => {
        if (task.id === id) {
          return { ...task, ...updatedData };
        }
        return task;
      });

      return {
        tasks: updatedTasks,
      };
    }),
  deleteTask: (id: string) =>
    set((state) => {
      const taskDeleted = state.tasks.findIndex((task) => task.id === id);
      const updatedTasks = [...state.tasks];
      updatedTasks.splice(taskDeleted, 1);
      return {
        tasks: updatedTasks,
      };
    }),
  sortTasks: () =>
    set((state) => {
      const sortedTasks = state.tasks.sort((a, b) => {
        const dateA = new Date(a.startDate).getTime();
        const dateB = new Date(b.startDate).getTime();
        return state.sortOrder === "asc" ? dateA - dateB : dateB - dateA;
      });

      return {
        tasks: sortedTasks,
        sortOrder: state.sortOrder === "asc" ? "desc" : "asc",
      };
    }),
}));
