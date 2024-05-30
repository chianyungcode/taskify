
import { useTasksStore } from "@/providers/tasks-store-provider";
import { TaskType } from "@/types/task";
import { CheckCircle2Icon, CircleDashed, TrendingUp } from "lucide-react";

const HeroHeader = () => {
  const { tasks } = useTasksStore((state) => state);
  const filterTasksByStatus = (status: string) => {
    const filteredTasks: TaskType[] = tasks.filter(
      (task) => task.status === status
    );

    return filteredTasks;
  };

  const countTodo = filterTasksByStatus("To do").length;
  const countInProgress = filterTasksByStatus("In progress").length;
  const countCompleted = filterTasksByStatus("Completed").length;

  return (
    <section className="lg:py-16 py-8 px-2 rounded-3xl flex flex-col items-center gap-y-8 bg-[#D8F066] border-2 border-black my-12">
      <h1 className="lg:text-4xl md:text-2xl text-xl lg:px-8 px-7 font-semibold text-center">
        Hey! You get 50% task completed task done this week
      </h1>
      <div className="flex gap-x-4 w-full justify-between">
        <div className="w-full items-center flex flex-col gap-y-1 lg:gap-y-4">
          <div className="flex gap-x-1 lg:gap-x-2 items-center justify-center w-full lg:text-3xl md:text-xl text-sm font-semibold ">
            <CircleDashed className="lg:w-6 lg:h-6 md:lg-5 md:h-5 w-4 h-4" />
            <p>To do</p>
          </div>
          <p className="lg:text-4xl md:text-xl text-sm">{countTodo}</p>
        </div>
        <div className="w-full items-center flex flex-col gap-y-1 lg:gap-y-4">
          <div className="flex gap-x-1 lg:gap-x-2 items-center justify-center w-full lg:text-3xl md:text-xl text-sm font-semibold ">
            <TrendingUp className="lg:w-6 lg:h-6 md:lg-5 md:h-5 w-4 h-4" />
            <p>In progress</p>
          </div>
          <p className="lg:text-4xl md:text-xl text-sm">{countInProgress}</p>
        </div>
        <div className="w-full items-center flex flex-col gap-y-1 lg:gap-y-4">
          <div className="flex gap-x-1 lg:gap-x-2 items-center justify-center w-full lg:text-3xl md:text-xl text-sm font-semibold ">
            <CheckCircle2Icon className="lg:w-6 lg:h-6 md:lg-5 md:h-5 w-4 h-4" />
            <p>Completed</p>
          </div>
          <p className="lg:text-4xl md:text-xl text-sm">{countCompleted}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroHeader;
