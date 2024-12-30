import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [vue()],
  build: {
    outDir: 'docs',
  },
  base: mode === 'production' ? '/vite-vue-example/' : '/',
}))
