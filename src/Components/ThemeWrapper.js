"use client";

import Header from "./Header";
import Sidebar from "./Sidebar";
import { useTheme } from "@/app/context/ThemeContext";
import { useLayout } from "@/app/context/LayoutContext";

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();
  const { state: layoutState } = useLayout();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#0F0F11] text-gray-200"
          : "bg-[#F5F7FA] text-gray-800"
      }`}
    >
      <div className="flex">
        {/* SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ${
            layoutState.sidebarOpen
              ? layoutState.isDesktop
                ? "w-[260px]"
                : "w-[170px]"
              : "w-0"
          }`}
        >
          <Sidebar />
        </div>

        {/* RIGHT CONTENT */}
        <div
          className={`transition-all duration-300 ${
            layoutState.isDesktop
              ? layoutState.sidebarOpen
                ? "ml-[260px] w-[calc(100%-260px)]"
                : "ml-0 w-full"
              : "w-full"
          }`}
        >
          <Header />

          <main className="p-4">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default ThemeWrapper;
