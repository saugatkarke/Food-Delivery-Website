/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        rd: "1250px",
        xsm: "416px",
      },
      backgroundImage: {
        "linear-gradient-black-transparent":
          "linear-gradient(0deg, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)",
        "food-cover": "url('/src/assets/images/food items vectors.png')",
        "about-cover":
          "url('/src/assets/images/css-pattern-by-magicpattern.png')",
        "vite-cover":
          "url('/src/assets/images/fast-bg.png')",
        "react-cover":
          "url('/src/assets/images/react-bg.png')",
        "tailwind-cover":
          "url('/src/assets/images/tailwind-bg.png')",
        "foodie-grad":
          "linear-gradient(to bottom right, #fcd34d 0%, #fb923c 50%, #f87171 100%)",
      },
      backgroundSize: {
        "15%": "15%",
        16: "4rem",
        custom: "200px 100px",
      },
      colors: {
        primary: "#FF5200",
        gradientOrange: "#FFA726",
        dangerRed: "#FF0000",
        deepOrange: "#DF5901",
        softYellow: "#FFD54F",
        lightBeige: "#FFF3E0",
        neutralDark: "#3E2723",
        tpGrey: "#676767c4",
      },
      scrollbar: {
        hidden: {
          "::-webkit-scrollbar": {
            display: "none",
          },
        },
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "pulse-3": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 3",
        "fade-in-up": "fadeInUp 1s ease-out",
        "fade-in": "fadeIn 1s linear",
      },
    },
  },
  plugins: [],
};
