import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Since it's username.github.io, the base should be '/'
  build: {
    outDir: 'dist',
  }
})