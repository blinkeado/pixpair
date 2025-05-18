import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Always use '/' for local preview to avoid 'Cannot GET /' errors
// For GitHub Pages deployment, we'll explicitly set base during the gh-pages deploy
const baseUrl = '/';

// Create a custom Rollup plugin to handle embla-carousel-react
function emblaCarouselResolver() {
  return {
    name: 'embla-carousel-resolver',
    resolveId(id) {
      if (id === 'embla-carousel-react') {
        return { id: 'embla-carousel-react', external: false };
      }
      return null;
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    emblaCarouselResolver()
  ],
  base: baseUrl,
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      external: ['firebase']
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