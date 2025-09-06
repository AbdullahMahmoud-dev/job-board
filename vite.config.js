import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/job-board/',  // اسم الريبو بتاعك
  plugins: [react()],
})
