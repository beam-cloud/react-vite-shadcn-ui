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
    host: '::',
    port: 3000,
    strictPort: true,
    hmr: false, // Disable HMR to prevent constant refresh
    watch: {
      usePolling: true, // Use polling instead of file system events
      interval: 1000, // Poll every second
    }
  }
});
