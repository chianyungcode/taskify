import { TaskType } from "@/types/task";

export const getTasksFromLocal = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const setTasksToLocal = (tasks: TaskType[]) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

export const getTaskById = (id: string) => {
  const tasks = getTasksFromLocal();
  console.log("From data-utils.ts", tasks);
  const taskById: TaskType = tasks.find((task: TaskType) => task.id === id);
  console.log("From data-utils.ts", taskById);

  return taskById;
};

// !TODO perbaiki updateTask ini
export const updateTaskById = (id: string, updatedData: TaskType) => {
  const tasks = getTasksFromLocal();
  const updatedTasks = tasks.map((task: TaskType) => {
    if (task.id === id) {
      return { ...task, ...updatedData };
    }
    return task;
  });
  setTasksToLocal(updatedTasks);
};

export const deleteTaskById = (id: string) => {
  const tasks = getTasksFromLocal();
  const taskIndex = tasks.findIndex((item: TaskType) => item.id === id);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    setTasksToLocal(tasks);
  }
};
