import { useState } from "react";
import { ChevronDown, Plus } from "lucide-react";
import { TaskType } from "../../types/task";
import { getTaskById } from "../../utils/data-utils";
import Card from "./card";
import CustomModal from "./custom-modal";
import EditFormTask from "./edit-form-task";
import { cn } from "../../lib/cn";
import FormTask from "./form-task";

interface ColumnItemProps {
  id: string;
  columnName: string;
  icon: React.ElementType;
  taskItems: TaskType[];
}

const ColumnItem = ({ columnName, taskItems, icon: Icon }: ColumnItemProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isCollapse, setIsCollapse] = useState(false);
  const [formTask, setFormTask] = useState(true);
  const [taskDetails, setTaskDetails] = useState<TaskType | null>(null);
  const [statusTask, setStatusTask] = useState("");

  const handleModalOpen = (id?: string) => {
    setModalOpen(true);

    if (!id) {
      setFormTask(true);
    } else {
      setFormTask(false);
      const task = getTaskById(id);
      setTaskDetails(task);
    }
  };

  return (
    <>
      <CustomModal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {formTask ? (
          <FormTask
            onClose={() => setModalOpen(false)}
            statusTask={statusTask}
          />
        ) : (
          <EditFormTask
            taskData={taskDetails}
            onClose={() => setModalOpen(false)}
          />
        )}
      </CustomModal>

      <div className="border-dashed bg-[#F7F8F7] border-2 px-4 py-3 space-y-4 rounded-xl group">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-2 items-center">
            <Icon className="w-4 h-4" />
            <p>{columnName}</p>
            <p className="text-sm text-slate-500">{taskItems.length}</p>
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
                setStatusTask(columnName);
                handleModalOpen();
              }}
            />
          </div>
        </div>
        {isCollapse
          ? null
          : taskItems.map((task) => (
              <div key={task.id}>
                <Card task={task} icon={Icon} openModal={handleModalOpen} />
              </div>
            ))}
        <div
          className={cn(
            "py-2 opacity-0 bg-white flex justify-center items-center rounded-lg group-hover:opacity-100 ease-out duration-300 transition-opacity cursor-pointer"
          )}
          onClick={() => {
            setStatusTask(columnName);
            handleModalOpen();
          }}
        >
          <Plus className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </>
  );
};

export default ColumnItem;
