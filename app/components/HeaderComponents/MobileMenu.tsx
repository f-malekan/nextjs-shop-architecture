"use client";
import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="p-2 text-2xl lg:hidden">
        <HiMenu />
      </button>

      <div
        className={`fixed inset-0 z-100 bg-white transition-transform duration-300 ease-in-out p-6 flex flex-col gap-8 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl text-gray-800">منو فروشگاه</span>
          <button onClick={() => setIsOpen(false)} className="text-3xl p-2">
            <HiX />
          </button>
        </div>

        <div className="sm:hidden">
          <SearchBar />
        </div>

        <nav className="flex flex-col gap-6" onClick={() => setIsOpen(false)}>
           <NavBar isMobile={true} />
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
