/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#39D8F8",
        gradientStart: "#F83868",
        gradientEnd: "#4878F8",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        "new-pulse": "wiggle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;",
      },
      keyframes: {
        wiggle: {
          "50%": { opacity: "0.2" },
        },
      },
    },
  },
  plugins: [],
};
