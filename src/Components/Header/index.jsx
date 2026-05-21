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
        className={`flex items-center justify-between z-1000
        px-6 py-4
        border-b border-slate-200/70 dark:border-slate-700/70
        shadow-[0_8px_32px_-12px_rgba(15,23,42,0.25)] dark:shadow-black/20
        backdrop-blur-xl
        transition-all duration-500 relative
         overflow-hidden
        ${
          theme === "dark"
            ? // Dark Mode Premium Header Background
              "bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95"
            : // Light Mode Premium Header Background
              "bg-gradient-to-r from-white/95 via-slate-50/95 to-white/95"
        }
        ${
          layoutState.sidebarOpen
            ? layoutState.isDesktop
              ? "w-[calc(100%)]"
              : "w-[calc(100%)]"
            : "left-0 w-full"
        }`}
      >
        {/* "w-[calc(100% - 260px)]" */}
        {/* "w-[calc(100% -250px)]" */}
        {/* left-[261px]  left-[251px]*/}
        {/* Premium Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Light Mode Effects */}
          <div
            className={`absolute top-0 left-0 w-full h-full opacity-20 ${
              theme === "dark" ? "hidden" : "block"
            }`}
          >
            <div className="absolute top-2 left-20 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-2xl"></div>
            <div className="absolute top-4 right-32 w-24 h-24 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-xl"></div>
          </div>

          {/* Dark Mode Effects */}
          <div
            className={`absolute top-0 left-0 w-full h-full opacity-30 ${
              theme === "dark" ? "block" : "hidden"
            }`}
          >
            <div className="absolute top-2 left-20 w-32 h-32 bg-gradient-to-br from-blue-900/40 to-purple-900/40 rounded-full blur-2xl"></div>
            <div className="absolute top-4 right-32 w-24 h-24 bg-gradient-to-br from-emerald-900/30 to-teal-900/30 rounded-full blur-xl"></div>
          </div>

          {/* Subtle Grid Pattern */}
          <div
            className={`absolute inset-0 opacity-[0.02] ${
              theme === "dark"
                ? "bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)]"
                : "bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)]"
            }`}
            style={{ backgroundSize: "20px 20px" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex items-center justify-between w-full">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-4">
            {/* Sidebar Toggle */}
            <Button
              className="min-w-11! w-11! h-11! rounded-2xl!
              text-slate-700! dark:text-slate-300! bg-slate-100/50!
              hover:bg-slate-100/80!  dark:bg-slate-800/50! dark:hover:bg-slate-800/80!
              hover:shadow-lg! hover:shadow-slate-200/50! dark:hover:shadow-slate-900/50!
              transition-all duration-300! hover:scale-105!
              backdrop-blur-sm!"
              onClick={() => layoutDispatch({ type: "TOGGLE_SIDEBAR" })}
            >
              <BiMenuAltLeft size={24} />
            </Button>

            {/* Search */}
            <div className="max-[640px]:hidden">
              <SearchBox
                placeholder="Search products, orders..."
                width="320px"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              className="min-w-11! w-11! h-11! rounded-2xl!
              text-slate-700! dark:text-slate-300! bg-slate-100/50!
              hover:bg-slate-100/80! dark:bg-slate-800/50! dark:hover:bg-slate-800/80!
              hover:shadow-lg! hover:shadow-slate-200/50! dark:hover:shadow-slate-900/50!
              transition-all duration-300! hover:scale-105!
              backdrop-blur-sm!"
            >
              {theme === "dark" ? (
                <MdLightMode size={22} />
              ) : (
                <MdDarkMode size={22} />
              )}
            </Button>

            {/* Notification */}
            <Button
              className="relative min-w-11! w-11! h-11! rounded-2xl!
              text-slate-700! dark:text-slate-300! bg-slate-100/50!
              hover:bg-slate-100/80! dark:bg-slate-800/50! dark:hover:bg-slate-800/80!
              hover:shadow-lg! hover:shadow-slate-200/50! dark:hover:shadow-slate-900/50!
              transition-all duration-300! hover:scale-105!
              backdrop-blur-sm!
              max-[640px]:hidden!"
            >
              <FaRegBell size={20} />

              {/* Notification badge */}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full border-2 border-white dark:border-slate-900 shadow-sm animate-pulse"></span>
            </Button>

            {/* Profile */}
            <div className="flex items-center ml-1">
              <Button
                className="min-w-10! w-10! h-10! rounded-2xl!
                flex! items-center! justify-center!
                bg-gradient-to-r from-blue-500 to-indigo-600!
                text-white! font-semibold!
                hover:shadow-lg! hover:shadow-blue-500/30!
                transition-all duration-300! hover:scale-105!"
              >
                K
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Header spacer (reduced to half so content sits closer below the fixed header) */}
      <div style={{ height: headerHeight * 0.2 }}></div>
    </>
  );
};

export default Header;
