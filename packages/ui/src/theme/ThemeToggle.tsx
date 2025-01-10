"use client";
import { useThemeStore } from "@seller-repo/store/themeStore";

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeStore();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-8 w-100 h-100 bg-light-primary-500 dark:bg-dark-primary-500 rounded-4"
      style={{ border: "1px solid black" }}
    >
      Toggle Theme
    </button>
  );
};
