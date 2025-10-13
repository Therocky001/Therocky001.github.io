import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Since it's username.github.io, the base should be '/'
  build: {
    outDir: 'dist',
  }
})