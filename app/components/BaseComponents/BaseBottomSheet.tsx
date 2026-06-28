import React from "react";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

const BaseBottomSheet = ({ isOpen, onClose, children, className }: Props) => {
  return (
    <div
      className={`${className} fixed inset-0 z-51 md:hidden transition-opacity duration-300 
 ${isOpen ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl overflow-y-scroll p-6 transition-transform duration-500 transform max-h-[80vh] ${isOpen ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="mb-6">
          <button onClick={onClose} className="text-2xl text-gray-400">
            <IoCloseOutline />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};

export default BaseBottomSheet;
