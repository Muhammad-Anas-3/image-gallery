import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/image-gallery/', // Replace 'image-gallery' with your GitHub repository name
  plugins: [react()],
});