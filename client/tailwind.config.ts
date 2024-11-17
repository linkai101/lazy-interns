import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {},
    },
  },
  plugins: [],
} satisfies Config;
