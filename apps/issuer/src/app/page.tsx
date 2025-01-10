import { ThemeToggle } from "@seller-repo/ui/theme/ThemeToggle";
export default function Home() {
  return (
    <div className="">
      <header className="p-4 bg-light-primary-500 dark:bg-dark-primary-500 ">
        <h1>Issuer App</h1>
        <ThemeToggle />
      </header>
    </div>
  );
}
