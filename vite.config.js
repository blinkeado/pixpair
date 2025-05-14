import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Determine the base URL based on the deployment target
const baseUrl = process.env.NETLIFY ? '/' : '/pixpair/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: baseUrl,
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: './index.html'
      },
      external: ['firebase']
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/javascript'
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})