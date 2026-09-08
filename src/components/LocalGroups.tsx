import { Users, BookOpen, ShieldAlert, BookText, FileText, PlusCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocalGroups() {
  return (
    <section id="groups" className="py-24 bg-slate-900 text-white border-t-8 border-cyan-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl uppercase mb-6 font-black tracking-tight">
            Les <span className="text-cyan-400">Groupes d'Action</span> dans l'Indre
          </h2>
          <p className="text-lg font-medium text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Rejoignez un groupe près de chez vous pour organiser la mobilisation sur le terrain, débattre et militer au quotidien.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800 border border-slate-700 rounded-2xl p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 text-slate-700 opacity-50 pointer-events-none">
            <Users size={250} />
          </div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-cyan-900 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgb(8,145,178,0.3)]">
              <span className="font-serif font-bold text-4xl">φ</span>
            </div>

            <h3 className="font-black uppercase text-3xl mb-6 text-slate-100 tracking-tight">
              Rejoignez le mouvement
            </h3>
            
            <p className="text-slate-300 text-lg leading-relaxed mb-4 max-w-2xl mx-auto">
              Pour des raisons de sécurité, la liste exacte et les contacts des groupes d'action locaux de l'Indre sont exclusivement accessibles sur la plateforme officielle <strong>Action Populaire</strong>.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              Connectez-vous pour trouver le groupe le plus proche de chez vous, ou découvrez notre fonctionnement avec le livret d'accueil.
            </p>
            
            <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
              
              {/* Nouveaux inscrits */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <h4 className="text-xl font-black uppercase text-cyan-400 mb-4 tracking-wider">
                  Je souhaite rejoindre un groupe
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                  <a 
                    href="https://actionpopulaire.fr/groupes/carte/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-cyan-600 text-white font-black uppercase tracking-widest text-sm rounded hover:bg-cyan-500 transition-colors shadow-[0_4px_20px_rgb(8,145,178,0.3)] border border-cyan-500"
                  >
                    <Users size={20} />
                    Trouver un groupe
                  </a>

                  <a 
                    href="https://infos.actionpopulaire.fr/wp-content/uploads/2024/03/livret-accueil.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-slate-700 text-white font-bold uppercase tracking-widest text-sm border-2 border-slate-600 rounded hover:bg-slate-600 hover:border-slate-400 transition-colors"
                  >
                    <BookOpen size={20} />
                    Livret d'accueil
                  </a>

                  <a 
                    href="https://infos.actionpopulaire.fr/wp-content/uploads/2024/02/Brochure-Militer-en-securite.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-slate-700 text-white font-bold uppercase tracking-widest text-sm border-2 border-slate-600 rounded hover:bg-slate-600 hover:border-slate-400 transition-colors"
                  >
                    <ShieldAlert size={20} />
                    Militer en sécurité
                  </a>
                </div>
              </div>

              {/* Créer / Animer un groupe */}
              <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50">
                <h4 className="text-xl font-black uppercase text-red-400 mb-4 tracking-wider">
                  Je souhaite animer ou créer un groupe
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
                  <a 
                    href="https://actionpopulaire.fr/groupes/creer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-transparent text-white font-bold uppercase tracking-widest text-sm border-2 border-red-500/50 hover:border-red-500 rounded hover:bg-red-500/10 transition-colors"
                  >
                    <PlusCircle size={20} />
                    Créer un groupe
                  </a>

                  <a 
                    href="https://infos.actionpopulaire.fr/wp-content/uploads/2023/08/Livret-de-lanimateur-et-de-lanimatrice-2023.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-slate-700 text-white font-bold uppercase tracking-widest text-sm border-2 border-slate-600 rounded hover:bg-slate-600 hover:border-slate-400 transition-colors"
                  >
                    <BookText size={20} />
                    Livret animateur
                  </a>

                  <a 
                    href="https://infos.actionpopulaire.fr/fiches/#elementor-toc__heading-anchor-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 py-4 px-6 bg-slate-700 text-white font-bold uppercase tracking-widest text-sm border-2 border-slate-600 rounded hover:bg-slate-600 hover:border-slate-400 transition-colors"
                  >
                    <FileText size={20} />
                    Fiches pratiques
                  </a>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
