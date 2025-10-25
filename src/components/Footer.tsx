import Link from 'next/link';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-green-500" />
              </div>
              <span className="text-xl font-bold">OSOM</span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed">
              Ouvriers Solidaires d'Outre-Mer. Installation LED professionnelle 
              financée par les CEE dans les DOM-TOM.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/33123456789?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20les%20solutions%20LED%20OSOM%20dans%20les%20DOM-TOM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-green-500 transition-colors"
                title="Contactez-nous sur WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5 text-green-500" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5 text-green-500" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5 text-green-500" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  LED Intérieures
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  LED Extérieures
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Rénovation Énergétique
                </Link>
              </li>
              <li>
                <Link href="/cee" className="text-neutral-300 hover:text-white transition-colors text-sm">
                  Dispositif CEE
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones d'intervention */}
          <div>
            <h3 className="font-semibold text-lg mb-4">DOM-TOM</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Guadeloupe</li>
              <li>Martinique</li>
              <li>Guyane</li>
              <li>Réunion</li>
              <li>Mayotte</li>
              <li>Nouvelle-Calédonie</li>
              <li>Polynésie Française</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-neutral-300">contact@osom.fr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-neutral-300">+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-500" />
                <span className="text-sm text-neutral-300">DOM-TOM</span>
              </div>
              <a 
                href="https://wa.me/33123456789?text=Bonjour%2C%20je%20souhaite%20un%20audit%20gratuit%20pour%20mes%20économies%20d%27énergie%20avec%20OSOM" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 mt-4"
              >
                <MessageCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              © 2024 OSOM - Ouvriers Solidaires d'Outre-Mer. Tous droits réservés.
            </p>
            <div className="flex space-x-6">
              <Link href="/mentions-legales" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/confidentialite" className="text-sm text-neutral-400 hover:text-white transition-colors">
                Confidentialité
              </Link>
              <Link href="/cgv" className="text-sm text-neutral-400 hover:text-white transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
