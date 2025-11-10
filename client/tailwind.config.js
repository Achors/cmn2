/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A3D62",
        accent: "#FDB813",
        success: "#2ECC71",
      },
    },
  },
  plugins: [],
};