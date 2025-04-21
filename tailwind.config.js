/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        evolvetext:"url(./assets/EvolveText.png)"
      },
    },
    plugins: [],
  }