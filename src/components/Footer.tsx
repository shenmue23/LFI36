export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/50 pt-16 pb-8 border-t-4 border-cyan-600 text-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="font-black text-2xl uppercase tracking-tighter text-white">
                LFI <span className="text-cyan-400">Indre</span>
              </span>
            </div>
            <p className="text-white/40 mb-6 leading-relaxed">
              Site militant de La France Insoumise pour le département de l'Indre (36). Agissons ensemble pour l'avenir.
            </p>
            <a 
              href="https://actionpopulaire.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-cyan-700 text-white px-6 py-2 uppercase font-black tracking-widest text-[10px] rounded hover:bg-cyan-600 transition-colors"
            >
              Action Populaire
            </a>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-6 text-white/70">Liens Utiles</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://actionpopulaire.fr/connexion/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Espace Pop!
                </a>
              </li>
              <li>
                <a href="https://infos.actionpopulaire.fr/wp-content/uploads/2024/03/livret-accueil.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Livret d'accueil militant (PDF)
                </a>
              </li>
              <li>
                <a href="https://infos.actionpopulaire.fr/wp-content/uploads/2024/02/Brochure-Militer-en-securite.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Militer en sécurité (PDF)
                </a>
              </li>
              <li>
                <a href="https://infos.actionpopulaire.fr/wp-content/uploads/2023/08/Livret-de-lanimateur-et-de-lanimatrice-2023.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Livret de l'animateur·ice (PDF)
                </a>
              </li>
              <li>
                <a href="https://infos.actionpopulaire.fr/fiches/#elementor-toc__heading-anchor-1" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  Fiches pratiques
                </a>
              </li>
              <li>
                <a href="https://lafranceinsoumise.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  La France Insoumise (National)
                </a>
              </li>
              <li>
                <a href="https://linsoumission.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  L'insoumission (Le média)
                </a>
              </li>
              <li>
                <a href="https://programme.lafranceinsoumise.fr/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  L'Avenir en Commun (Programme)
                </a>
              </li>
              <li>
                <a href="https://melenchon2027.fr" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                  melenchon2027.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-[10px] mb-6 text-white/70">Démarches</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://www.elections.interieur.gouv.fr/mes-demarches/je-verifie-ma-situation-electorale" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Vérifier son inscription électorale
                </a>
              </li>
              <li>
                <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/R16396" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  S'inscrire sur les listes électorales
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 uppercase tracking-[0.2em] text-[10px] font-bold">
          <p>
            L'Avenir en Commun — Coordination Indre (36)
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
