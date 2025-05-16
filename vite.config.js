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
      external: ['firebase'],
      resolveId(id) {
        if (id === 'embla-carousel-react') {
          return { id: 'embla-carousel-react', external: false };
        }
        return null;
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'embla-carousel-react']
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/javascript'
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      'embla-carousel-react': path.resolve(__dirname, 'node_modules/embla-carousel-react')
    }
  }
})