import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),],
  optimizeDeps: {
    exclude: ["@swc/wasm", "@swc/core-darwin-arm64", "fsevents", "lightningcss"]
  },

});


