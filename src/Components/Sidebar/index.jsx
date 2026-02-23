// @ts-nocheck
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarMenu } from "@/data";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { Collapse } from "react-collapse";
import { useTheme } from "@/app/context/ThemeContext";
import { useLayout } from "@/app/context/LayoutContext";

const Sidebar = () => {
  const { state } = useTheme();
  const { state: layoutState, dispatch } = useLayout();

  //! SUBMENU TOGGLE STATE
  const [isToggleSubMenu, setisToggleSubMenu] = useState(false);
  const [toggleIndex, settoggleIndex] = useState(null);

  const toggleTab = (index) => {
    settoggleIndex(index);
    setisToggleSubMenu(!isToggleSubMenu);
  };

  //! Sidebar ref for outside click
  const sidebarRef = useRef(null);

  //! Outside click → close sidebar (mobile only)
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

  //! Close sidebar after clicking menu (mobile only)
  const handleMobileClose = () => {
    if (!layoutState.isDesktop) {
      dispatch({ type: "TOGGLE_SIDEBAR" });
    }
  };

  return (
    <aside
      ref={sidebarRef}
      className={`h-screen max-h-screen overflow-y-scroll overflow-x-hidden border-r border-[rgba(0,0,0,0.1)] fixed top-0 left-0 bg-[#ffffff] dark:bg-[#111113] transition-all duration-300 ${
        layoutState.sidebarOpen
          ? layoutState.isDesktop
            ? "w-[20%]"
            : "w-[170px]"
          : "w-0"
      }`}
    >
      <div className="p-3">
        <Link href="/">
          {state.darkMode ? (
            <Image src="/logo-white.webp" width={130} height={43} alt="Logo" />
          ) : (
            <Image src="/logo.webp" width={130} height={43} alt="Logo" />
          )}
        </Link>

        <div className="sidebarMenu mt-4">
          {sidebarMenu?.length !== 0 && (
            <ul className="w-full">
              {sidebarMenu.map((menu, index) => {
                return (
                  <li className="w-full relative group" key={index}>
                    <div onClick={() => toggleTab(index)}>
                      {menu.items?.length > 0 ? (
                        <Button
                          variant="text"
                          className={`w-full capitalize! text-left justify-start! group-hover:bg-gray-200! dark:group-hover:bg-gray-900! text-gray-700! gap-2 font-semibold! text-[13px]! py-2! dark:text-gray-200! ${
                            toggleIndex === index && isToggleSubMenu
                              ? "bg-gray-200! dark:bg-gray-900!"
                              : ""
                          }`}
                        >
                          {menu?.icon} {menu?.title}
                        </Button>
                      ) : (
                        <Link href={menu.href} onClick={handleMobileClose}>
                          <Button
                            variant="text"
                            className="w-full capitalize! text-left justify-start! group-hover:bg-gray-200! dark:group-hover:bg-gray-900! text-gray-700! gap-2 font-semibold! text-[13px]! py-2! dark:text-gray-200!"
                          >
                            {menu?.icon} {menu?.title}
                          </Button>
                        </Link>
                      )}

                      {/* Toggle icon */}
                      {menu?.items?.length > 0 && (
                        <Button className="absolute! min-w-7.5! rounded-full! w-7.5! h-7.5! z-50 top-1.25! right-2.5! flex! items-center! justify-center! cursor-pointer text-gray-700! dark:text-gray-200!">
                          <FaAngleDown
                            size={15}
                            className={`${
                              toggleIndex === index && isToggleSubMenu
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </Button>
                      )}
                    </div>

                    {/* Submenu */}
                    {menu?.items?.length > 0 && (
                      <Collapse
                        isOpened={
                          toggleIndex === index ? isToggleSubMenu : false
                        }
                      >
                        <div className="submenu w-full pl-10 py-1 flex flex-col">
                          {menu?.items?.map((item, index_) => {
                            return (
                              <Link
                                className="block w-full"
                                key={index_}
                                href={item.href}
                                onClick={handleMobileClose}
                              >
                                <Button className="w-full text-left! justify-start! capitalize! text-[13px]! hover:bg-gray-200! text-gray-700! dark:text-gray-200! dark:hover:bg-gray-900! py-2!">
                                  {item.title}
                                </Button>
                              </Link>
                            );
                          })}
                        </div>
                      </Collapse>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
