import { defineConfig } from 'vite'
import react from '@vitejs/react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/luxury-paradise-portals/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
