import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import critters from 'critters';
import compression from 'vite-plugin-compression';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    critters(),
    compression({ algorithm: 'brotliCompress', threshold: 10240 }),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          helmet: ['react-helmet'],
        },
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
});
