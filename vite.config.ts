import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Vercel serves from "/". For GitHub Pages set base to '/<repo-name>/'.
export default defineConfig({ plugins: [react()], base: '/' })
