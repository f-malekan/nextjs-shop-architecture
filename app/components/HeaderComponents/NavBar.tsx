"use client";
import Link from "next/link";
import NavBarCategory from "./NavBarCategory";
import { useState, useEffect } from "react";
import { CategoryType } from "@/types";
import { IoMenu, IoClose } from "react-icons/io5";

interface Props {
  categories: CategoryType[];
  className?: string
}

const NavBar = ({ categories, className }: Props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={className}>
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen((prev) => !prev)}
        className="lg:hidden relative z-50 flex items-center justify-center p-2"
      >
        {open ? <IoClose size={30} /> : <IoMenu size={30} />}
      </button>

      <div
        className={`fixed right-0 top-20 w-full bg-white z-40 p-4 h-[calc(100dvh-100px)] shadow-xl lg:shadow-none transition-transform duration-300 ease-in-out
           flex flex-col lg:relative lg:flex-row  lg:h-auto gap-8 text-sm  lg:bg-gray-2 px-8 py-2 lg:rounded-full lg:top-0
        ${open ? "" : "hidden lg:flex"}
           `}
      >
        <Link href="/">خانه</Link>
        <Link href="/products">فروشگاه</Link>
        <NavBarCategory categories={categories} />

        <Link href="/contact-us">تماس با ما</Link>
      </div>
    </nav>
  );
};

export default NavBar;
