import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xl2: "1200px", // custom breakpoint start for your middle range
        "2xl": "1536px", // keep Tailwind default
        "3xl": "1700px", // optional for ultra-wide
      },
    },
  },
  plugins: [],
};
export default config;
