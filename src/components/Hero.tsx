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
            <p className="text-xl sm:text-2xl font-medium text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed flex items-center justify-center flex-wrap gap-x-2">
              <span>Rejoignez le mouvement de La France Insoumise. Agissons ensemble pour la rupture écologique et sociale dans notre département.</span>
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fc/LFI_Logo_2024_%28cropped%29.svg" alt="LFI" className="inline-block h-6 w-auto -mt-1" />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://actionpopulaire.fr/"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
