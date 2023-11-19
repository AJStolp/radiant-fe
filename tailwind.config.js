/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./src/**/*.{html,ts,tsx,js}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      colors: {
        dark: {
          text: "#ffffff",
          background: "#121212",
          primary: "#95baea",
          secondary: "#030303",
          accent: "#a86500",
        },
        light: {
          text: "#000000",
          background: "#ededed",
          primary: "#153a6a",
          secondary: "#fcfcfc",
          accent: "#ffbc57",
        },
        focus: {
          outline: "4px solid #ffbf59",
        },
      },
      fontFamily: {
        urban: ["Urbanist", "sans-serif"],
        fin: ["Josefin Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        light: 300,
      },
    },
    variants: {
      extend: {
        // ...
        backdropFilter: ["responsive"], // enable responsive variants as needed
      },
    },
  },
  plugins: [require("flowbite/plugin", "tailwindcss-filters")],
};
