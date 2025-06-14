import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/brutalist-ai-alchemy/', // Replace 'your-repo-name' with actual repo name
  build: {
    outDir: 'dist'
  }
})