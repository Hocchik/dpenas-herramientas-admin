import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)


// https://vitejs.dev/config/
export default defineConfig({
  define: {
    /* 'process.env': process.env */
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@tailwindConfig': path.resolve(__dirname, 'tailwind.config.js'),
    },
  },
  optimizeDeps: {
    include: [
      '@tailwindConfig',
    ]
  }, 
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  test: {
    environment: 'jsdom', // 👈 ¡Este es el truco!
    globals: true,         // Opcional, para no tener que importar 'describe', 'it', etc.
  } 
})