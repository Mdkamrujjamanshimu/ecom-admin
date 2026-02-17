"use client";
import Header from "./Header";
import { useTheme } from "@/app/context/ThemeContext";
import Sidebar from "./Sidebar";
import { useLayout } from "@/app/context/LayoutContext";

const ThemeWrapper = ({ children }) => {
  const { state } = useTheme();
  const { state: layoutState } = useLayout();
  return (
    <div
      className={`transition-colors duration-300 min-h-screen ${state.darkMode ? "bg-[#111113] text-gray-200" : "bg-[#F5F7FA] text-gray-800"}`}
    >
      <div className="main flex">
        {/* ------------SIDEBAR START---------- */}

        <div
          className={`sidebarWrapper h-screen transition-all duration-300 ${
            layoutState.sidebarOpen ? "w-[18%]" : "w-0"
          }`}
        >
          <Sidebar />
        </div>

        {/* ------------SIDEBAR END---------- */}

        {/* ------------RIGHT CONTENT START---------- */}

        <div
          className={`rightContent transition-all duration-300 dark:bg-[#111111] ${
            layoutState.sidebarOpen ? "w-[82%]" : "w-full"
          }`}
        >
          <Header />
          <div className="p-3">{children}</div>
        </div>

        {/* ------------RIGHT CONTENT END---------- */}
      </div>
    </div>
  );
};

export default ThemeWrapper;

// state.darkMode ? "bg-[#28292C] text-white" : "bg-white text-black"
