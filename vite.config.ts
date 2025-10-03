import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "screenshot-desktop.png",
        "screenshot-mobile.png",
      ],
      manifest: {
        name: "Calculadora Numerológica",
        short_name: "NumCalc",
        description: "Calculadora Numerológica basada en la Técnica Yoel.",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/carta-numerologica/",
        scope: "/carta-numerologica/",
        display: "standalone",
        categories: ["utilities", "lifestyle"],
        lang: "es",
        orientation: "any",
        id: "/",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        screenshots: [
          {
            src: "screenshot-desktop.png",
            sizes: "1280x720",
            type: "image/png",
            form_factor: "wide",
            label: "Vista de escritorio de la Calculadora Numerológica",
          },
          {
            src: "screenshot-mobile.png",
            sizes: "540x720",
            type: "image/png",
            form_factor: "narrow",
            label: "Vista móvil de la Calculadora Numerológica",
          },
        ],
        shortcuts: [
          {
            name: "Calcular Carta",
            short_name: "Calcular",
            description:
              "Abrir la calculadora para generar una nueva carta numerológica",
            url: "/carta-numerologica/",
            icons: [{ src: "android-chrome-192x192.png", sizes: "192x192" }],
          },
        ],
      },
    }),
  ],
  base: "/carta-numerologica/",
  server: {
    host: true,
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
});
