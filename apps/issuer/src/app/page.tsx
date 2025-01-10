"use client";
import { useThemeStore } from "@seller-repo/store/themeStore";
import { ThemeToggle } from "@seller-repo/ui/theme/ThemeToggle";
export default function Home() {
  const { theme } = useThemeStore();
  return (
    <div className="">
      <header className="p-4  ">
        <h1>Issuer App</h1>
        <ThemeToggle />
      </header>

      <section className="w-40 h-40 bg-light-primary-700 dark:bg-dark-primary-700 text-center">
        {theme === "dark" ? <p>dark</p> : <p>light</p>}
      </section>
    </div>
  );
}
