import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Always use relative paths for the dev.js script with Python HTTP server
// This ensures assets load correctly in both embedded preview and external browser
const baseUrl = './';

// Custom plugin to handle embla-carousel-react resolution
const emblaCarouselPlugin = {
  name: 'embla-carousel-resolver',
  resolveId(id) {
    if (id === 'embla-carousel-react') {
      return { id: 'embla-carousel-react', external: false };
    }
    return null;
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), emblaCarouselPlugin],
  base: baseUrl,
  build: {
    outDir: 'dist',
    sourcemap: true,
    // Increase chunk size warning limit to prevent Builder.io related warnings
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      external: ['firebase'],
      // Suppress eval warnings from Builder.io packages
      onwarn(warning, warn) {
        if (warning.code === 'EVAL' && 
           (warning.id?.includes('@builder.io/sdk') || 
            warning.id?.includes('@builder.io/react'))) {
          return;
        }
        warn(warning);
      }
      // resolveId has been moved to a proper plugin below
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'embla-carousel-react']
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    host: '0.0.0.0',  // Allow external access
    hmr: {
      // Ensure HMR works properly
      clientPort: 5173
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      'embla-carousel-react': path.resolve(__dirname, 'node_modules/embla-carousel-react')
    }
  }
})