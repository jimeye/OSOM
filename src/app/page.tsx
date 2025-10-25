'use client';

import { motion } from 'framer-motion';
import { 
  Zap, 
  Leaf, 
  Shield, 
  CheckCircle, 
  Lightbulb, 
  Sun, 
  Building, 
  Users,
  TrendingUp,
  Award,
  Star,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center bg-no-repeat"></div>
        {/* Overlay pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-black/30"></div>
        {/* Décoration subtile */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 w-full">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -150, scale: 0.3, rotateX: -45, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotateX: 0, rotateY: 0 }}
              transition={{ 
                duration: 2.2, 
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.2
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -10,
                x: 15,
                rotateY: 5,
                boxShadow: "0 30px 60px rgba(0, 0, 0, 0.3)",
                transition: { duration: 0.4 }
              }}
              className="mb-8"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 80, scale: 0.5, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 2.0, 
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.4
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  rotateY: 3,
                  transition: { duration: 0.3 }
                }}
                className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black text-white mb-6 leading-none drop-shadow-2xl tracking-wider text-left"
              >
                <motion.span 
                  initial={{ opacity: 0, x: -100, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 1.8, 
                    ease: [0.34, 1.56, 0.64, 1],
                    delay: 0.6
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    color: "#22c55e",
                    textShadow: "0 0 20px rgba(34, 197, 94, 0.5)",
                    transition: { duration: 0.3 }
                  }}
                  className="text-white/90 text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold tracking-widest leading-none"
                >
                  Remplacement LED Intérieur & Extérieur 100% Gratuit en DOM-TOM
                </motion.span>
              </motion.h1>
              <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
                Grâce aux LED financées par les CEE dans les DOM-TOM. 
                <span className="font-semibold text-forest-300"> Vos travaux sont 100% gratuits.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 1.0, 
                ease: [0.34, 1.56, 0.64, 1],
                delay: 0.6
              }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.08, 
                  y: -2,
                  boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 0.8
                }}
                className="bg-forest-500 text-white px-4 py-2 rounded-full font-semibold text-sm xl:text-base hover:bg-forest-600 transition-all duration-300 flex items-center space-x-1 shadow-2xl hover:shadow-forest-500/25 backdrop-blur-sm"
              >
                <Zap className="w-3 h-3 xl:w-4 xl:h-4" />
                <span>Vérifiez votre éligibilité</span>
                <ArrowRight className="w-3 h-3 xl:w-4 xl:h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.08, 
                  y: -2,
                  backgroundColor: "rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.34, 1.56, 0.64, 1],
                  delay: 1.0
                }}
                className="border-2 border-white/80 text-white px-4 py-2 rounded-full font-semibold text-sm xl:text-base hover:bg-white/10 transition-all duration-300 flex items-center space-x-1 backdrop-blur-sm"
              >
                <span>En savoir plus</span>
              </motion.button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.0, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 1.2
              }}
              className="mt-12 flex flex-wrap justify-center items-center gap-10 text-base xl:text-lg text-white/80"
            >
              <div className="flex items-center space-x-3 backdrop-blur-sm bg-white/10 px-5 py-3 rounded-full">
                <Shield className="w-5 h-5 text-forest-300" />
                <span className="font-medium">Certifié CEE</span>
              </div>
              <div className="flex items-center space-x-3 backdrop-blur-sm bg-white/10 px-5 py-3 rounded-full">
                <Award className="w-5 h-5 text-forest-300" />
                <span className="font-medium">100% Gratuit</span>
              </div>
              <div className="flex items-center space-x-3 backdrop-blur-sm bg-white/10 px-5 py-3 rounded-full">
                <CheckCircle className="w-5 h-5 text-forest-300" />
                <span className="font-medium">DOM-TOM</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pourquoi choisir OSOM */}
      <section className="py-24 xl:py-32 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Pourquoi choisir OSOM ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Nous sommes spécialisés dans l'installation LED professionnelle 
              financée par les Certificats d'Économies d'Énergie dans les DOM-TOM.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "100% Gratuit",
                description: "Vos travaux d'éclairage LED sont entièrement financés par le dispositif CEE. Aucun coût pour votre entreprise."
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Écologique",
                description: "Réduisez votre empreinte carbone avec des LED haute efficacité énergétique et une durée de vie exceptionnelle."
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Expertise DOM-TOM",
                description: "Notre équipe connaît parfaitement les spécificités des territoires d'outre-mer et leurs contraintes."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.34, 1.56, 0.64, 1]
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100"
              >
                <div className="text-primary-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos solutions LED */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Nos solutions LED
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Éclairage LED intérieur et extérieur pour tous vos espaces professionnels
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">LED Intérieures</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Éclairage LED pour bureaux, entrepôts, commerces, restaurants et hôtels. 
                Jusqu'à 80% d'économies d'énergie par rapport aux éclairages traditionnels.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Température de couleur ajustable</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Durée de vie : 50 000 heures</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Installation professionnelle incluse</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
              >
                Découvrir les solutions intérieures
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                  <Sun className="w-6 h-6 text-secondary-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">LED Extérieures</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Éclairage LED extérieur pour parkings, cours, façades et espaces verts. 
                Résistant aux intempéries et optimisé pour les climats tropicaux.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Protection IP65/66</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Détection de mouvement</span>
                </li>
                <li className="flex items-center text-neutral-700">
                  <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                  <span>Résistant aux cyclones</span>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-secondary-500 text-white py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-300"
              >
                Découvrir les solutions extérieures
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Un processus simple en 4 étapes pour bénéficier de votre éclairage LED gratuit
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Vérification d'éligibilité",
                description: "Nous vérifions que votre entreprise est éligible au dispositif CEE dans votre DOM-TOM."
              },
              {
                step: "02", 
                title: "Audit énergétique",
                description: "Nos experts réalisent un audit gratuit de votre éclairage actuel et calculent les économies potentielles."
              },
              {
                step: "03",
                title: "Installation LED",
                description: "Installation professionnelle de vos nouveaux éclairages LED par nos équipes certifiées."
              },
              {
                step: "04",
                title: "Certification CEE",
                description: "Nous nous occupons de toute la paperasserie CEE. Vous n'avez rien à payer."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ils nous font confiance */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Plus de 500 entreprises des DOM-TOM ont déjà fait confiance à OSOM
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Marie Dubois",
                company: "Hôtel Les Tropiques",
                location: "Guadeloupe",
                testimonial: "Grâce à OSOM, nous avons réduit notre facture d'électricité de 35% sans rien débourser. Un service professionnel et efficace.",
                rating: 5
              },
              {
                name: "Jean-Pierre Martin",
                company: "Super U",
                location: "Martinique", 
                testimonial: "L'installation LED dans notre magasin a été parfaite. Économies immédiates et éclairage de qualité supérieure.",
                rating: 5
              },
              {
                name: "Sophie Chen",
                company: "Restaurant Le Port",
                location: "Réunion",
                testimonial: "OSOM nous a accompagnés de A à Z. L'équipe connaît parfaitement les spécificités de notre territoire.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-neutral-700 mb-4 italic">
                  "{testimonial.testimonial}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-neutral-900">{testimonial.name}</p>
                  <p className="text-sm text-neutral-600">{testimonial.company}</p>
                  <p className="text-sm text-primary-600">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "500+", label: "Entreprises équipées" },
              { number: "40%", label: "Économies moyennes" },
              { number: "0€", label: "Coût pour l'entreprise" },
              { number: "100%", label: "Satisfaction client" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à réduire vos coûts énergétiques ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vérifiez votre éligibilité en 2 minutes et découvrez combien vous pouvez économiser
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-neutral-50 transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl"
            >
              <Zap className="w-5 h-5" />
              <span>Vérifier mon éligibilité</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
