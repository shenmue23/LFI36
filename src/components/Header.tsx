import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Démarches', href: '#demarches' },
    { name: 'Actions', href: '#events' },
    { name: 'Porte-Voix', href: '#representants' },
    { name: 'Groupes d\'action', href: '#groups' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b-[6px] border-cyan-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <img 
              src="https://github.com/LFI36/Chateauroux-Populaire-2027/blob/main/451210797_873343874827803_5704456469701416320_n.jpg?raw=true" 
              alt="Logo LFI Indre" 
              className="w-12 h-12 rounded-full border-2 border-cyan-600 object-cover"
            />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">LFI Indre</span>
              <span className="text-xs font-bold text-cyan-700 tracking-widest uppercase">L'Union Populaire</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 font-bold text-sm uppercase tracking-tight text-slate-900">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-cyan-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://actionpopulaire.fr/connexion/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cyan-600 underline decoration-4 decoration-cyan-400 underline-offset-8 transition-colors"
            >
              Espace Pop!
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-slate-900 border-t-4 border-cyan-600 overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-xl font-black tracking-tighter uppercase hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://actionpopulaire.fr/connexion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-600 text-white text-center px-6 py-4 uppercase font-black tracking-tighter mt-4 rounded hover:bg-cyan-700 transition-colors"
              >
                Espace Pop!
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

