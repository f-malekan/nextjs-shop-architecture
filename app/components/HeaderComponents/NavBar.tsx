"use client";
import Link from "next/link";
import NavBarCategory from "./NavBarCategory";
import { useState, useEffect } from "react";
import { CategoryType } from "@/types";
import { IoMenu, IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

interface Props {
  className?: string;
}

const NavBar = ({ className }: Props) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 0);
  }, [pathname]);

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
        className="md:hidden relative z-50 flex items-center justify-center p-2"
      >
        {open ? <IoClose size={30} /> : <IoMenu size={30} />}
      </button>

      <div
        className={`fixed right-0 top-20 w-full bg-white z-40 p-4 h-[calc(100dvh-100px)] shadow-xl md:shadow-none transition-transform duration-300 ease-in-out
           flex flex-col md:relative md:flex-row  md:h-auto gap-8 text-sm  md:bg-gray-2 px-8 py-2 md:rounded-full md:top-0
        ${open ? "" : "hidden md:flex"}
           `}
      >
        <Link href="/">خانه</Link>
        <Link href="/products">فروشگاه</Link>
        <NavBarCategory />

        <Link href="/contact-us" className="text-nowrap">
          تماس با ما
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
