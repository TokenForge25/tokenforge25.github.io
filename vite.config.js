import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import critters from 'critters';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    critters(),
    viteCompression({ algorithm: 'brotliCompress', threshold: 10240 }),
  ],
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
  },
  server: {
    port: 3000,
    open: true,
  },
});
