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
      className={`min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? // Dark Mode - Super Premium Expensive Background
            "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
          : // Light Mode - Super Premium Expensive Background
            "bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
      }`}
    >
      {/* Premium Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Light Mode Effects */}
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-30 ${
            theme === "dark" ? "hidden" : "block"
          }`}
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-emerald-200/15 to-teal-200/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-200/10 to-cyan-200/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Dark Mode Effects */}
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-40 ${
            theme === "dark" ? "block" : "hidden"
          }`}
        >
          <div className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-br from-emerald-900/15 to-teal-900/15 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-indigo-900/10 to-cyan-900/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div
          className={`absolute inset-0 opacity-[0.015] ${
            theme === "dark"
              ? "bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)]"
              : "bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.15)_1px,transparent_0)]"
          }`}
          style={{ backgroundSize: "32px 32px" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex">
          {/* SIDEBAR */}
          <div
            className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ${
              layoutState.sidebarOpen
                ? layoutState.isDesktop
                  ? "w-[260px]"
                  : "w-[250px]"
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

            <main className="">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeWrapper;
