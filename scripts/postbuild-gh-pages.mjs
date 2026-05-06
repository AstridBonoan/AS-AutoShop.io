import { copyFileSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const docsDir = join(root, 'docs')
const indexHtml = join(docsDir, 'index.html')
const notFoundHtml = join(docsDir, '404.html')

if (!existsSync(indexHtml)) {
  console.error('postbuild-gh-pages: missing docs/index.html (run vite build first)')
  process.exit(1)
}

copyFileSync(indexHtml, notFoundHtml)
console.log('GitHub Pages: copied docs/index.html -> docs/404.html (SPA fallback)')
