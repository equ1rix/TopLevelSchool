/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        bg: {
          main: "#3b8beb",
          card: "#c4dbf6",
          button: "#B23850",
          disable: "#8590AA",
          highlight: "#E7E3D4",
          textHighlight: "#FF60CD",
        },
      },
    },
  },
  plugins: [],
};
