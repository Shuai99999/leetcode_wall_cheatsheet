import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/leetcode_wall_cheatsheet/',
  plugins: [react()],
})
