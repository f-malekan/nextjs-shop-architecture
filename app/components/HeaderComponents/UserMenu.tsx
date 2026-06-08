"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { RiDashboardLine, RiUser3Line, RiLogoutBoxRLine } from "react-icons/ri";

type UserMenuProps = {
  name?: string;
  email?: string;
  image?: string;
};

const UserMenu = ({ name, email, image }: UserMenuProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
          flex h-10 w-10 items-center justify-center overflow-hidden rounded-full
          border-2 border-(--color-dark-green)/20 bg-white
          shadow-sm shadow-(--color-dark-green)/10
          transition-all duration-200
          hover:border-(--color-dark-green)/40 hover:shadow-md hover:shadow-(--color-dark-green)/15
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--color-dark-green)/30
          ${open ? "border-(--color-dark-green)/50 ring-2 ring-(--color-green-2)" : ""}
        `}
      >
        {image ? (
          <Image
            src={image}
            alt={name || "User"}
            width={40}
            height={40}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-(--color-green-1) text-sm font-bold text-(--color-dark-green)">
            {name?.charAt(0).toUpperCase() || "U"}
          </div>
        )}
      </button>

      {open && (
        <div
          className="
            absolute left-0 z-50 mt-3 w-64 overflow-hidden rounded-2xl
            border border-(--color-green-2) bg-white
            shadow-xl shadow-(--color-dark-green)/10
            transition-all duration-200
          "
        >
          <div className="border-b border-(--color-green-2) bg-(--color-green-1)/60 px-4 py-3">
            <p className="truncate text-sm font-bold text-(--color-text-green)">
              {name}
            </p>
            <p className="truncate text-xs text-(--color-text-pink)">{email}</p>
          </div>

          <div className="py-1.5">
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-3 px-4 py-2.5 text-sm font-medium
                text-(--color-text-green) transition-colors duration-150
                hover:bg-(--color-green-2)/50
              "
            >
              <RiDashboardLine
                size={18}
                className="text-(--color-dark-green)"
              />
              داشبورد
            </Link>

            <Link
              href="/dashboard/profile"
              onClick={() => setOpen(false)}
              className="
                flex items-center gap-3 px-4 py-2.5 text-sm font-medium
                text-(--color-text-green) transition-colors duration-150
                hover:bg-(--color-green-2)/50
              "
            >
              <RiUser3Line size={18} className="text-(--color-dark-green)" />
              پروفایل کاربری
            </Link>
          </div>

          <div className="border-t border-(--color-green-2) bg-(--color-pink-1)/30">
            <button
              type="button"
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="
                flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium
                text-(--color-text-pink) transition-colors duration-150
                hover:bg-(--color-pink-1)
              "
            >
              <RiLogoutBoxRLine size={18} />
              خروج از حساب
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
