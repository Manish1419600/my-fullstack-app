import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Live URL from Render
const productionBackend = 'https://studygenie-backend-fpoh.onrender.com';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: productionBackend,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
