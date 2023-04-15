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
        // icons: [
        //   {
        //     src: '/src/assets/img-portada.webp',
        //     sizes: '192x192',
        //     type: 'image/webp',
        //     purpose: "any",
        //   },
        //   {
        //     src: '/src/assets/img-portada.webp',
        //     sizes: '512x512',
        //     type: 'image/webp',
        //     purpose: "maskable",
        //   },
        // ],
      },
      meta: {
        description: 'Desarrolo de mi portafolio con React, Tailwindcss y otras librerías',
        // 'og:title': 'Mi Portafolio',
        // 'og:description': 'Desarrolo de mi portafolio con React, Tailwindcss y otras librerías',
        // 'og:image': '/src/assets/img-portada.webp',
        // 'og:image:type': 'image/webp',
        // 'og:image:width': '1200',
        // 'og:image:height': '630',
        // 'twitter:title': 'Mi Portafolio',
        // 'twitter:description': 'Desarrolo de mi portafolio con React, Tailwindcss y otras librerías',
        // 'twitter:image': '/src/assets/img-portada.webp',
        // 'twitter:card': 'summary_large_image',
        // 'apple-mobile-web-app-capable': 'yes',
        // 'apple-mobile-web-app-status-bar-style': 'black',
        // 'apple-mobile-web-app-title': 'Mi Portafolio',
      },

    })
  ],
  base: '/portafolio-react/'
})