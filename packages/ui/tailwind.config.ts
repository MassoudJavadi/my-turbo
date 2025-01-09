const { lightTheme, darkTheme } = require("@seller-repo/ui/theme/pallete.ts");

module.exports = {
  darkMode: "class",
  content: [
    "./apps/**/*.{js,ts,jsx,tsx}", // Include all apps in the apps folder
  ],
  theme: {
    extend: {
      colors: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
  },
  plugins: [],
};
