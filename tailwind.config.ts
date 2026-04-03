import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d7e8ff",
          500: "#356dff",
          600: "#2458df",
          700: "#1d48b4"
        }
      },
      boxShadow: {
        card: "0 10px 30px rgba(15,23,42,0.08)",
      }
    },
  },
  darkMode: ["class"],
  plugins: [],
};

export default config;
