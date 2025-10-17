import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'
import path from "node:path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/zoey-qa/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
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
