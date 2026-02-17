"use client";
import { createContext, useContext, useReducer } from "react";
import { layoutReducer } from "../reducer/layoutReducer";

// @ts-ignore
const LayoutContext = createContext();

const initialState = {
  sidebarOpen: true,
};

const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};
const useLayout = () => {
  return useContext(LayoutContext);
};

export { LayoutProvider, useLayout };
