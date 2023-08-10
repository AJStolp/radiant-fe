/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,tsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        dark: {
          text: "#ffffff",
          background: "#000000",
          primary: "#153969",
          secondary: "#030303",
          accent: "#fffaf2",
        },
        light: {
          text: "#000000",
          background: "#ffffff",
          primary: "#153969",
          secondary: "#cfcfcf",
          accent: "#ffbf59",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
