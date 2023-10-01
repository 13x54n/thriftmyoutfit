import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        // content of your manifest file
        name: 'ThriftMyOut',
        short_name: 'TMO',
        description: 'ThriftMyOutfit is a modern lifestyle.',
        icons: [
          {
            src: "https://ik.imagekit.io/13x54r/ThrifyMyOutfit/tr:w-192,h-192/White%20Retro%20Smile%20Clothing%20Company%20Logo.png?updatedAt=1694628876023",
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: "https://ik.imagekit.io/13x54r/ThrifyMyOutfit/tr:w-512,h-512/White%20Retro%20Smile%20Clothing%20Company%20Logo.png?updatedAt=1694628876023",
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: "https://ik.imagekit.io/13x54r/ThrifyMyOutfit/tr:w-192,h-192/White%20Retro%20Smile%20Clothing%20Company%20Logo.png?updatedAt=1694628876023",
            sizes: '192x192',
            type: 'image/png',
            purpose: "maskable"
          },
        ],
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
      },
      workbox: {
        // workbox options for generating service worker
        globPatterns: ['**/*'],
        skipWaiting: true,
        clientsClaim: true,
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com/,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              cacheableResponse: {
                statuses: [0, 200],
              },
              expiration: {
                maxAgeSeconds: 60 * 60 * 24 * 365,
                maxEntries: 30,
              },
            },
          },
        ],
      },
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
})
