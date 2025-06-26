import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/code_cache/', // this is essential!
  plugins: [react()],
});