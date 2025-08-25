/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"General Sans"', "sans-serif"],
      },
      screens: {
        "max-1420": { max: "900px" }, // applies styles up to 1420px
      },
    },
  },
  plugins: [],
};
