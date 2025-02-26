import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Movie-app PWA',
        short_name: 'Movie-app',
        theme_color: '#000000',
      },
    })
  ],
  base: '/movie-app',
})
