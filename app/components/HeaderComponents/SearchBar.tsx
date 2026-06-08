"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { FaSearch } from "react-icons/fa";
import BaseInput from "../BaseComponents/BaseInput";

const SearchBar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) params.set("search", value);
    else params.delete("search");

    router.push(`/products?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex items-center justify-end">
      <div
        className={[
          "relative overflow-hidden transition-all duration-300 ease-out",
          showSearch ? "w-64 opacity-100" : "w-0 opacity-0",
        ].join(" ")}
      >
        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-emerald-600/70">
          <FaSearch className="text-sm" />
        </span>

        <BaseInput
          type="text"
          placeholder="جستجو کنید.."
          onChange={(event) => handleSearch(event.target.value)}
        />
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={() => setShowSearch((s) => !s)}
        className="
          ml-2 inline-flex h-10 w-10 items-center justify-center rounded-xl
          border border-emerald-200 bg-white/70 text-emerald-700 shadow-sm
          hover:bg-emerald-50 hover:border-emerald-300
          active:scale-95 transition
          focus:outline-none focus:ring-4 focus:ring-emerald-200/60 cursor-pointer
        "
        aria-label="Toggle search"
      >
        <FaSearch className="text-lg" />
      </button>
    </div>
  );
};

export default SearchBar;
