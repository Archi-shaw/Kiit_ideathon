const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light Mode Colors
        light: {
          background: "#ECDFCC", // light background
          foreground: "#3C3D37", // light foreground
          accent: "#697565",     // light accent color
          primary: "#1E201E",    // light primary color
        },
        // Dark Mode Colors
        dark: {
          background: "#1E201E", // dark background
          foreground: "#ECDFCC", // dark foreground (light contrast)
          accent: "#697565",     // dark accent color
          primary: "#3C3D37",    // dark primary color
        },
      },
    },
  },
  darkMode: "class", // Enables dark mode via class (e.g., `dark`)
  plugins: [nextui()],
};
