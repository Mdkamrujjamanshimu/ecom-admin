"use client";
import { createContext, useContext, useReducer, useEffect } from "react";
import { layoutReducer } from "../reducer/layoutReducer";

const LayoutContext = createContext();

const initialState = {
  sidebarOpen: true,
  isDesktop: true, // desktop/mobile check
};

const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(layoutReducer, initialState);

  // screen size check
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 990) {
        dispatch({ type: "SET_DESKTOP", payload: true });
      } else {
        dispatch({ type: "SET_DESKTOP", payload: false });
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <LayoutContext.Provider value={{ state, dispatch }}>
      {children}
    </LayoutContext.Provider>
  );
};

const useLayout = () => useContext(LayoutContext);

export { LayoutProvider, useLayout };
