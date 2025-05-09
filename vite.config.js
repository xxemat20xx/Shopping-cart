import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), //react plugin
    tailwindcss(), // tailwind plugin
  ],
  server:{
    port: 8080,
  },
})
