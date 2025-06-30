import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "::",
    port: 3000,
    strictPort: true,
    hmr: {
      host: "::",
      port: 3000,
      protocol: "ws",
    },
  }
});
