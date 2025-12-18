import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1: Infos */}
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">La Maison des Pains</h3>
            <p className="text-gray-300 mb-4">
              Boulangerie artisanale depuis 1987.<br />
              Le goût du vrai pain, fait avec amour et tradition.
            </p>
            <div className="flex space-x-4">
              {/* Social Icons Placeholders */}
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">Instagram</a>
            </div>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/produits" className="text-gray-300 hover:text-primary transition-colors">Nos Produits</Link>
              </li>
              <li>
                <Link href="/histoire" className="text-gray-300 hover:text-primary transition-colors">Notre Histoire</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Contact & Horaires */}
          <div>
            <h3 className="text-lg font-bold mb-4 font-serif">Nous Trouver</h3>
            <p className="text-gray-300 mb-2">
              23 rue de la Liberté<br />
              21800 Quetigny
            </p>
            <p className="text-gray-300 mb-4">
              <a href="tel:0380XXXXXX" className="hover:text-primary transition-colors">03 80 XX XX XX</a>
            </p>
            <div className="text-sm text-gray-400">
              <p>Lun - Sam : 06h - 19h</p>
              <p>Dimanche : 06h - 13h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} La Maison des Pains. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Mentions Légales</Link>
            <Link href="/mentions-legales" className="hover:text-white transition-colors">Politique de Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

