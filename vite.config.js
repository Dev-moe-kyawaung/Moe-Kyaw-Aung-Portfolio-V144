import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Vite Configuration — Moe Kyaw Aung Portfolio V144
 *
 * IMPORTANT: Update `base` to match your GitHub repo name.
 *
 * Examples:
 *   Repo: github.com/Dev-moe-kyawaung/moe-kyaw-aung-portfolio-v144
 *   base: '/moe-kyaw-aung-portfolio-v144/'
 *
 *   Deploying to username.github.io (root):
 *   base: '/'
 */
export default defineConfig({
  plugins: [react()],

  // ← Change this to your repo name if deploying to a sub-path
  base: '/moe-kyaw-aung-portfolio-v144/',

  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // Single chunk for this single-file portfolio
        manualChunks: undefined,
      },
    },
  },

  server: {
    port: 5173,
    open: true,
  },

  preview: {
    port: 4173,
  },
});
