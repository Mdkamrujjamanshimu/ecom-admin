"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { themeReducer } from "../reducer/themeReducer";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, {
    theme: "light", // light | dark
  });

  // LOAD THEME FROM LOCAL STORAGE
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      dispatch({ type: "SET_THEME", payload: savedTheme });
    } else {
      // detect system theme
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      dispatch({ type: "SET_THEME", payload: systemDark ? "dark" : "light" });
    }
  }, []);

  // APPLY THEME CLASS
  useEffect(() => {
    const root = document.documentElement;

    if (state.theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <ThemeContext.Provider value={{ theme: state.theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };