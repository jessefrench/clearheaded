/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}