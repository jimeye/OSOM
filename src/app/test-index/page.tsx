'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const testPages = [
  {
    title: "Test Inter (Standard)",
    description: "Page de test avec la police Inter - Moderne et lisible",
    url: "/test-colors",
    color: "from-blue-500 to-blue-600",
    icon: "🔤",
    features: [
      "52 palettes de couleurs",
      "Police Inter (Google Fonts)",
      "Header + Page d'accueil réelle",
      "Aperçu du contenu OSOM"
    ],
    typography: "Inter",
    style: "Moderne et lisible"
  },
  {
    title: "Test Futura Extra Bold",
    description: "Page de test avec la police Futura - Géométrique et futuriste",
    url: "/test-futura",
    color: "from-purple-500 to-purple-600",
    icon: "🎨",
    features: [
      "10 palettes de couleurs",
      "Police Futura Extra Bold (locale)",
      "Header + Page d'accueil réelle",
      "Aperçu du contenu OSOM"
    ],
    typography: "Futura",
    style: "Géométrique et futuriste"
  },
  {
    title: "Test EB Garamond",
    description: "Page de test avec la police Garamond - Classique et élégant",
    url: "/test-garamond",
    color: "from-green-500 to-green-600",
    icon: "📚",
    features: [
      "10 palettes de couleurs",
      "Police EB Garamond (Google Fonts)",
      "Header + Page d'accueil réelle",
      "Aperçu du contenu OSOM"
    ],
    typography: "Garamond",
    style: "Classique et élégant"
  },
  {
    title: "Test Cooper Black",
    description: "Page de test avec la police Cooper Black - Vintage et expressif",
    url: "/test-cooper",
    color: "from-orange-500 to-orange-600",
    icon: "🎭",
    features: [
      "10 palettes de couleurs",
      "Police Cooper Black Regular (locale)",
      "Header + Page d'accueil réelle",
      "Aperçu du contenu OSOM"
    ],
    typography: "Cooper Black",
    style: "Vintage et expressif"
  }
];

export default function TestIndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            🎨 Centre de Test OSOM
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Choisissez votre page de test pour visualiser les palettes de couleurs et typographies 
            du site OSOM avec des aperçus complets du contenu.
          </p>
          <div className="inline-block bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold">
            🚀 4 Pages de Test Disponibles
          </div>
        </motion.div>

        {/* Grille des pages de test */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testPages.map((page, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.34, 1.56, 0.64, 1]
              }}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
            >
              {/* Header de la carte */}
              <div className={`bg-gradient-to-r ${page.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{page.icon}</div>
                  <div className="text-right">
                    <div className="text-sm opacity-90">Police</div>
                    <div className="text-lg font-bold">{page.typography}</div>
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{page.title}</h2>
                <p className="text-white/90">{page.description}</p>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Caractéristiques :</h3>
                  <ul className="space-y-1 text-gray-600">
                    {page.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Style :</span>
                    <span className="font-semibold text-gray-900">{page.style}</span>
                  </div>
                </div>

                {/* Bouton d'accès */}
                <Link href={page.url}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full bg-gradient-to-r ${page.color} text-white py-3 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300`}
                  >
                    🚀 Accéder au Test
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section d'information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            📋 Guide d'Utilisation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Palettes</h3>
              <p className="text-sm text-gray-600">
                Testez 52 palettes de couleurs différentes pour trouver la meilleure combinaison.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔤</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Typographie</h3>
              <p className="text-sm text-gray-600">
                Comparez 4 polices différentes : Inter, Futura, Garamond et Cooper Black.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Aperçu Réel</h3>
              <p className="text-sm text-gray-600">
                Visualisez le header et la page d'accueil réelle avec chaque combinaison.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Responsive</h3>
              <p className="text-sm text-gray-600">
                Tous les tests sont optimisés pour mobile, tablette et desktop.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">💡 Conseil</h3>
              <p className="text-gray-700">
                Commencez par la page <strong>Inter (Standard)</strong> qui contient toutes les palettes, 
                puis testez les autres typographies pour voir l'impact sur l'identité visuelle d'OSOM.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12 text-center"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🔗 Liens Rapides</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/test-colors" className="text-blue-600 hover:text-blue-800 font-medium">
                Test Inter
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/test-futura" className="text-purple-600 hover:text-purple-800 font-medium">
                Test Futura
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/test-garamond" className="text-green-600 hover:text-green-800 font-medium">
                Test Garamond
              </Link>
              <span className="text-gray-300">•</span>
              <Link href="/test-cooper" className="text-orange-600 hover:text-orange-800 font-medium">
                Test Cooper
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
