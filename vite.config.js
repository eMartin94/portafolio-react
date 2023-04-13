import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'cacheFirst',
      includeAssets: [
        // 'favicon.ico',
        // 'robots.txt',
        'assets/**/*',
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
          },
          {
            src: 'assets/logo-code.svg',
            sizes: '512x512',
            type: 'image/png',
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
