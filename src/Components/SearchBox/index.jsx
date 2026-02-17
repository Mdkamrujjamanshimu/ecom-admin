import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = (props) => {
  return (
    <div className={`searchBox relative`} style={{ width: props.width }}>
      <IoSearch size={18} className="absolute top-3 left-2.5 text-gray-500" />
      <input
        type="text"
        placeholder={props.placeholder}
        className="w-full h-10 outline-none border border-[rgba(0,0,0,0.2)] dark:border-[rgba(255,255,255,0.2)] rounded-md px-3 pl-8 text-[14px] focus:border-[rgba(0,0,0,0.4)] dark:focus:border-[rgba(255,255,255,0.4)] dark:bg-[#151515] dark:text-gray-200 text-gray-800 "
      />
    </div>
  );
};

export default SearchBox;
