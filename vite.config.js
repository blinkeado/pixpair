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
        main: './index.html',
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})