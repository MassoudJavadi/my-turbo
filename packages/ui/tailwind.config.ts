// const { lightTheme, darkTheme } = require("@seller-repo/ui/theme/pallete.ts");

import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  darkMode: "class",
  content: [
    "./apps/**/*.{js,ts,jsx,tsx}", // Include all apps in the apps folder
    "./packages/**/*.{js,ts,jsx,tsx}", // Include all packages in the packages folder
  ],
  theme: {
    extend: {
      colors: {
        light: {
          primary: {
            100: "#E6F0FF",
            200: "#B3D1FF",
            300: "#80B2FF",
            400: "#4D93FF",
            500: "#1A74FF",
            600: "#005CE6",
            700: "#0047B3",
            800: "#003280",
            900: "#001D4D",
          },
        },
        dark: {
          primary: {
            100: "#001D4D",
            200: "#003280",
            300: "#0047B3",
            400: "#005CE6",
            500: "#1A74FF",
            600: "#4D93FF",
            700: "#80B2FF",
            800: "#B3D1FF",
            900: "#E6F0FF",
          },
        },
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
