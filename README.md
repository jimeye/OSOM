# OSOM - Ouvriers Solidaires d'Outre-Mer

Site web pour OSOM, générateur de leads pour la rénovation énergétique et l'installation de LED dans les DOM-TOM, financé par le dispositif CEE.

## 🚀 Technologies

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icônes)

## 📦 Installation

```bash
# Cloner le projet
git clone <repository-url>
cd osom-website

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

## 🛠️ Commandes disponibles

```bash
# Développement
npm run dev          # Lance le serveur de développement sur http://localhost:3000

# Production
npm run build        # Construit l'application pour la production
npm run start        # Lance l'application en mode production

# Qualité du code
npm run lint         # Vérifie le code avec ESLint
npm run type-check   # Vérifie les types TypeScript
```

## 📁 Structure du projet

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── solutions/         # Page solutions LED
│   ├── cee/              # Page dispositif CEE
│   ├── contact/          # Page contact
│   ├── sitemap.ts        # Sitemap XML
│   ├── robots.ts         # Robots.txt
│   └── manifest.ts       # PWA manifest
├── components/            # Composants réutilisables
│   ├── Navigation.tsx    # Navigation principale
│   └── Footer.tsx        # Footer
└── globals.css           # Styles globaux
```

## 🎨 Design System

### Couleurs
- **Primary**: Vert sauge (#2d9a5a)
- **Secondary**: Bleu-azur (#0ea5e9)
- **Neutral**: Noir carbone (#171717)

### Typographie
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Animations
- **Framer Motion** pour les animations fluides
- **Transitions** CSS pour les interactions
- **Hover effects** subtils et élégants

## 📱 Fonctionnalités

### Pages
- **Accueil** : Hero, avantages, solutions, témoignages
- **Solutions** : LED intérieures et extérieures
- **CEE** : Explication du dispositif
- **Contact** : Formulaire de contact animé

### SEO
- **Meta tags** optimisés
- **Open Graph** pour les réseaux sociaux
- **Sitemap XML** automatique
- **Robots.txt** configuré
- **Structured data** pour les moteurs de recherche

### Performance
- **Core Web Vitals** optimisés
- **Images** optimisées avec Next.js
- **Lazy loading** des composants
- **Code splitting** automatique

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Déploiement automatique
# Connecter le repository GitHub à Vercel
```

### Variables d'environnement
```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://osom.fr
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 Analytics

- **Google Analytics** (à configurer)
- **Google Search Console** (à configurer)
- **Core Web Vitals** monitoring

## 🔧 Configuration

### Tailwind CSS
Configuration personnalisée dans `tailwind.config.ts` avec :
- Palette de couleurs OSOM
- Animations personnalisées
- Typographie Inter

### Framer Motion
Animations fluides et performantes :
- Page transitions
- Scroll animations
- Hover effects
- Loading states

## 📈 Optimisations

- **Images** : Format WebP, lazy loading
- **Fonts** : Google Fonts optimisées
- **CSS** : Tailwind CSS purgé
- **JavaScript** : Code splitting
- **SEO** : Meta tags, sitemap, robots.txt

## 🛡️ Sécurité

- **Headers** de sécurité configurés
- **CSP** (Content Security Policy)
- **HTTPS** obligatoire en production
- **Validation** des formulaires

## 📞 Support

Pour toute question technique :
- **Email** : dev@osom.fr
- **Documentation** : Voir les commentaires dans le code

---

**OSOM** - Ouvriers Solidaires d'Outre-Mer  
*Installation LED professionnelle financée par les CEE dans les DOM-TOM*
