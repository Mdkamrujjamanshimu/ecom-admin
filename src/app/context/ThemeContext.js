"use client";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { themeReducer } from "../reducer/themeReducer";

// ? CREATE CONTEXT
const ThemeContext = createContext();

// ? PROVIDER
const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, { darkMode: false });

  // ? LOAD FROM LOCALSTORAGE
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) {
      dispatch({ type: "SET_THEME", payload: saved === "true" });
      document.documentElement.classList.toggle("dark", saved === "true");
    }
  }, []);

  // ? APPLY DARK CLASS
  useEffect(() => {
    document.documentElement.classList.toggle("dark", state.darkMode);
    localStorage.setItem("darkMode", state.darkMode.toString());
  }, [state.darkMode]);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };
