import type { Config } from "tailwindcss";

import { theme } from "@aeon/core/design/tailwind/theme";
import baseConfig from "@aeon/tailwind-config";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "../../packages/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [baseConfig],
  plugins: [require("nativewind/tailwind/css")],
  important: "html",
  theme: {
    ...theme,
  },
} satisfies Config;
