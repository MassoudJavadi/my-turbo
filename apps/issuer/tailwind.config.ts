import type { Config } from "tailwindcss";
import sharedConfig from "@seller-repo/ui/tailwind.config";

const config: Pick<Config, "content" | "presets"> = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx}"],
  presets: [sharedConfig],
};

export default config;
