import { XIcon } from "lucide-react";
import { cn } from "../../lib/cn";
import { useModalStore } from "@/lib/zustand-store/modal-store";

interface CustomModalProps {
  children: React.ReactNode;
}

const CustomModal = ({ children }: CustomModalProps) => {
  const { isModalOpen, setIsModalOpen } = useModalStore((state) => state);

  return (
    <div
      onClick={() => setIsModalOpen(false)}
      className={cn(
        "fixed inset-0 z-50 flex justify-center items-center transition-colors",
        isModalOpen ? "visible bg-black/20" : "invisible"
      )}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={cn(
          "bg-white rounded-xl shadow p-6 transition-all ease-out duration-300 w-full max-w-3xl h-[1024px] ",
          isModalOpen ? "scale-100 opacity-100" : "scale-105 opacity-0"
        )}
      >
        <div className="flex justify-end">
          <XIcon className="w-4 h-4" onClick={() => setIsModalOpen(false)} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
