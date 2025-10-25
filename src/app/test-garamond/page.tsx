'use client';

import { motion } from 'framer-motion';

const colorPalettes = [
  {
    name: "🌿 Éco Naturel & Confiance",
    colors: {
      primary: "#2E8B57",
      secondary: "#A3D9A5", 
      background: "#F2F7F1",
      text: "#6B705C",
      accent: "#FFD166"
    }
  },
  {
    name: "⚡ Tech & LED Moderne",
    colors: {
      primary: "#0A84FF",
      secondary: "#0F0F10",
      background: "#F5F7FA", 
      text: "#1E1F25",
      accent: "#00D084"
    }
  },
  {
    name: "🌎 Durable & Futur Responsable",
    colors: {
      primary: "#007F5F",
      secondary: "#E0F4E6",
      background: "#E0F4E6",
      text: "#023047", 
      accent: "#56CFE1"
    }
  },
  {
    name: "💡 Minimal LED White",
    colors: {
      primary: "#00C896",
      secondary: "#E5E5E5",
      background: "#FFFFFF",
      text: "#003366",
      accent: "#101820"
    }
  },
  {
    name: "🌅 Éco-Luxe Premium",
    colors: {
      primary: "#D4AF37",
      secondary: "#F8F9F6",
      background: "#F8F9F6",
      text: "#2C2C2C",
      accent: "#00473E"
    }
  },
  {
    name: "🌞 Solaire & Positif",
    colors: {
      primary: "#FFD166",
      secondary: "#06D6A0",
      background: "#FCFCFC",
      text: "#073B4C",
      accent: "#118AB2"
    }
  },
  {
    name: "🔋 Énergie Connectée (Web3 style)",
    colors: {
      primary: "#00FFA3",
      secondary: "#1A1A1D",
      background: "#1A1A1D",
      text: "#EDF2F7",
      accent: "#7B2FF7"
    }
  },
  {
    name: "🪴 Nature & LED Douce",
    colors: {
      primary: "#7FB77E",
      secondary: "#FFD56B",
      background: "#EFEFEF",
      text: "#2E2E2E",
      accent: "#C7E9B0"
    }
  },
  {
    name: "⚙️ Tech Industriel Responsable",
    colors: {
      primary: "#0081A7",
      secondary: "#F1F1F1",
      background: "#F1F1F1",
      text: "#1B1B1B",
      accent: "#76B041"
    }
  },
  {
    name: "🌠 LED Futuriste & Épuré",
    colors: {
      primary: "#00FFC6",
      secondary: "#0D0D0D",
      background: "#0D0D0D",
      text: "#F2F2F2",
      accent: "#007BFF"
    }
  }
];

