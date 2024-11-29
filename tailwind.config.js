/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script/**/*.js", "./data/**/*.js"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards 2s",
      },
    },
  },
  plugins: [],
};
