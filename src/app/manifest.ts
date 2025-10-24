import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'OSOM - LED Intérieures & Extérieures Financé par les CEE',
    short_name: 'OSOM',
    description: 'Installation LED professionnelle sans frais pour les entreprises des DOM-TOM, financée par le dispositif des CEE.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#2d9a5a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
