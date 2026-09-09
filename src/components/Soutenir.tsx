import { motion } from 'motion/react';
import { ArrowRight, Heart } from 'lucide-react';

export default function Soutenir() {
  return (
    <section id="soutenir" className="py-12 bg-red-600 overflow-hidden relative">
      {/* Background Phi symbols pattern */}
      <div className="absolute inset-0 opacity-[0.07] flex flex-wrap justify-around items-center gap-10 overflow-hidden pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <img 
            key={i} 
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/LFI_Logo_2024_%28cropped%29.svg" 
            alt="" 
            className="w-24 md:w-48 h-auto transform -rotate-12 select-none brightness-0 invert" 
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between bg-white rounded-2xl p-8 md:p-12 shadow-2xl shadow-red-900/50"
        >
          <div className="mb-8 md:mb-0 md:mr-12">
            <h2 className="text-3xl md:text-4xl uppercase text-slate-900 mb-4 flex items-center gap-4 font-black tracking-tight">
              <Heart className="text-red-600 shrink-0" size={36} /> Soutenir notre mouvement
            </h2>
            <p className="text-slate-600 font-medium text-lg max-w-xl leading-relaxed">
              La France Insoumise ne dépend que de vous. Votre don nous permet de financer nos actions locales dans l'Indre, d'imprimer nos tracts et d'organiser nos événements.
            </p>
          </div>
          
          <div className="shrink-0 w-full md:w-auto flex flex-col gap-4">
            <a 
              href="https://actionpopulaire.fr/financer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-slate-900 text-white font-black tracking-tighter uppercase text-xl px-8 py-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg"
            >
              Faire un don <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-[10px] font-black text-slate-400 text-center uppercase tracking-widest">
              Déductible à 66% des impôts
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
