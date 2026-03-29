import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/A7AYAMIDO/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

