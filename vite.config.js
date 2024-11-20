import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://api.geoapify.com", // Replace with your backend server's URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/swiggy": {
        target: "https://www.swiggy.com", // Replace with your backend server's URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/swiggy/, ""),
      },
    },
  },
  plugins: [react()],
});
