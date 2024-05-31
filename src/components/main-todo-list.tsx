import { initialData } from "@/data/initData";
// import ColumnItem from "../components/ui/column-item";
// import { columns } from "../data/initialData";
import { useTasksStorev2 } from "../lib/zustand-store/tasks-store-v2";
import Category from "./ui/category";

const MainTodoList = () => {
  const { tasks } = useTasksStorev2((state) => state);

  return (
    <div className="md:grid md:grid-cols-3 gap-x-4 md:space-y-0 space-y-2 h-screen">
      {/* {columns.map((column) => {
        const filteredTasks = tasks.filter(
          (task) => task.status === column.name
        );
        return (
          <div key={column.id}>
            <ColumnItem
              id={column.id}
              icon={column.icon}
              columnName={column.name}
              taskItems={filteredTasks}
            />
          </div>
        );
      })} */}

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
