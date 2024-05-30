import React from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const CustomModal = ({ isOpen, onClose, children }: CustomModalProps) => {
  return (
    <div
      onClick={onClose}
      className={cn(
        "fixed inset-0 z-50 flex justify-center items-center transition-colors",
        isOpen ? "visible bg-black/20" : "invisible"
      )}
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={cn(
          "bg-white rounded-xl shadow p-6 transition-all ease-out duration-300 w-96",
          isOpen ? "scale-100 opacity-100" : "scale-105 opacity-0"
        )}
      >
        <div className="flex justify-end">
          <XIcon className="w-4 h-4" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
