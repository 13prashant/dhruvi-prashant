/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#fffde9",
        foreground: "black",
        primary: {
          DEFAULT: "#785c32",
          foreground: "white",
        },
        secondary: {
          DEFAULT: "#aa853e",
          foreground: "white",
        },
      },
    },
  },
  plugins: [],
};
