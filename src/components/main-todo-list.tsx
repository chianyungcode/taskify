import { initialData } from "@/data/initData";

import Category from "./ui/category";

import { useTasksStore } from "@/lib/zustand-store/tasks-store";

const MainTodoList = () => {
  const { tasks } = useTasksStore((state) => state);

  return (
    <div className="md:grid md:grid-cols-3 gap-x-4 md:space-y-0 space-y-2 h-screen">
      {initialData.categories.map((category) => {
        const fillteredTasksByCategory = tasks.filter(
          (task) => task.status.value === category.value
        );

        return (
          <ul key={category.id}>
            <Category category={category} tasks={fillteredTasksByCategory} />
          </ul>
        );
      })}
    </div>
  );
};

export default MainTodoList;
