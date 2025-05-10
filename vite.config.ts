// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths for assets
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Prevent adding crossorigin attribute
        format: 'iife',
        generatedCode: {
          preset: 'es5'
        }
      }
    }
  },
  // Disable crossorigin attribute on scripts
  server: {
    cors: false
  }
})