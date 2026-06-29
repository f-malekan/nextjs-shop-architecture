"use client";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import { CategoryType } from "@/types";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const NavBarCategory = ({ categories }: { categories: CategoryType[] }) => {
  const [showCategories, setShowCategories] = useState(false);

  const pathName = usePathname();
  const searchParams = useSearchParams();

  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    setShowCategories(false);
  }, [pathName, searchParams, setShowCategories]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex cursor-pointer items-center"
        onClick={() => setShowCategories(!showCategories)}
      >
        دسته بندی
        <MdKeyboardArrowDown />
      </button>

      {showCategories && (
        <div className="lg:absolute top-10 right-0 z-10 bg-white lg:shadow-2xl shadow-black w-max p-3 rounded-2xl">
          <ul className="grid grid-cols-2 gap-2">
            {categories.map((item) => (
              <li
                key={item.id}
                className="hover:bg-gray-4 rounded p-2 flex gap-2 items-center"
              >
                <div className="rounded-full bg-primary-shade-1 w-2 h-2" />
                <Link href={`/products?category=${item.slug}`}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBarCategory;
