import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression'
import inject from '@rollup/plugin-inject'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    viteCompression({ algorithm: 'brotliCompress', threshold: 10240 })
  ],
  define: {
    global: {},
    'process.env.NODE_DEBUG': JSON.stringify('')
  },
  build: {
    outDir: 'build',
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      plugins: [inject({ Buffer: ['buffer', 'Buffer'] })],
      output: {
        manualChunks: {
          solana: ['@solana/web3.js', '@solana/spl-token'],
          react: ['react', 'react-dom']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      '@solana/web3.js',
      '@solana/spl-token',
      'buffer',
      'process'
    ]
  }
})
