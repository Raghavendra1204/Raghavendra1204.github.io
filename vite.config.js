import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For username.github.io root domain deployment, base is '/'
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
