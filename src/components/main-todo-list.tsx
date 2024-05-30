import ColumnItem from "../components/ui/column-item";
import { columns } from "../data/initialData";
import { useTodoStore } from "../lib/zustand-store/tasks-store";
import CommandMain from "./ui/command-main";

const MainTodoList = () => {
  const { tasks } = useTodoStore((state) => state);

  return (
    <div className="md:grid md:grid-cols-3 gap-x-4 md:space-y-0 space-y-2 h-screen">
      <CommandMain />

      {columns.map((column) => {
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
      })}
    </div>
  );
};

export default MainTodoList;
