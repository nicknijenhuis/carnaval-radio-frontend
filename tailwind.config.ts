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
        primary: "#FF9D00",
        primaryShade_1: "#FF9D0029",
        primaryShade_2: "#F2F4E6",
        primaryShade_3: "#FFFCF3",
        secondary: "#FF1809",
        secondayShade_1: "#FFEFEB",
        secondayShade_2: "#FFF9F8",
        heroBackground: "#f9f9f9",
        sideBbarBackground: "#fcfdfe",
        activeTab: "#f2f4e6",
        tertiary: "#0CAE12",
        tertiaryShade_1: "#1DC72429",
        tertiaryShade_2: "#F3FFF4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
