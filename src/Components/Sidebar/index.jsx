// @ts-nocheck
"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarMenu } from "@/data";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { useTheme } from "@/app/context/ThemeContext";
import { useLayout } from "@/app/context/LayoutContext";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const { theme } = useTheme();
  const { state: layoutState, dispatch } = useLayout();

  const pathname = usePathname();

  const [isToggleSubMenu, setisToggleSubMenu] = useState(false);
  const [toggleIndex, settoggleIndex] = useState(null);

  const sidebarRef = useRef(null);

  const toggleTab = (index) => {
    if (toggleIndex === index) {
      setisToggleSubMenu(!isToggleSubMenu);
    } else {
      settoggleIndex(index);
      setisToggleSubMenu(true);
    }
  };

  //! Outside click close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !layoutState.isDesktop &&
        layoutState.sidebarOpen
      ) {
        dispatch({ type: "TOGGLE_SIDEBAR" });
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [layoutState, dispatch]);

  const handleMobileClose = () => {
    if (!layoutState.isDesktop) {
      dispatch({ type: "TOGGLE_SIDEBAR" });
    }
  };

  return (
    <aside
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-screen z-50 transition-all duration-500
      border-r border-slate-200/70 dark:border-slate-700/70
      shadow-[0_8px_32px_-12px_rgba(15,23,42,0.25)] dark:shadow-black/20
      overflow-y-auto overflow-x-hidden
      relative
      ${
        theme === "dark"
          ? // Dark Mode Premium Sidebar Background
            "bg-gradient-to-b from-slate-900/98 via-slate-800/98 to-slate-900/98"
          : // Light Mode Premium Sidebar Background
            "bg-gradient-to-b from-white/98 via-slate-50/98 to-white/98"
      }
      ${
        layoutState.sidebarOpen
          ? layoutState.isDesktop
            ? "w-[260px]"
            : "w-[250px]"
          : "w-0"
      }`}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light Mode Effects */}
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-15 ${
            theme === "dark" ? "hidden" : "block"
          }`}
        >
          <div className="absolute top-20 left-4 w-24 h-24 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-4 w-20 h-20 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-lg"></div>
        </div>

        {/* Dark Mode Effects */}
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-25 ${
            theme === "dark" ? "block" : "hidden"
          }`}
        >
          <div className="absolute top-20 left-4 w-24 h-24 bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-full blur-xl"></div>
          <div className="absolute bottom-40 right-4 w-20 h-20 bg-gradient-to-br from-emerald-900/40 to-teal-900/40 rounded-full blur-lg"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div
          className={`absolute inset-0 opacity-[0.02] ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)]"
              : "bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)]"
          }`}
          style={{ backgroundSize: "16px 16px" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        {/* LOGO */}
        <Link href="/" className="flex items-center mb-8 group">
          <div className="relative">
            {theme === "dark" ? (
              <Image
                src="/logo-white.webp"
                width={140}
                height={46}
                alt="Logo"
                className="transition-transform group-hover:scale-105"
              />
            ) : (
              <Image
                src="/logo.webp"
                width={140}
                height={46}
                alt="Logo"
                className="transition-transform group-hover:scale-105"
              />
            )}
            {/* Logo glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
          </div>
        </Link>

        {/* MENU */}
        <nav>
          <ul className="space-y-2">
            {sidebarMenu?.map((menu, index) => {
              const activeMain = pathname === menu.href;

              return (
                <li key={index} className="relative">
                  {/* MENU WITH SUBMENU */}
                  {menu.items?.length > 0 ? (
                    <>
                      <div
                        onClick={() => toggleTab(index)}
                        className={`relative flex items-center justify-between
                        cursor-pointer rounded-2xl px-4 py-3
                        text-[13px] font-semibold
                        transition-all duration-300
                        hover:shadow-lg hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20
                        backdrop-blur-sm
                        ${
                          toggleIndex === index
                            ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 text-slate-900 dark:text-white shadow-lg shadow-blue-500/10"
                            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[16px]">{menu.icon}</span>
                          <span>{menu.title}</span>
                        </div>

                        <FaAngleDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            toggleIndex === index && isToggleSubMenu
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </div>

                      {/* SUBMENU */}
                      <Collapse
                        isOpened={
                          toggleIndex === index ? isToggleSubMenu : false
                        }
                      >
                        <ul className="mt-2 ml-8 space-y-1 border-l-2 border-slate-200/60 dark:border-slate-700/60 pl-4">
                          {menu.items.map((item, i) => {
                            const activeSub = pathname === item.href;

                            return (
                              <li key={i}>
                                <Link
                                  href={item.href}
                                  onClick={handleMobileClose}
                                  className={`block text-[13px] py-2 px-3 rounded-xl
                                  transition-all duration-300
                                  hover:shadow-md hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20
                                  backdrop-blur-sm
                                  ${
                                    activeSub
                                      ? "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/50 dark:to-teal-900/50 text-slate-900 dark:text-white shadow-md shadow-emerald-500/10"
                                      : "text-slate-500 dark:text-slate-400 hover:bg-slate-100/60 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                                  }`}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </Collapse>
                    </>
                  ) : (
                    /* MENU WITHOUT SUBMENU */

                    <Link
                      href={menu.href}
                      onClick={handleMobileClose}
                      className={`group relative flex items-center gap-3
                      rounded-2xl px-4 py-3
                      text-[13px] font-semibold
                      transition-all duration-300
                      hover:shadow-lg hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20
                      backdrop-blur-sm
                      ${
                        activeMain
                          ? "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/50 dark:to-indigo-900/50 text-slate-900 dark:text-white shadow-lg shadow-blue-500/10"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white"
                      }`}
                    >
                      {/* Active indicator */}
                      {activeMain && (
                        <span className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-blue-500 to-indigo-600 rounded-r-full shadow-sm shadow-blue-500/30"></span>
                      )}

                      <span className="text-[16px] transition-transform group-hover:scale-110">
                        {menu.icon}
                      </span>
                      <span className="transition-all group-hover:translate-x-1">
                        {menu.title}
                      </span>
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
