import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-50 opacity-60 rounded-bl-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h1 className="text-6xl sm:text-7xl lg:text-[96px] leading-[0.85] font-black italic tracking-tighter mb-8 text-slate-900 uppercase">
              L'Union Populaire <br />
              <span className="text-cyan-600 inline-block mt-3">dans l'Indre</span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Rejoignez le mouvement de La France Insoumise. Agissons ensemble pour la rupture écologique et sociale dans notre département. <span className="font-serif italic font-bold text-cyan-600">φ</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://actionpopulaire.fr/groupes/carte/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white font-black text-xl uppercase px-8 py-4 tracking-tighter shadow-lg shadow-red-200 hover:bg-red-700 transition-colors flex items-center justify-center gap-3"
              >
                Rejoindre l'Action
              </a>
              <a 
                href="https://programme.lafranceinsoumise.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white font-black text-xl uppercase px-8 py-4 tracking-tighter hover:bg-slate-800 transition-colors flex items-center justify-center"
              >
                Notre Programme
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-12 mt-16 max-w-2xl mx-auto">
              <div className="border-l-4 border-cyan-500 pl-4 text-left">
                <span className="block text-4xl font-black text-slate-900">4</span>
                <span className="text-sm font-bold uppercase text-slate-400">Groupes Locaux</span>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4 text-left">
                <span className="block text-4xl font-black text-slate-900">250+</span>
                <span className="text-sm font-bold uppercase text-slate-400">Insoumis·es</span>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4 text-left">
                <span className="block text-4xl font-black text-slate-900">3</span>
                <span className="text-sm font-bold uppercase text-slate-400">Actions ce mois</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