export default function TestGaramondPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 
            className="text-4xl font-bold text-gray-900 mb-4 font-garamond"
            style={{ 
              fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
              fontWeight: '700',
              letterSpacing: '0.02em',
              fontStyle: 'italic'
            }}
          >
            Test des Combinaisons de Couleurs OSOM avec Garamond
          </h1>
          <p 
            className="text-xl text-gray-600 font-garamond"
            style={{ 
              fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
              fontWeight: '500',
              letterSpacing: '0.01em'
            }}
          >
            Visualisation de palettes de couleurs et typographie pour le site OSOM
          </p>
          <div className="mt-4 inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
            📚 POLICE GARAMOND ACTIVÉE
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colorPalettes.map((palette, index) => (
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
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3 }
              }}
              className="relative rounded-2xl shadow-lg overflow-hidden min-h-[600px]"
            >
              {/* Background hero image */}
              <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"></div>
              {/* Overlay pour améliorer la lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
              {/* Contenu avec couleurs de la palette */}
              <div className="relative z-10 p-6 h-full flex flex-col">
                {/* Header OSOM avec couleurs de la palette */}
                <div className="mb-6">
                  <div 
                    className="h-16 flex items-center justify-between px-6 rounded-lg backdrop-blur-sm border"
                    style={{ 
                      backgroundColor: `${palette.colors.primary}30`,
                      borderColor: `${palette.colors.accent}40`
                    }}
                  >
                    {/* Logo OSOM */}
                    <div className="flex items-center">
                      <span 
                        className="text-xl font-bold font-garamond text-white"
                        style={{ 
                          fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                          fontWeight: '700',
                          letterSpacing: '0.02em'
                        }}
                      >
                        OSOM
                      </span>
                    </div>
                    
                    {/* Menu Burger */}
                    <div className="flex items-center">
                      <button 
                        className="p-2 rounded-lg transition-all duration-300 hover:bg-white/20 text-white"
                      >
                        <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Nom de la palette */}
                  <div className="mt-4 text-center">
                    <h3 
                      className="text-lg font-bold font-garamond"
                      style={{ 
                        color: palette.colors.secondary === '#FFFFFF' || palette.colors.secondary === '#F5F5F5' ? '#FFFFFF' : palette.colors.secondary,
                        fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                        fontWeight: '600',
                        letterSpacing: '0.01em'
                      }}
                    >
                      {palette.name}
                    </h3>
                  </div>
                </div>
                
                {/* Titre de test */}
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 mb-4">
                  <h4 
                    className="text-2xl font-bold mb-4 text-white font-garamond"
                    style={{ 
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '700',
                      letterSpacing: '0.02em',
                      fontStyle: 'italic'
                    }}
                  >
                    Remplacement LED Intérieur & Extérieur 100% Gratuit en DOM-TOM
                  </h4>

                  {/* Texte de test */}
                  <p 
                    className="mb-4 leading-relaxed text-white/90 font-garamond"
                    style={{ 
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '500',
                      letterSpacing: '0.01em'
                    }}
                  >
                    Grâce aux LED financées par les CEE dans les DOM-TOM. 
                    Vos travaux sont 100% gratuits.
                  </p>
                </div>

                {/* Boutons de test */}
                <div className="flex gap-3 mb-4">
                  <button 
                    className="px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105 shadow-lg font-garamond"
                    style={{ 
                      backgroundColor: palette.colors.primary,
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '600',
                      letterSpacing: '0.01em'
                    }}
                  >
                    Vérifier l'éligibilité
                  </button>
                  <button 
                    className="px-6 py-3 rounded-lg font-semibold border-2 border-white/80 text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 backdrop-blur-sm font-garamond"
                    style={{ 
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '600',
                      letterSpacing: '0.01em'
                    }}
                  >
                    En savoir plus
                  </button>
                </div>

                {/* Indicateurs de confiance */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {['Certifié CEE', '100% Gratuit', 'DOM-TOM'].map((item, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm bg-white/10 text-white border border-white/20 font-garamond"
                      style={{ 
                        fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                        fontWeight: '500'
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Palette de couleurs */}
                <div className="mt-auto bg-black/30 backdrop-blur-sm rounded-lg p-4">
                  <h5 
                    className="font-semibold mb-3 text-white font-garamond"
                    style={{ 
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '600'
                    }}
                  >
                    Palette de couleurs :
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(palette.colors).map(([key, color]) => (
                      <div key={key} className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded border border-white/20"
                          style={{ backgroundColor: color }}
                        ></div>
                        <span 
                          className="text-xs font-mono text-white/80 font-garamond"
                          style={{ 
                            fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                            fontWeight: '400'
                          }}
                        >
                          {color}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section Header + Page d'accueil réelle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 
            className="text-3xl font-bold text-gray-900 mb-6 text-center font-garamond"
            style={{ 
              fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
              fontWeight: '700',
              letterSpacing: '0.02em',
              fontStyle: 'italic'
            }}
          >
            Aperçu Header + Page d'accueil réelle
          </h2>
          
          {/* Header OSOM réel */}
          <div className="bg-white border-b border-gray-200 mb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                {/* Logo OSOM */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-lg">O</span>
                  </div>
                  <span 
                    className="text-2xl font-bold text-gray-900 font-garamond"
                    style={{ 
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '700',
                      letterSpacing: '0.02em'
                    }}
                  >
                    OSOM
                  </span>
                </div>
                
                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-green-600 transition-colors font-garamond"
                    style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}
                  >
                    Accueil
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-green-600 transition-colors font-garamond"
                    style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}
                  >
                    Solutions
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-green-600 transition-colors font-garamond"
                    style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}
                  >
                    CEE
                  </a>
                  <a 
                    href="#" 
                    className="text-gray-700 hover:text-green-600 transition-colors font-garamond"
                    style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}
                  >
                    Contact
                  </a>
                </nav>
                
                {/* Bouton CTA */}
                <button 
                  className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  Vérifier l'éligibilité
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section réelle */}
          <div className="relative min-h-[500px] bg-gradient-to-br from-green-50 via-blue-50 to-green-100 rounded-xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 
                  className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '700',
                    letterSpacing: '0.02em',
                    fontStyle: 'italic'
                  }}
                >
                  Remplacement LED Intérieur & Extérieur<br />
                  <span className="text-green-600">100% Gratuit en DOM-TOM</span>
                </h1>
                
                <p 
                  className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Grâce aux LED financées par les CEE dans les DOM-TOM.<br />
                  <span className="font-semibold text-green-600">Vos travaux sont 100% gratuits.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <button 
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-garamond"
                    style={{ 
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '600'
                    }}
                  >
                    Vérifier l'éligibilité
                  </button>
                  <button 
                    className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-600 hover:text-white transition-all duration-300 font-garamond"
                    style={{ 
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '600'
                    }}
                  >
                    En savoir plus
                  </button>
                </div>
                
                {/* Indicateurs de confiance */}
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                    <span className="text-green-600 mr-2">✓</span>
                    Certifié CEE
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                    <span className="text-green-600 mr-2">✓</span>
                    100% Gratuit
                  </div>
                  <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                    <span className="text-green-600 mr-2">✓</span>
                    DOM-TOM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section Contenu Page d'accueil réelle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 
            className="text-3xl font-bold text-gray-900 mb-6 text-center font-garamond"
            style={{ 
              fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
              fontWeight: '700',
              letterSpacing: '0.02em',
              fontStyle: 'italic'
            }}
          >
            Contenu Page d'accueil réelle
          </h2>
          
          {/* Section Solutions LED */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 
                className="text-3xl font-bold text-gray-900 mb-4 font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  fontStyle: 'italic'
                }}
              >
                💡 Solutions LED Professionnelles
              </h3>
              <p 
                className="text-xl text-gray-600 max-w-3xl mx-auto font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '500'
                }}
              >
                Découvrez nos solutions d'éclairage LED complètes pour tous vos besoins professionnels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🏠</span>
                </div>
                <h4 
                  className="text-xl font-bold text-gray-900 mb-3 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600',
                    letterSpacing: '0.01em'
                  }}
                >
                  LED Intérieures
                </h4>
                <p 
                  className="text-gray-700 mb-4 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Éclairage LED intérieur pour bureaux, entrepôts, commerces et espaces professionnels.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                  <li>• Tubes LED</li>
                  <li>• Panneaux LED</li>
                  <li>• Spots LED</li>
                  <li>• Éclairage d'urgence</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🌙</span>
                </div>
                <h4 
                  className="text-xl font-bold text-gray-900 mb-3 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600',
                    letterSpacing: '0.01em'
                  }}
                >
                  LED Extérieures
                </h4>
                <p 
                  className="text-gray-700 mb-4 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Éclairage LED extérieur pour parkings, cours, façades et espaces publics.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                  <li>• Projecteurs LED</li>
                  <li>• Bornes LED</li>
                  <li>• Éclairage de sécurité</li>
                  <li>• Éclairage décoratif</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h4 
                  className="text-xl font-bold text-gray-900 mb-3 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600',
                    letterSpacing: '0.01em'
                  }}
                >
                  Solutions Sur Mesure
                </h4>
                <p 
                  className="text-gray-700 mb-4 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Solutions LED personnalisées adaptées à vos besoins spécifiques et contraintes.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                  <li>• Étude personnalisée</li>
                  <li>• Installation sur mesure</li>
                  <li>• Maintenance préventive</li>
                  <li>• Support technique</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section Avantages CEE */}
          <div className="mb-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
            <div className="text-center mb-8">
              <h3 
                className="text-3xl font-bold text-gray-900 mb-4 font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  fontStyle: 'italic'
                }}
              >
                📋 Avantages des Certificats CEE
              </h3>
              <p 
                className="text-xl text-gray-600 max-w-3xl mx-auto font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '500'
                }}
              >
                Financez vos travaux LED grâce au dispositif des Certificats d'Économies d'Énergie
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  100% Gratuit
                </h4>
                <p 
                  className="text-gray-600 text-sm font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Vos travaux sont entièrement financés par les CEE
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  Économies d'Énergie
                </h4>
                <p 
                  className="text-gray-600 text-sm font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Jusqu'à 80% d'économies sur votre facture d'électricité
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌱</span>
                </div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  Écologique
                </h4>
                <p 
                  className="text-gray-600 text-sm font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Réduction de votre empreinte carbone
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  Certifié
                </h4>
                <p 
                  className="text-gray-600 text-sm font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Installation par des professionnels certifiés
                </p>
              </div>
            </div>
          </div>

          {/* Section Processus */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h3 
                className="text-3xl font-bold text-gray-900 mb-4 font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '700',
                  letterSpacing: '0.02em',
                  fontStyle: 'italic'
                }}
              >
                🔄 Notre Processus
              </h3>
              <p 
                className="text-xl text-gray-600 max-w-3xl mx-auto font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '500'
                }}
              >
                Un processus simple et transparent pour vos travaux LED financés par les CEE
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  1
                </div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  Étude Gratuite
                </h4>
                <p 
                  className="text-gray-600 text-sm font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Diagnostic complet de vos besoins en éclairage
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  2
                </div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  Devis Personnalisé
                </h4>
                <p 
                  className="text-gray-600 text-sm font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Proposition sur mesure avec financement CEE
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  3
                </div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  Installation
                </h4>
                <p 
                  className="text-gray-600 text-sm font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Installation par nos équipes certifiées
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  4
                </div>
                <h4 
                  className="text-lg font-bold text-gray-900 mb-2 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600'
                  }}
                >
                  Suivi & Maintenance
                </h4>
                <p 
                  className="text-gray-600 text-sm font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '500'
                  }}
                >
                  Accompagnement et maintenance préventive
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center bg-gradient-to-r from-green-500 to-blue-600 rounded-xl p-8 text-white">
            <h3 
              className="text-3xl font-bold mb-4 font-garamond"
              style={{ 
                fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                fontWeight: '700',
                letterSpacing: '0.02em',
                fontStyle: 'italic'
              }}
            >
              Prêt à économiser sur vos factures ?
            </h3>
            <p 
              className="text-xl mb-6 opacity-90 font-garamond"
              style={{ 
                fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                fontWeight: '500'
              }}
            >
              Contactez-nous pour une étude gratuite et personnalisée
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '600'
                }}
              >
                📞 Demander un Devis
              </button>
              <button 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '600'
                }}
              >
                💬 Nous Contacter
              </button>
            </div>
          </div>
        </motion.div>

        {/* Section Aperçu avec couleurs de la palette */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 
            className="text-3xl font-bold text-gray-900 mb-6 text-center font-garamond"
            style={{ 
              fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
              fontWeight: '700',
              letterSpacing: '0.02em',
              fontStyle: 'italic'
            }}
          >
            Aperçu avec les couleurs de cette palette
          </h2>
          
          {/* Aperçu de la page d'accueil avec les couleurs de la palette */}
          <div className="space-y-8">
            {colorPalettes.slice(0, 3).map((palette, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                {/* Header avec couleurs de la palette */}
                <div 
                  className="px-6 py-4 border-b"
                  style={{ backgroundColor: palette.colors.primary + '20' }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center mr-3"
                        style={{ backgroundColor: palette.colors.accent }}
                      >
                        <span className="text-white font-bold text-sm">O</span>
                      </div>
                      <span 
                        className="text-xl font-bold font-garamond"
                        style={{ 
                          color: palette.colors.primary,
                          fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                          fontWeight: '700'
                        }}
                      >
                        OSOM
                      </span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                      <a href="#" style={{ color: palette.colors.text, fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }} className="hover:opacity-80 font-garamond">Accueil</a>
                      <a href="#" style={{ color: palette.colors.text, fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }} className="hover:opacity-80 font-garamond">Solutions</a>
                      <a href="#" style={{ color: palette.colors.text, fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }} className="hover:opacity-80 font-garamond">CEE</a>
                      <a href="#" style={{ color: palette.colors.text, fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }} className="hover:opacity-80 font-garamond">Contact</a>
                    </nav>
                  </div>
                </div>

                {/* Hero section avec couleurs de la palette */}
                <div 
                  className="px-6 py-12 text-center"
                  style={{ backgroundColor: palette.colors.background }}
                >
                  <h1 
                    className="text-4xl font-bold mb-4 font-garamond"
                    style={{ 
                      color: palette.colors.primary,
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '700',
                      letterSpacing: '0.02em',
                      fontStyle: 'italic'
                    }}
                  >
                    Remplacement LED Intérieur & Extérieur 100% Gratuit en DOM-TOM
                  </h1>
                  <p 
                    className="text-xl mb-8 font-garamond"
                    style={{ 
                      color: palette.colors.text,
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '500'
                    }}
                  >
                    Financez vos travaux LED grâce aux Certificats d'Économies d'Énergie
                  </p>
                  <button 
                    className="px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-all font-garamond"
                    style={{ 
                      backgroundColor: palette.colors.primary,
                      color: palette.colors.background === '#FFFFFF' || palette.colors.background === '#F5F5F5' ? palette.colors.primary : '#FFFFFF',
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '600'
                    }}
                  >
                    Vérifier l'éligibilité
                  </button>
                </div>

                {/* Section avantages avec couleurs de la palette */}
                <div 
                  className="px-6 py-8"
                  style={{ backgroundColor: palette.colors.secondary + '30' }}
                >
                  <h2 
                    className="text-2xl font-bold mb-6 text-center font-garamond"
                    style={{ 
                      color: palette.colors.primary,
                      fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                      fontWeight: '700',
                      letterSpacing: '0.02em',
                      fontStyle: 'italic'
                    }}
                  >
                    Pourquoi choisir OSOM ?
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: palette.colors.accent }}
                      >
                        <span className="text-white text-xl">💰</span>
                      </div>
                      <h3 
                        className="text-lg font-bold mb-2 font-garamond"
                        style={{ 
                          color: palette.colors.primary,
                          fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                          fontWeight: '600'
                        }}
                      >
                        100% Gratuit
                      </h3>
                      <p 
                        className="text-sm font-garamond"
                        style={{ 
                          color: palette.colors.text,
                          fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                          fontWeight: '500'
                        }}
                      >
                        Vos travaux sont entièrement financés par les CEE
                      </p>
                    </div>
                    <div className="text-center">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: palette.colors.accent }}
                      >
                        <span className="text-white text-xl">⚡</span>
                      </div>
                      <h3 
                        className="text-lg font-bold mb-2 font-garamond"
                        style={{ 
                          color: palette.colors.primary,
                          fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                          fontWeight: '600'
                        }}
                      >
                        Économies d'Énergie
                      </h3>
                      <p 
                        className="text-sm font-garamond"
                        style={{ 
                          color: palette.colors.text,
                          fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                          fontWeight: '500'
                        }}
                      >
                        Jusqu'à 80% d'économies sur votre facture
                      </p>
                    </div>
                    <div className="text-center">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: palette.colors.accent }}
                      >
                        <span className="text-white text-xl">🌱</span>
                      </div>
                      <h3 
                        className="text-lg font-bold mb-2 font-garamond"
                        style={{ 
                          color: palette.colors.primary,
                          fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                          fontWeight: '600'
                        }}
                      >
                        Écologique
                      </h3>
                      <p 
                        className="text-sm font-garamond"
                        style={{ 
                          color: palette.colors.text,
                          fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                          fontWeight: '500'
                        }}
                      >
                        Réduction de votre empreinte carbone
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Section "À la suite" - Aperçu du contenu */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 
            className="text-3xl font-bold text-gray-900 mb-6 text-center font-garamond"
            style={{ 
              fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
              fontWeight: '700',
              letterSpacing: '0.02em',
              fontStyle: 'italic'
            }}
          >
            À la suite - Aperçu du contenu OSOM
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Section Solutions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">💡</span>
                </div>
                <h3 
                  className="text-xl font-bold text-gray-900 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600',
                    letterSpacing: '0.01em'
                  }}
                >
                  Solutions LED
                </h3>
              </div>
              <p 
                className="text-gray-700 mb-4 font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '500'
                }}
              >
                Découvrez nos solutions d'éclairage LED professionnelles pour tous vos besoins.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                <li>• LED intérieures</li>
                <li>• LED extérieures</li>
                <li>• Éclairage industriel</li>
                <li>• Solutions sur mesure</li>
              </ul>
            </div>

            {/* Section CEE */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">📋</span>
                </div>
                <h3 
                  className="text-xl font-bold text-gray-900 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600',
                    letterSpacing: '0.01em'
                  }}
                >
                  Certificats CEE
                </h3>
              </div>
              <p 
                className="text-gray-700 mb-4 font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '500'
                }}
              >
                Comprendre le dispositif des Certificats d'Économies d'Énergie et vos avantages.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                <li>• Qu'est-ce que les CEE ?</li>
                <li>• Éligibilité entreprise</li>
                <li>• Processus de financement</li>
                <li>• Documentation requise</li>
              </ul>
            </div>

            {/* Section Contact */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white text-xl">📞</span>
                </div>
                <h3 
                  className="text-xl font-bold text-gray-900 font-garamond"
                  style={{ 
                    fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                    fontWeight: '600',
                    letterSpacing: '0.01em'
                  }}
                >
                  Contact
                </h3>
              </div>
              <p 
                className="text-gray-700 mb-4 font-garamond"
                style={{ 
                  fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                  fontWeight: '500'
                }}
              >
                Contactez-nous pour un devis gratuit et personnalisé pour vos projets LED.
              </p>
              <ul className="space-y-2 text-sm text-gray-600 font-garamond" style={{ fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif' }}>
                <li>• Devis gratuit</li>
                <li>• Étude personnalisée</li>
                <li>• Accompagnement complet</li>
                <li>• Support technique</li>
              </ul>
            </div>
          </div>

          {/* CTA principal */}
          <div className="mt-8 text-center">
            <button 
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-garamond"
              style={{ 
                fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                fontWeight: '600',
                letterSpacing: '0.01em'
              }}
            >
              Découvrir toutes nos solutions
            </button>
          </div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-12 bg-white rounded-2xl p-8 shadow-lg"
        >
          <h2 
            className="text-2xl font-bold text-gray-900 mb-4 font-garamond"
            style={{ 
              fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
              fontWeight: '700',
              letterSpacing: '0.02em'
            }}
          >
            Test avec EB Garamond
          </h2>
          <div className="space-y-3 text-gray-700">
            <p 
              className="font-garamond"
              style={{ 
                fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                fontWeight: '500'
              }}
            >
              • <strong>Typographie Garamond</strong> : Police classique et élégante
            </p>
            <p 
              className="font-garamond"
              style={{ 
                fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                fontWeight: '500'
              }}
            >
              • <strong>Test de lisibilité</strong> : Voir comment Garamond s'harmonise avec chaque palette
            </p>
            <p 
              className="font-garamond"
              style={{ 
                fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                fontWeight: '500'
              }}
            >
              • <strong>Impact visuel</strong> : Garamond apporte une touche classique et raffinée
            </p>
            <p 
              className="font-garamond"
              style={{ 
                fontFamily: 'var(--font-garamond), EB Garamond, Times New Roman, serif',
                fontWeight: '500'
              }}
            >
              • <strong>Comparaison</strong> : Comparez avec /test-colors (Inter) et /test-futura (Futura)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
