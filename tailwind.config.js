/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F61",
        gradientOrange: "#FFA726",
        deepOrange: "#FF7043",
        softYellow: "#FFD54F",
        lightBeige: "#FFF3E0",
        neutralDark: "#3E2723",
      },
    },
  },
  plugins: [],
};
