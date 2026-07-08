"use client";

import { MdKeyboardArrowDown } from "react-icons/md";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { getCategories } from "@/app/actions/categoryActions";
import { CategoryType } from "@/types";

const NavBarCategory = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const pathName = usePathname();
  const searchParams = useSearchParams();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleShowCategories = async () => {
    const nextState = !showCategories;
    setShowCategories(nextState);

    if (!nextState || categories.length > 0) return;

    setIsLoading(true);

    const { data, success } = await getCategories();

    if (success && data) {
      setCategories(data);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowCategories(false);
  }, [pathName, searchParams]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowCategories(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        className="flex cursor-pointer items-center"
        onClick={handleShowCategories}
      >
        <span className="text-nowrap">دسته بندی</span>
        <MdKeyboardArrowDown />
      </button>

      {showCategories && (
        <div className="md:absolute top-10 right-0 z-10 bg-white md:shadow-2xl shadow-black w-max p-3 rounded-2xl">
          {isLoading ? (
            <div className="p-4">در حال بارگذاری...</div>
          ) : (
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
          )}
        </div>
      )}
    </div>
  );
};

export default NavBarCategory;