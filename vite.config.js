import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress', threshold: 10240 })
  ],
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          solana: ['@solana/web3.js', '@solana/spl-token'],
          react: ['react', 'react-dom']
        }
      }
    }
  }
})
