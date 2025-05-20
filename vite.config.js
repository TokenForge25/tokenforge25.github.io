import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Critters from 'critters';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'critters',
      apply: 'build',
      enforce: 'post',
      transformIndexHtml: (html) => {
        const critters = new Critters({
          preload: 'swap',
          pruneSource: true,
          reduceInlineStyles: false,
        });
        return critters.process(html);
      },
    },
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
