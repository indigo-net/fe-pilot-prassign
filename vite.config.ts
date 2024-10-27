import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'image/favicon.svg',
        'image/prassign.svg',
        'image/prassign-16x16.png',
        'image/prassign-32x32.png',
        'image/prassign-180x180.png',
        'image/prassign-196x196.png',
        'image/prassign-512x512.png',
      ],
      manifest: {
        name: 'PRASSIGN',
        // eslint-disable-next-line camelcase
        short_name: 'PRASSIGN',
        description:
          '이름을 등록해주세요. 운영진 분들이 당신의 이름을 불러드립니다.',
        // eslint-disable-next-line camelcase
        theme_color: '#101432',
        // eslint-disable-next-line camelcase
        background_color: '#2F2F2F',
        display: 'standalone',
        scope: '/',
        // eslint-disable-next-line camelcase
        start_url: '.',
        orientation: 'portrait',
        icons: [
          {
            src: '/image/prassign-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: '/image/prassign-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: '/image/prassign-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/image/prassign-196x196.png',
            sizes: '196x196',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: '/image/prassign-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        categories: ['utilities'],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/pilot-prassign\.vercel\.app\/.*/i,
            handler: 'NetworkFirst',
            options: {
              cacheName: 'prassign-cache',
              networkTimeoutSeconds: 10,
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
})
