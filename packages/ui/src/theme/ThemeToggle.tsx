"use client";
import { useThemeStore } from "@seller-repo/store/themeStore";
import { useEffect } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    console.log("THEME", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button onClick={toggleTheme} className="p-8 bg-gray-500 dark:bg-gray-800 rounded text-red-500">
      Toggle Theme
    </button>
  );
};
