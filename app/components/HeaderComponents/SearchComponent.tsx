"use client";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import SearchBar from "./SearchBar";

const SearchComponent = () => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    if (showSearch) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSearch]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setShowSearch((s) => !s)}
        className=""
        aria-label="Toggle search"
      >
        <FaSearch className="" size={18}/>
      </button>
      <SearchBar showSearch={showSearch} setShowSearch={setShowSearch} />
    </div>
  );
};

export default SearchComponent;
