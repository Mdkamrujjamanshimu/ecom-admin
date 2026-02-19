import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import SearchBox from "../SearchBox";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { useTheme } from "@/app/context/ThemeContext";
import { useLayout } from "@/app/context/LayoutContext";

const Header = () => {
  const { state, dispatch } = useTheme();
  const { dispatch: layoutDispatch } = useLayout();
  const { state: layoutState } = useLayout();

  const toggleTheme = () => dispatch({ type: "TOGGLE_THEME" });

  // ! STATE TO STORE HEADER HEIGHT
  const [headerHeight, setHeaderHeight] = useState(0);

  // ! REF TO GET HEADER ELEMENT
  const headerRef = useRef(null);

  // ! SET HEADER HEIGHT
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

  //   <header
  //   ref={headerRef}
  //   className={`flex fixed top-0 right-0 z-1000 px-4 py-3 justify-between shadow-md bg-[#ffffff] dark:bg-[#111113] ${layoutState.sidebarOpen ? "w-[82%]" : "w-full"} transition-all duration-300`}
  // >

  return (
    <>
      <header
        ref={headerRef}
        className={`flex fixed top-0 z-[1000] px-2 py-3 justify-between shadow-md bg-[#ffffff] dark:bg-[#111113] transition-all duration-300 ${
          layoutState.sidebarOpen
            ? layoutState.isDesktop
              ? "left-[18%] w-[82%]"
              : "left-[170px] w-[calc(100%-170px)]"
            : "left-0 w-full"
        }`}
      >
        <div className="flex items-center gap-2">
          {/* toggle icon */}
          <Button
            className="min-w-10! w-10! h-10! rounded-full! text-gray-800! dark:text-gray-200! hover:bg-gray-200! dark:hover:bg-gray-900!"
            onClick={() => layoutDispatch({ type: "TOGGLE_SIDEBAR" })}
          >
            <BiMenuAltLeft size={25} />
          </Button>

          <div className="max-[550px]:hidden">
            <SearchBox placeholder="Search here..." width="300px" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            onClick={toggleTheme}
            className="min-w-10! w-10! h-10! rounded-full! text-gray-800! dark:text-gray-200! hover:bg-gray-200! dark:hover:bg-gray-900!"
          >
            {state.darkMode ? (
              <MdLightMode size={25} />
            ) : (
              <MdDarkMode size={25} />
            )}
          </Button>

          <Button className="min-w-10! w-10! h-10! rounded-full! text-gray-800! dark:text-gray-200! hover:bg-gray-200! dark:hover:bg-gray-900!">
            <FaRegBell size={22} />
          </Button>

          <div className="flex items-center">
            <Button className="min-w-10! w-10! h-10! rounded-full! flex! items-center! justify-center! bg-gray-800! dark:bg-blue-600! text-white!">
              K
            </Button>
          </div>
        </div>
      </header>

      {/* TO HANDLE HEADER HEIGHT */}
      <div style={{ height: headerHeight }}></div>
    </>
  );
};

export default Header;
