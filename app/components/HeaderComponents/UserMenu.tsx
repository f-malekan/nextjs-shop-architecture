"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
import { RiDashboardLine, RiUser3Line, RiLogoutBoxRLine } from "react-icons/ri";
import { useAuthModalStore } from "@/store/useAuthModalStore";

type UserMenuProps = {
  name?: string;
};

const UserMenu = ({ name }: UserMenuProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const { setView, openModal } = useAuthModalStore();

  const handleLogout = () => {
    setView("logout");
    openModal();
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`
          h-10 w-10 rounded-full flex items-center justify-center
          transition-all duration-200 cursor-pointer
          hover:bg-gray-4
        
        `}
      >
        <FaUser size={20} />
      </button>

      {open && (
        <div
          className="
            absolute left-0 z-50 mt-3 w-64 overflow-hidden rounded-2xl
             bg-white
            transition-all duration-200 shadow-2xl shadow-black
          "
        >
          <div className="border-b border-gray-4 px-4 py-3">
            <p className="truncate text-sm font-bold text-gray-10">{name}</p>
          </div>

          <div className="py-1.5">
            <Link
              href="/dashboard/profile"
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-3 px-4 py-2.5 text-sm font-medium
                text-gray-10 transition-colors duration-150
                hover:bg-gray-2
              "
            >
              <RiDashboardLine size={18} className="text-gray-10" />
             حساب کاربری
            </Link>

            <Link
              href="/dashboard/orders"
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-3 px-4 py-2.5 text-sm font-medium
                text-gray-10 transition-colors duration-150
                hover:bg-gray-2
              "
            >
              <RiUser3Line size={18} />
             سفارشات
            </Link>
          </div>

          <div className="border-t border-gray-4">
            <button
              type="button"
              onClick={handleLogout}
              className="
                flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium
                text-error transition-colors duration-150
                hover:bg-gray-2
              "
            >
              <RiLogoutBoxRLine size={18} color="red"/>
              خروج از حساب
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
