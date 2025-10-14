import { defineConfig } from "vite"
import path from "node:path"

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: true,
    cors: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
