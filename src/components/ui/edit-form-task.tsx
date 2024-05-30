import { useTasksStore } from "@/providers/tasks-store-provider";
import { TaskType } from "@/types/data";
import dayjs from "dayjs";
import React from "react";

interface EditFormTaskProps {
  onClose: () => void;
  taskData: TaskType | null;
}

const EditFormTask = ({ onClose, taskData }: EditFormTaskProps) => {
  const { updateTask, deleteTask } = useTasksStore((state) => state);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (taskData) {
      const editedTask = {
        id: taskData.id,
        taskName: formData.get("task-name") as string,
        status: formData.get("status") as string,
        label: formData.get("label") as string,
        startDate: new Date(formData.get("start-date") as string),
        endDate: new Date(formData.get("end-date") as string),
      };
      updateTask(taskData.id, editedTask);
      onClose();
    } else {
      console.error("Task ID is undefined");
    }
  };

  if (!taskData) return null;

  return (
    <>
      <header>
        <h1 className="text-xl font-semibold">Edit Task</h1>
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
          defaultValue={taskData.taskName}
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        />
        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          defaultValue={taskData.status}
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        >
          <option>To do</option>
          <option>In progress</option>
          <option>Completed</option>
        </select>
        <label htmlFor="label">Label</label>
        <input
          type="text"
          id="label"
          name="label"
          defaultValue={taskData.label}
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        />
        <label htmlFor="start-date">Start date</label>
        <input
          type="datetime-local"
          id="start-date"
          name="start-date"
          defaultValue={dayjs(taskData.startDate).format("YYYY-MM-DD HH:mm")}
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        />
        <label htmlFor="end-date">End date</label>
        <input
          type="datetime-local"
          id="end-date"
          name="end-date"
          defaultValue={dayjs(taskData.endDate).format("YYYY-MM-DD HH:mm")}
          className="px-2 py-1 rounded-lg outline-none border border-gray-200"
        />
        <div className="flex gap-x-2 w-full">
          <button
            type="submit"
            className="bg-black text-gray-50 rounded-lg px-2 py-1 w-full"
          >
            Save
          </button>
          <button
            onClick={() => deleteTask(taskData.id)}
            className="bg-rose-600 w-full text-white rounded-lg px-2 py-1"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
};

export default EditFormTask;
