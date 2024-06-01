import { Task } from "@/types";

export const getTasksFromLocal = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const setTasksToLocal = (tasks: Task[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTaskById = (id: string) => {
  const tasks = getTasksFromLocal();
  console.log("From data-utils.ts", tasks);
  const taskById: Task = tasks.find((task: Task) => task.id === id);
  console.log("From data-utils.ts", taskById);

  return taskById;
};

// !TODO perbaiki updateTask ini
export const updateTaskById = (id: string, updatedData: Task) => {
  const tasks = getTasksFromLocal();
  const updatedTasks = tasks.map((task: Task) => {
    if (task.id === id) {
      return { ...task, ...updatedData };
    }
    return task;
  });
  setTasksToLocal(updatedTasks);
};

export const deleteTaskById = (id: string) => {
  const tasks = getTasksFromLocal();
  const taskIndex = tasks.findIndex((item: Task) => item.id === id);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    setTasksToLocal(tasks);
  }
};
