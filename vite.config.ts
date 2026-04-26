import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // This is critical for GitHub Pages project sites!
  // It ensures assets are loaded from /Syed-Skills/ instead of root.
  base: '/Syed-Skills/',
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: {
      overlay: false,
    },
  },
  build: {
    outDir: 'dist',
  }
});
