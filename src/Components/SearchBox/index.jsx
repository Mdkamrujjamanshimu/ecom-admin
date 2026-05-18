import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = ({ placeholder, width = "100%", value, onChange }) => {
  return (
    <div className="relative" style={{ width }}>
      <IoSearch
        size={18}
        className="absolute top-4 left-4 text-amber-600 dark:text-amber-300 transition-colors"
      />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-14 pr-4 pl-12 rounded-[28px] border border-slate-200/60 dark:border-white/20 text-sm placeholder-slate-400 dark:placeholder-slate-500 shadow-sm dark:shadow-glow transition focus:border-amber-500 dark:focus:border-amber-300 focus:ring-2 focus:ring-amber-500/20 dark:focus:ring-amber-300/20 focus:outline-none"
      />
    </div>
  );
};

export default SearchBox;
