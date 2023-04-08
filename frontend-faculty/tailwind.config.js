/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 500 is the default color for each color
        custom_primary: {
          DEFAULT: "#6D466B",
          50: "#C5A5C4",
          100: "#BD99BC",
          200: "#AD80AB",
          300: "#9D679B",
          400: "#865683",
          500: "#6D466B",
          600: "#4B3049",
          700: "#291A28",
          800: "#070406",
          900: "#000000",
        },
        custom_secondary: {
          DEFAULT: "#B49FCC",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#F2EFF6",
          300: "#DED4E8",
          400: "#C9BADA",
          500: "#B49FCC",
          600: "#977AB9",
          700: "#7B57A4",
          800: "#5F447F",
          900: "#44305B",
        },
        custom_darkPurple: {
          DEFAULT: "#412234",
          50: "#B16A93",
          100: "#AA5C89",
          200: "#914C74",
          300: "#773E5F",
          400: "#5C3049",
          500: "#412234",
          600: "#1C0F17",
          700: "#000000",
          800: "#000000",
          900: "#000000",
        },
        custom_muted: {
          DEFAULT: "#EAD7D7",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#F8F2F2",
          500: "#EAD7D7",
          600: "#D7B2B2",
          700: "#C38D8D",
          800: "#B06969",
          900: "#934D4D",
        },
        custom_darkGray: {
          DEFAULT: "#43515C",
          50: "#9EADB8",
          100: "#92A3B0",
          200: "#7B8F9F",
          300: "#657B8B",
          400: "#546674",
          500: "#43515C",
          600: "#2B343C",
          700: "#14181B",
          800: "#000000",
          900: "#000000",
        },
        custom_white: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FFFFFF",
          200: "#FFFFFF",
          300: "#FFFFFF",
          400: "#FFFFFF",
          500: "#FFFFFF",
          600: "#E3E3E3",
          700: "#C7C7C7",
          800: "#ABABAB",
          900: "#8F8F8F",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};