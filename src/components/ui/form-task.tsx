/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { setTasksToLocal } from "../../utils/data-utils";
import { useTasksStore } from "../../lib/zustand-store/tasks-store";
import ComboboxPopover from "./combobox-popover";

interface FormTaskProps {
  closeModal: () => void;
  statusTask?: string;
}

const FormTask = ({ closeModal, statusTask }: FormTaskProps) => {
  const { tasks, addTask } = useTasksStore((state) => state);
  const [selectedStatus, setSelectedStatus] = useState(statusTask || "");

  useEffect(() => {
    setTasksToLocal(tasks);
  }, [tasks]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newTask = {
      id: nanoid(),
      taskName: formData.get("task-name") as string,
      status: selectedStatus,
      label: formData.get("label") as string,
      startDate: new Date(formData.get("start-date") as string),
      endDate: new Date(formData.get("end-date") as string),
    };

    addTask(newTask);
    closeModal();
  };

  const getStatus = (status: string) => {
    setSelectedStatus(status);
  };

  return (
    <div className="space-y-2 w-full">
      <header>
        <h1 className="text-2xl font-semibold">Add Task</h1>
      </header>
      <form
        action=""
        id="task-form"
        onSubmit={handleSubmit}
        className="space-y-2 flex flex-col"
      >
        <input
          type="text"
          id="task-name"
          name="task-name"
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
          <ComboboxPopover
            statusByColumn={statusTask || "To do"}
            getStatus={getStatus}
          />
          <input
            required
            type="text"
            id="label"
            name="label"
            className="px-2 py-1 rounded-lg outline-none border border-gray-200"
            placeholder="Label..."
          />
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

export default FormTask;
