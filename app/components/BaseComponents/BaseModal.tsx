"use client";

import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
}

const BaseModal = ({ isOpen, onClose, children, className }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`${className} fixed inset-0 z-100 flex items-center justify-center w-full ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-[50%] transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all">
        <button
          onClick={onClose}
          className="absolute top-2 left-2 cursor-pointer"
        >
          <IoClose size={28} />
        </button>

        {children}
      </div>
    </div>
  );
};

export default BaseModal;
