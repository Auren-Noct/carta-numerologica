import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/carta-numerologica/",
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});
