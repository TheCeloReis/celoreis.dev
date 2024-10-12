import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          "50": "#eefbfd",
          "100": "#d5f3f8",
          "200": "#afe8f2",
          "300": "#78d5e8",
          "400": "#58c4dc",
          "500": "#1e9dbc",
          "600": "#1c7f9e",
          "700": "#1d6681",
          "800": "#20546a",
          "900": "#1f475a",
          "950": "#0f2e3d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
