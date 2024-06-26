import { useEffect } from "react";
import { nanoid } from "nanoid";

import { Task } from "@/types";

import { setTasksToLocal } from "@/utils/data-utils";
import { useStatusTaskStore } from "@/lib/zustand-store/status-task";

import ComboboxLabel from "./combobox-label";
import ComboboxStatus from "./combobox-status";
import { useModalStore } from "@/lib/zustand-store/modal-store";
import { useTasksStore } from "@/lib/zustand-store/tasks-store";
import { useLabelStore } from "@/lib/zustand-store/label-store";

const FormTaskV2 = () => {
  const { tasks, addTask } = useTasksStore((state) => state);
  const { statusTask } = useStatusTaskStore((state) => state);
  const { setIsModalOpen } = useModalStore((state) => state);
  const { labels } = useLabelStore();

  useEffect(() => {
    setTasksToLocal(tasks);
  }, [tasks, statusTask]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newTask: Task = {
      id: nanoid(),
      title: formData.get("task-title") as string,
      description: formData.get("description") as string,
      priority: 1,
      status: statusTask,
      labels: [...labels],
      startDate: new Date(formData.get("start-date") as string),
      endDate: new Date(formData.get("end-date") as string),
    };

    addTask(newTask);
    setIsModalOpen(false);
    event.currentTarget.reset();
  };

  return (
    <div className="space-y-2 w-full">
      <header>
        <h1 className="text-2xl font-semibold">Add Task</h1>
      </header>
      <form
        id="task-form"
        onSubmit={handleSubmit}
        className="space-y-2 flex flex-col"
      >
        <input
          type="text"
          id="task-title"
          name="task-title"
          className="px-2 py-1 rounded-lg outline-none border-none text-xl border-gray-200 w-full font-medium"
          placeholder="Task title"
        />
        <textarea
          id="description"
          name="description"
          className="px-2 py-1 rounded-lg outline-none border-none border-gray-200 w-full h-[800px] resize-none"
          placeholder="Add description..."
        />
        <div className="flex gap-x-2 items-center">
          <ComboboxStatus />
          <ComboboxLabel />
          <input
            required
            type="datetime-local"
            id="start-date"
            name="start-date"
            className="px-2 py-1 rounded-lg outline-none border border-gray-200"
          />
          <input
            required
            type="datetime-local"
            id="end-date"
            name="end-date"
            className="px-2 py-1 rounded-lg outline-none border border-gray-200"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-gray-50 rounded-lg px-4 py-1.5 w-max self-end"
        >
          Tambah tugas
        </button>
      </form>
    </div>
  );
};

export default FormTaskV2;
