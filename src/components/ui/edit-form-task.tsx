import { Task } from "@/types";
import dayjs from "dayjs";

import ComboboxStatus from "./combobox-status";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/cn";
import ComboboxLabel from "./combobox-label";
import { useStatusTaskStore } from "@/lib/zustand-store/status-task";
import { useTasksStore } from "@/lib/zustand-store/tasks-store";

interface EditFormTaskProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
}

const EditFormTask = ({ task, isOpen, onClose }: EditFormTaskProps) => {
  const { updateTask, deleteTask } = useTasksStore();
  const { statusTask } = useStatusTaskStore();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (task) {
      const editedTask: Task = {
        id: task.id,
        title: formData.get("task-title") as string,
        description: formData.get("description") as string,
        priority: 1,
        status: statusTask,
        labels: [],
        startDate: new Date(formData.get("start-date") as string),
        endDate: new Date(formData.get("end-date") as string),
      };
      updateTask(task.id, editedTask);
      onClose();
    } else {
      console.error("Task ID is undefined");
    }
  };

  if (!task) return null;

  return (
    <>
      <div
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-50 flex justify-center items-center transition-colors",
          isOpen ? "visible bg-black/20" : "invisible"
        )}
      >
        <div
          onClick={(event) => {
            event.stopPropagation();
          }}
          className={cn(
            "bg-white rounded-xl shadow p-6 transition-all ease-out duration-300 w-full max-w-3xl h-[1024px] ",
            isOpen ? "scale-100 opacity-100" : "scale-105 opacity-0"
          )}
        >
          <div className="flex justify-end">
            <XIcon className="w-4 h-4" onClick={onClose} />
          </div>
          {/* children */}
          {/* <header>
            <h1 className="text-xl font-semibold">Edit Task</h1>
          </header> */}
          <form
            action=""
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
              defaultValue={task.title}
            />
            <textarea
              id="description"
              name="description"
              className="px-2 py-1 rounded-lg outline-none border-none border-gray-200 w-full h-[800px] resize-none"
              placeholder="Add description..."
              defaultValue={task.description}
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
                defaultValue={dayjs(task.startDate).format("YYYY-MM-DD HH:mm")}
              />
              <input
                required
                type="datetime-local"
                id="end-date"
                name="end-date"
                className="px-2 py-1 rounded-lg outline-none border border-gray-200"
                defaultValue={dayjs(task.endDate).format("YYYY-MM-DD HH:mm")}
              />
            </div>
            <div className="flex gap-x-2 w-full">
              <button
                type="submit"
                className="bg-black text-gray-50 rounded-lg px-2 py-1 w-full"
              >
                Save
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-rose-600 w-full text-white rounded-lg px-2 py-1"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditFormTask;
