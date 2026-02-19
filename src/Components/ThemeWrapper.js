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
      className={`transition-colors duration-300 min-h-screen ${
        state.darkMode
          ? "bg-[#111113] text-gray-200"
          : "bg-[#F5F7FA] text-gray-800"
      }`}
    >
      <div className="main flex">
        {/* ------------SIDEBAR START---------- */}
        <div
          className={`sidebarWrapper fixed top-0 left-0 h-screen z-1000 transition-all duration-300 ${
            layoutState.sidebarOpen
              ? layoutState.isDesktop
                ? "w-[20%]" // Desktop: % width
                : "w-[170px]" // Mobile: fixed px width
              : "w-0"
          }`}
        >
          <Sidebar />
        </div>
        {/* ------------SIDEBAR END---------- */}

        {/* ------------RIGHT CONTENT START---------- */}
        <div
          className={`rightContent transition-all duration-300 dark:bg-[#111111] ${
            layoutState.isDesktop
              ? layoutState.sidebarOpen
                ? "w-[80%] ml-[20%]" // Desktop open
                : "w-full ml-0" // Desktop closed
              : "w-full ml-0" // Mobile সব সময় full width
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
