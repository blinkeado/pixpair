import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/pixpair/', // This should match your GitHub repository name
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