/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "linear-gradient-black-transparent":
          "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
      },
      colors: {
        primary: "#FF5200",
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
