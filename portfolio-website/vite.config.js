import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',         // Specify the output directory
    assetsDir: 'assets',     // Directory to nest generated assets under
  },
  base: '/',                // Adjust this if your app is deployed under a subpath (e.g., '/app/')
});