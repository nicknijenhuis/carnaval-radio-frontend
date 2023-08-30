/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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

        green: "#0CAE12",
        greenShade_1: "#1DC72429",
        greenShade_2: "#F3FFF4",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
