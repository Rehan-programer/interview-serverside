"use client"
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [sidebarSize, setSidebarSize] = useState("default");

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        sidebarSize,
        setSidebarSize,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};