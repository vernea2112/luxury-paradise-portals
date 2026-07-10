import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/luxury-paradise-portals/', // <-- Define a rota correta para o GitHub Pages funcionar
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
