'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  CheckCircle, 
  Zap, 
  Shield, 
  Building, 
  Users,
  ArrowRight,
  Clock,
  Award,
  TrendingUp,
  Leaf,
  Euro
} from 'lucide-react';

export default function CEEPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Le dispositif CEE
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Les Certificats d'Économies d'Énergie permettent de financer vos travaux d'éclairage 
              sans aucun coût pour votre entreprise
            </p>
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>100% Gratuit pour votre entreprise</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Qu'est-ce que les CEE */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                Qu'est-ce que les CEE ?
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Les Certificats d'Économies d'Énergie (CEE) sont un dispositif national français 
                qui oblige les fournisseurs d'énergie à réaliser des économies d'énergie. 
                Ils financent vos travaux d'éclairage LED.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: "Dispositif national",
                    description: "Obligation légale des fournisseurs d'énergie depuis 2006"
                  },
                  {
                    icon: <Euro className="w-6 h-6" />,
                    title: "Financement intégral",
                    description: "Vos travaux sont entièrement pris en charge par les CEE"
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Certification officielle",
                    description: "Travaux réalisés par des professionnels certifiés RGE"
                  }
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-primary-500 mt-1">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-1">
                        {point.title}
                      </h3>
                      <p className="text-neutral-600">
                        {point.description}
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
                Comment ça fonctionne ?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium text-neutral-900">Votre entreprise est éligible</p>
                    <p className="text-sm text-neutral-600">Nous vérifions votre éligibilité au dispositif CEE</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium text-neutral-900">Audit énergétique gratuit</p>
                    <p className="text-sm text-neutral-600">Nos experts calculent les économies potentielles</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium text-neutral-900">Installation LED</p>
                    <p className="text-sm text-neutral-600">Travaux réalisés par nos équipes certifiées</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-500 text-white rounded-full flex items-center text-sm font-bold">4</div>
                  <div>
                    <p className="font-medium text-neutral-900">Certification CEE</p>
                    <p className="text-sm text-neutral-600">Nous nous occupons de toute la paperasserie</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Éligibilité */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Qui peut en bénéficier ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Toutes les entreprises des DOM-TOM peuvent bénéficier du dispositif CEE
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="w-8 h-8" />,
                title: "Entreprises",
                description: "Toutes les entreprises privées et publiques des DOM-TOM",
                color: "text-blue-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collectivités",
                description: "Mairies, conseils régionaux, établissements publics",
                color: "text-green-500"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Associations",
                description: "Associations et organisations à but non lucratif",
                color: "text-purple-500"
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className={`${category.color} mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {category.title}
                </h3>
                <p className="text-neutral-600">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Secteurs d'activité */}
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
              Secteurs d'activité éligibles
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Tous les secteurs d'activité peuvent bénéficier du dispositif CEE
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Agriculture",
              "Hôtellerie",
              "Commerce",
              "Restauration",
              "Industrie",
              "Logistique",
              "Bureaux",
              "Santé"
            ].map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary-50 p-4 rounded-lg text-center"
              >
                <p className="font-medium text-primary-700">{sector}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages CEE */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
              Avantages du dispositif CEE
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Des bénéfices concrets pour votre entreprise et l'environnement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Euro className="w-8 h-8" />,
                title: "100% Gratuit",
                description: "Aucun coût pour votre entreprise, tout est financé par les CEE",
                color: "text-green-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Économies immédiates",
                description: "Réduction immédiate de votre facture d'électricité",
                color: "text-blue-500"
              },
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Impact environnemental",
                description: "Réduction de votre empreinte carbone et consommation énergétique",
                color: "text-green-600"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Processus simplifié",
                description: "Nous nous occupons de toute la paperasserie administrative",
                color: "text-purple-500"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Certification officielle",
                description: "Travaux réalisés par des professionnels certifiés RGE",
                color: "text-orange-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Garantie qualité",
                description: "Produits et installation garantis selon les normes CEE",
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
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
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

      {/* Timeline du processus */}
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
              Timeline du processus CEE
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Un processus simple et transparent en 4 étapes
            </p>
          </motion.div>

          <div className="relative">
            {/* Ligne de connexion */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Contact & Éligibilité",
                  description: "Nous vérifions votre éligibilité au dispositif CEE",
                  duration: "24h"
                },
                {
                  step: "2",
                  title: "Audit Énergétique",
                  description: "Calcul des économies potentielles et devis gratuit",
                  duration: "1 semaine"
                },
                {
                  step: "3",
                  title: "Installation LED",
                  description: "Travaux réalisés par nos équipes certifiées",
                  duration: "1-2 semaines"
                },
                {
                  step: "4",
                  title: "Certification CEE",
                  description: "Dossier CEE finalisé, vous n'avez rien à payer",
                  duration: "2-4 semaines"
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative bg-white p-6 rounded-xl shadow-lg border-2 border-transparent hover:border-primary-200 transition-all duration-300"
                >
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-3">
                      {step.description}
                    </p>
                    <div className="flex items-center text-primary-600 text-sm font-medium">
                      <Clock className="w-4 h-4 mr-1" />
                      {step.duration}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Prêt à bénéficier du dispositif CEE ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vérifiez votre éligibilité et découvrez combien vous pouvez économiser
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
