import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/code_cache/',
  build: {
    outDir: '../docs', // relative to vite.config.js in /ui
    emptyOutDir: true,
  },
  plugins: [react()],
});
