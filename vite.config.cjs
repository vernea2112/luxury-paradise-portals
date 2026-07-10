const { defineConfig } = require('vite');
const react = require('@vitejs/react-swc').default;
const path = require('path');

module.exports = defineConfig({
  plugins: [react()],
  base: '/luxury-paradise-portals/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
