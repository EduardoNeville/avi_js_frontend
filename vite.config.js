import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../generated-static',
    emptyOutDir: true,
  },
  server: {
    proxy: {
      '/api': {
        target: process.env.PROXY_API || '127.0.0.1:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
