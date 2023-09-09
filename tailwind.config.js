/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/**/*.{html,ts,tsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        dark: {
          text: "#ffffff",
          background: "#111111",
          primary: "#153969",
          secondary: "#030303",
          accent: "#ffbd59",
        },
        light: {
          text: "#111111",
          background: "#ffffff",
          primary: "#153969",
          secondary: "#cfcfcf",
          accent: "#bf7300",
        },
        focus: {
          outline: "4px solid #ffbf59", // Customize the outline color
        },
      },
      fontFamily: {
        urban: ["Urbanist", "sans-serif"],
        fin: ["Josefin Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
