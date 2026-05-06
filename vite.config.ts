import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages project site: https://<user>.github.io/AS-AutoShop.io/
const repoBase = '/AS-AutoShop.io/'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // Local dev stays at `/`; production build uses the GitHub Pages subpath.
  base: command === 'serve' ? '/' : repoBase,
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
  plugins: [react(), tailwindcss()],
}))
