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
      className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300
      bg-white dark:bg-[#0f0f11]
      border-r border-gray-200 dark:border-gray-800
      shadow-sm
      overflow-y-auto overflow-x-hidden
      ${
        layoutState.sidebarOpen
          ? layoutState.isDesktop
            ? "w-[260px]"
            : "w-[170px]"
          : "w-0"
      }`}
    >
      <div className="p-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center mb-6">
          {theme === "dark" ? (
            <Image src="/logo-white.webp" width={130} height={43} alt="Logo" />
          ) : (
            <Image src="/logo.webp" width={130} height={43} alt="Logo" />
          )}
        </Link>

        {/* MENU */}
        <nav>
          <ul className="space-y-1">
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
                        cursor-pointer rounded-lg px-3 py-2
                        text-[13px] font-semibold
                        transition-all duration-200
                        ${
                          toggleIndex === index
                            ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
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
                        <ul className="mt-1 ml-6 space-y-1 border-l border-gray-200 dark:border-gray-700 pl-3">
                          {menu.items.map((item, i) => {
                            const activeSub = pathname === item.href;

                            return (
                              <li key={i}>
                                <Link
                                  href={item.href}
                                  onClick={handleMobileClose}
                                  className={`block text-[13px] py-1.5 px-2 rounded-md
                                  transition-colors
                                  ${
                                    activeSub
                                      ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
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
                      className={`relative flex items-center gap-3
                      rounded-lg px-3 py-2
                      text-[13px] font-semibold
                      transition-all duration-200
                      ${
                        activeMain
                          ? "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                      }`}
                    >
                      {/* Active indicator */}
                      {activeMain && (
                        <span className="absolute left-0 top-0 h-full w-[3px] bg-blue-500 rounded-r"></span>
                      )}

                      <span className="text-[16px]">{menu.icon}</span>
                      <span>{menu.title}</span>
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
