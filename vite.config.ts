import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Optimize build for better performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks for better caching
          'react-vendor': ['react', 'react-dom'],
          'animation-vendor': ['framer-motion'],
          'spline-vendor': ['@splinetool/react-spline', '@splinetool/runtime'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  // Optimize dev server
  server: {
    hmr: {
      overlay: false, // Disable error overlay for better performance
    },
  },
})
