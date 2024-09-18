import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '/generated-static',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.PROXY_API || 'localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
