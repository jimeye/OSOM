import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Test Couleurs - Palettes OSOM',
  description: 'Page de test pour visualiser les différentes combinaisons de couleurs pour le site OSOM.',
  keywords: 'test couleurs, palette, design, OSOM, LED, CEE',
  openGraph: {
    title: 'Test Couleurs - Palettes OSOM',
    description: 'Page de test pour visualiser les différentes combinaisons de couleurs pour le site OSOM.',
    url: 'https://osom.fr/test-colors',
    images: [
      {
        url: 'https://osom.fr/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'OSOM - Test des palettes de couleurs',
      },
    ],
  },
}
