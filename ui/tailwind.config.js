// tailwind.config.js
const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        "main": {
          extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#78deb2",
            background: "linear-gradient(90deg,rgba(120, 222, 178, 1) 0%, rgba(87, 199, 180, 1) 9%, rgba(82, 113, 255, 1) 100%)",
          //   primary: {
          //     50: "#3B096C",
          //     100: "#520F83",
          //     200: "#7318A2",
          //     300: "#9823C2",
          //     400: "#c031e2",
          //     500: "#DD62ED",
          //     600: "#F182F6",
          //     700: "#FCADF9",
          //     800: "#FDD5F9",
          //     900: "#FEECFE",
          //     DEFAULT: "#DD62ED",
          //     foreground: "#ffffff",
          //   },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            borderWidth: {
              small: "1px",
              medium: "2px",
              large: "3px",
            },
          },
        },
      },
    }),
  ],  
};