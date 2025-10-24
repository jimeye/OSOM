import type { Metadata } from "next";
import { Inter, EB_Garamond } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const futura = localFont({
  src: [
    {
      path: "../../public/Futuri Extra Bold Oblique.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-futura",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  weight: ["400", "500", "600", "700", "800"],
});

const cooperBlack = localFont({
  src: [
    {
      path: "../../public/Cooper Black Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cooper-black",
});

export const metadata: Metadata = {
  title: "OSOM – LED Intérieures & Extérieures Financé par les CEE dans les DOM-TOM",
  description: "Installation LED professionnelle sans frais pour les entreprises des DOM-TOM, financée par le dispositif des CEE. OSOM – Ouvriers Solidaires d'Outre-Mer.",
  keywords: "LED DOM TOM, CEE entreprise, éclairage professionnel gratuit, rénovation énergétique DOM-TOM, certificats économies énergie",
  authors: [{ name: "OSOM" }],
  creator: "OSOM",
  publisher: "OSOM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://osom.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "OSOM – LED Intérieures & Extérieures Financé par les CEE dans les DOM-TOM",
    description: "Installation LED professionnelle sans frais pour les entreprises des DOM-TOM, financée par le dispositif des CEE.",
    url: 'https://osom.fr',
    siteName: 'OSOM',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://osom.fr/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'OSOM - Solutions LED financées par les CEE dans les DOM-TOM',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "OSOM – LED Intérieures & Extérieures Financé par les CEE dans les DOM-TOM",
    description: "Installation LED professionnelle sans frais pour les entreprises des DOM-TOM, financée par le dispositif des CEE.",
    images: ['https://osom.fr/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${futura.variable} ${garamond.variable} ${cooperBlack.variable} font-sans antialiased`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
