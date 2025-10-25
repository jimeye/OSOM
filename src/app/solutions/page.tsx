'use client';

import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Sun, 
  CheckCircle, 
  Zap, 
  Clock, 
  Shield, 
  ArrowRight,
  Building,
  Home,
  Car,
  TreePine
} from 'lucide-react';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos solutions LED
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto mb-8">
              Éclairage LED professionnel intérieur et extérieur, 
              entièrement financé par le dispositif CEE dans les DOM-TOM
            </p>
          </motion.div>
        </div>
      </section>

      {/* LED Intérieures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">LED Intérieures</h2>
              </div>
              <p className="text-lg text-neutral-600 mb-8">
                Éclairage LED haute performance pour tous vos espaces intérieurs. 
                Jusqu'à 80% d'économies d'énergie par rapport aux éclairages traditionnels.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Building className="w-5 h-5 text-green-500" />,
                    title: "Bureaux & Entreprises",
                    description: "Éclairage LED pour bureaux, open spaces, salles de réunion"
                  },
                  {
                    icon: <Home className="w-5 h-5 text-green-500" />,
                    title: "Commerces & Restaurants", 
                    description: "Éclairage LED pour magasins, restaurants, hôtels"
                  },
                  {
                    icon: <Car className="w-5 h-5 text-green-500" />,
                    title: "Entrepôts & Stockage",
                    description: "Éclairage LED haute puissance pour entrepôts et zones de stockage"
                  }
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-primary-500 mt-1">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {solution.title}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        {solution.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Caractéristiques techniques
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Durée de vie", value: "50 000 heures" },
                  { label: "Économies d'énergie", value: "Jusqu'à 80%" },
                  { label: "Température de couleur", value: "2700K - 6500K" },
                  { label: "Indice de rendu", value: "CRI > 80" },
                  { label: "Garantie", value: "5 ans" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-primary-200 last:border-b-0">
                    <span className="text-neutral-700">{spec.label}</span>
                    <span className="font-semibold text-primary-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LED Extérieures */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl order-2 lg:order-1"
            >
              <h3 className="text-xl font-semibold text-neutral-900 mb-6">
                Spécifications extérieures
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Protection IP", value: "IP65/66" },
                  { label: "Résistance cyclones", value: "Jusqu'à 200 km/h" },
                  { label: "Température d'usage", value: "-20°C à +50°C" },
                  { label: "Détection mouvement", value: "Optionnelle" },
                  { label: "Garantie", value: "5 ans" }
                ].map((spec, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-secondary-200 last:border-b-0">
                    <span className="text-neutral-700">{spec.label}</span>
                    <span className="font-semibold text-secondary-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                  <Sun className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900">LED Extérieures</h2>
              </div>
              <p className="text-lg text-neutral-600 mb-8">
                Éclairage LED extérieur résistant aux intempéries et optimisé 
                pour les climats tropicaux des DOM-TOM.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Car className="w-5 h-5 text-green-500" />,
                    title: "Parkings & Cours",
                    description: "Éclairage LED pour parkings, cours d'entreprises, zones de chargement"
                  },
                  {
                    icon: <TreePine className="w-5 h-5 text-green-500" />,
                    title: "Espaces Verts",
                    description: "Éclairage LED pour jardins, espaces verts, façades"
                  },
                  {
                    icon: <Building className="w-5 h-5 text-green-500" />,
                    title: "Sécurité Extérieure",
                    description: "Éclairage LED avec détection de mouvement pour la sécurité"
                  }
                ].map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-secondary-500 mt-1">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {solution.title}
                      </h3>
                      <p className="text-neutral-600 text-sm">
                        {solution.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Pourquoi choisir nos LED ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Des avantages concrets pour votre entreprise et l'environnement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-green-500" />,
                title: "Économies d'énergie",
                description: "Jusqu'à 80% de réduction de votre facture d'électricité",
                color: "text-yellow-500"
              },
              {
                icon: <Clock className="w-8 h-8 text-green-500" />,
                title: "Durée de vie exceptionnelle",
                description: "50 000 heures de fonctionnement, soit plus de 10 ans",
                color: "text-blue-500"
              },
              {
                icon: <Shield className="w-8 h-8 text-red-600" />,
                title: "Installation gratuite",
                description: "100% financé par le dispositif CEE, aucun coût pour vous",
                color: "text-green-500"
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-red-600" />,
                title: "Qualité certifiée",
                description: "Produits certifiés CE et conformes aux normes européennes",
                color: "text-purple-500"
              },
              {
                icon: <Sun className="w-8 h-8 text-yellow-400" />,
                title: "Éclairage optimal",
                description: "Luminosité constante et température de couleur ajustable",
                color: "text-orange-500"
              },
              {
                icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
                title: "Maintenance réduite",
                description: "Quasi-absence de maintenance grâce à la technologie LED",
                color: "text-indigo-500"
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className={`${advantage.color} mb-4`}>
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intéressé par nos solutions LED ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour un audit gratuit et découvrez combien vous pouvez économiser
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-neutral-50 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5 text-green-500" />
              <span>Demander un audit gratuit</span>
              <ArrowRight className="w-5 h-5 text-green-500" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
