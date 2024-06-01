import { useState } from "react";

import { ChevronDown, Plus } from "lucide-react";

// import { getTaskById } from "../../utils/data-utils-2";
import { cn } from "../../lib/cn";
import { initialStatusTask } from "@/data/initData";

import CardV2 from "./card-v2";

import { Category as CategoryType, Status, Task } from "@/types";
import { useModalStore } from "@/lib/zustand-store/modal-store";
import { useStatusTaskStore } from "@/lib/zustand-store/status-task";
import FormTaskV2 from "./form-task-v2";
import CustomModal from "./custom-modal";
import EditFormTaskV2 from "./edit-form-task-v2";

interface CategoryProps {
  category: CategoryType;
  tasks: Task[];
}

const Category = ({ category, tasks }: CategoryProps) => {
  const { setIsModalOpen } = useModalStore((state) => state);
  const { setStatusTask } = useStatusTaskStore((state) => state);

  const [isCollapse, setIsCollapse] = useState(false);

  // Edit Form
  const [taskToEdit, setTaskToEdit] = useState<Task>();
  const [editFormOpen, setEditFormOpen] = useState(false);

  const openModalCategory = () => {
    updateStatusTask();
    setIsModalOpen(true);
  };

  const openEditForm = (task: Task) => {
    updateStatusTask(task.status);
    setTaskToEdit(task);
    setEditFormOpen(true);
  };

  const updateStatusTask = (status?: Status) => {
    if (status) {
      setStatusTask(status);
    }

    const statusByCategory = initialStatusTask.find(
      (initialStatus) => category.value === initialStatus.value
    );

    if (!statusByCategory) {
      console.error("statusByCategory is undefined");
      return;
    }

    setStatusTask(statusByCategory);
  };

  return (
    <>
      {/* ! TODO PERLU DIREFACTOR  */}
      <CustomModal>
        <FormTaskV2 />
      </CustomModal>

      {taskToEdit && (
        <EditFormTaskV2
          task={taskToEdit}
          isOpen={editFormOpen}
          onClose={() => setEditFormOpen(false)}
        />
      )}

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
            <Plus className="w-4 h-4" onClick={openModalCategory} />
          </div>
        </div>
        {!isCollapse &&
          tasks.map((task) => (
            <div key={task.id}>
              <CardV2 task={task} openEditForm={openEditForm} />
            </div>
          ))}
        <div
          className={cn(
            "py-2 opacity-0 bg-white flex justify-center items-center rounded-lg group-hover:opacity-100 ease-out duration-300 transition-opacity cursor-pointer"
          )}
          onClick={openModalCategory}
        >
          <Plus className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </>
  );
};

export default Category;
