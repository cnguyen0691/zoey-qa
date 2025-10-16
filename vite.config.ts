import { defineConfig } from "vite"
import path from "node:path"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/zoey.resume/', // This is important for GitHub Pages!
  assetsInclude: ['**/*.pdf'],
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
