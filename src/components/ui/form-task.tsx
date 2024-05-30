import { useEffect } from "react";
import { nanoid } from "nanoid";
import { setTasksToLocal } from "../../utils/data-utils";
import { useTodoStore } from "../../lib/zustand-store/tasks-store";

interface FormTaskProps {
  onClose: () => void;
  statusTask?: string;
}

const FormTask = ({ onClose, statusTask }: FormTaskProps) => {
  const { tasks, addTask } = useTodoStore((state) => state);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTasksToLocal(tasks);
    }
  }, [tasks]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const newTask = {
      id: nanoid(),
      taskName: formData.get("task-name") as string,
      status: formData.get("status") as string,
      label: formData.get("label") as string,
      startDate: new Date(formData.get("start-date") as string),
      endDate: new Date(formData.get("end-date") as string),
    };

    addTask(newTask);
    onClose();
  };

  return (
    <div className="space-y-2">
      <header>
        <h1 className="text-2xl font-semibold">Add Task</h1>
      </header>
      <form
        action=""
        id="task-form"
        onSubmit={handleSubmit}
        className="space-y-2 flex flex-col"
      >
        <label htmlFor="task-name">Task name</label>
        <input
          type="text"
          id="task-name"
          name="task-name"
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        />
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={statusTask}
          onChange={() => {}}
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        >
          <option value="To do">To do</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>
        <label htmlFor="label">Label</label>
        <input
          required
          type="text"
          id="label"
          name="label"
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        />
        <label htmlFor="start-date">Start date</label>
        <input
          required
          type="datetime-local"
          id="start-date"
          name="start-date"
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        />
        <label htmlFor="end-date">End date</label>
        <input
          required
          type="datetime-local"
          id="end-date"
          name="end-date"
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        />
        <button
          type="submit"
          className="bg-black text-gray-50 rounded-lg px-2 py-1"
        >
          Tambah tugas
        </button>
      </form>
    </div>
  );
};

export default FormTask;
