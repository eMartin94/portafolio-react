import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // strategies: 'staleWhileRevalidate',
      strategies: {
        'index.html': 'cacheFirst',
        'assets/**/*': 'cacheFirst',
      },
      includeAssets: [
        'assets/**/*.{png,jpg,jpeg,gif,svg,webp}',
        'assets/index.js',
      ],
      manifest: {
        name: 'Mi Portafolio',
        short_name: 'Portafolio',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'assets/logo-code.svg',
            sizes: '192x192',
            type: 'image/png',
            purpose: "any",
          },
          {
            src: 'assets/logo-code.svg',
            sizes: '512x512',
            type: 'image/png',
            purpose: "maskable",
          },
        ],
      },
      meta: {
        description: 'Desarrolo de mi portafolio con React, Tailwindcss y otras librerías',
      },
    })
  ],
  base: '/portafolio-react/'
})