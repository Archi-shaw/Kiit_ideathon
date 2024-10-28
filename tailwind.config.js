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
        background: "ffffff",
        foreground: "var(--foreground)",
        primary: "#a6f000",
      },
      fontFamily: {
        bitter: ["Bitter"],
        geist: ["Geist"],
        geistMono: ["GeistMono"],
        poppins: ["Poppins"],
      },
    },
  },
  darkMode: "class", // Enables dark mode via class (e.g., `dark`)
  plugins: [nextui()],
};
