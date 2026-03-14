"use client";

import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import SearchBox from "../SearchBox";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { useTheme } from "@/app/context/ThemeContext";
import { useLayout } from "@/app/context/LayoutContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { dispatch: layoutDispatch, state: layoutState } = useLayout();

  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  //! Calculate header height
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`flex items-center justify-between fixed top-0 z-[1000]
        px-4 py-3
        border-b border-gray-200 dark:border-gray-800
        shadow-sm
        backdrop-blur-md
        bg-white/90 dark:bg-[#0f0f11]/90
        transition-all duration-300
        ${
          layoutState.sidebarOpen
            ? layoutState.isDesktop
              ? "left-[260px] w-[calc(100%-260px)]"
              : "left-[170px] w-[calc(100%-170px)]"
            : "left-0 w-full"
        }`}
      >
        {/* LEFT SECTION */}
        <div className="flex items-center gap-3">
          {/* Sidebar Toggle */}
          <Button
            className="min-w-10! w-10! h-10! rounded-full!
            text-gray-700! dark:text-gray-300!
            hover:bg-gray-100! dark:hover:bg-gray-900!
            transition-all!"
            onClick={() => layoutDispatch({ type: "TOGGLE_SIDEBAR" })}
          >
            <BiMenuAltLeft size={26} />
          </Button>

          {/* Search */}
          <div className="max-[640px]:hidden">
            <SearchBox placeholder="Search products, orders..." width="300px" />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            onClick={toggleTheme}
            className="min-w-10! w-10! h-10! rounded-full!
            text-gray-700! dark:text-gray-300!
            hover:bg-gray-100! dark:hover:bg-gray-900!
            transition-all!"
          >
            {theme === "dark" ? (
              <MdLightMode size={22} />
            ) : (
              <MdDarkMode size={22} />
            )}
          </Button>

          {/* Notification */}
          <Button
            className="relative min-w-10! w-10! h-10! rounded-full!
            text-gray-700! dark:text-gray-300!
            hover:bg-gray-100! dark:hover:bg-gray-900!
            transition-all!
            max-[640px]:hidden!"
          >
            <FaRegBell size={20} />

            {/* Notification badge */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>

          {/* Profile */}
          <div className="flex items-center ml-1">
            <Button
              className="min-w-9! w-9! h-9! rounded-full!
              flex! items-center! justify-center!
              bg-gradient-to-r from-blue-500 to-indigo-600!
              text-white! font-semibold!"
            >
              K
            </Button>
          </div>
        </div>
      </header>

      {/* Header spacer */}
      <div style={{ height: headerHeight }}></div>
    </>
  );
};

export default Header;
