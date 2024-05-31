import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { getTaskById } from "../../utils/data-utils-2";
import CustomModal from "./custom-modal";
import { cn } from "../../lib/cn";
import { Category as CategoryType, Task } from "@/types";
import CardV2 from "./card-v2";
import EditFormTaskV2 from "./edit-form-task-v2";
import FormTaskV2 from "./form-task-v2";

interface CategoryProps {
  category: CategoryType;
  tasks: Task[];
}

const Category = ({ category, tasks }: CategoryProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [formTask, setFormTask] = useState(true);
  const [taskDetails, setTaskDetails] = useState<Task | null>(null);
  const [statusTask, setStatusTask] = useState("");

  const handleModalOpen = (id?: string) => {
    setModalOpen(true);
    if (id) {
      setFormTask(false);
      setTaskDetails(getTaskById(id));
    } else {
      setFormTask(true);
    }
  };

  const renderModalContent = () => {
    if (formTask) {
      return (
        <FormTaskV2
          closeModal={() => setModalOpen(false)}
          statusTask={statusTask}
        />
      );
    }
    return (
      <EditFormTaskV2
        taskData={taskDetails}
        onClose={() => setModalOpen(false)}
      />
    );
  };

  const renderTaskItems = () => {
    if (isCollapse) return null;
    return tasks.map((task) => (
      <div key={task.id}>
        <CardV2 task={task} icon={category.icon} openModal={handleModalOpen} />
      </div>
    ));
  };

  return (
    <>
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {renderModalContent()}
      </CustomModal>

      <div className="border-dashed bg-[#F7F8F7] border-2 px-4 py-3 space-y-4 rounded-xl group">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <category.icon className="w-4 h-4" />
            <p>{category.name}</p>
            <p className="text-sm text-slate-500">{tasks.length}</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <ChevronDown
              className={cn(
                "w-4 h-4 transition-transform ease-out duration-300",
                isCollapse ? "rotate-180" : "rotate-0"
              )}
              onClick={() => setIsCollapse(!isCollapse)}
            />
            <Plus
              className="w-4 h-4"
              onClick={() => {
                setStatusTask(category.value);
                handleModalOpen();
              }}
            />
          </div>
        </div>
        {renderTaskItems()}
        <div
          className={cn(
            "py-2 opacity-0 bg-white flex justify-center items-center rounded-lg group-hover:opacity-100 ease-out duration-300 transition-opacity cursor-pointer"
          )}
          onClick={() => {
            setStatusTask(category.value);
            handleModalOpen();
          }}
        >
          <Plus className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </>
  );
};

export default Category;
