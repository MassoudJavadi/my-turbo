import { ThemeToggle } from "@seller-repo/ui/theme/ThemeToggle";
export default function Home() {
  return (
    <div className="">
      <header className="p-4 bg-light-primary-500 dark:bg-dark-primary-500 ">
        <h1>Issuer App</h1>
        <ThemeToggle />
      </header>

      <div className="w-40 h-40 bg-light-primary-700" />
    </div>
  );
}
