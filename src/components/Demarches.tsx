import { motion } from 'motion/react';
import { Search, UserPlus, Megaphone, CheckSquare } from 'lucide-react';

export default function Demarches() {
  const DEMARCHES = [
    {
      title: "Vérifier ma situation",
      icon: <Search size={28} />,
      color: "bg-slate-100 text-slate-800 border-slate-300",
      description: "Vérifiez si vous êtes bien inscrit·e sur les listes électorales de votre commune.",
      actions: [
        {
          label: "Vérifier",
          link: "https://www.elections.interieur.gouv.fr/mes-demarches/je-verifie-ma-situation-electorale",
          btnColor: "bg-slate-800 text-white hover:bg-slate-900"
        }
      ]
    },
    {
      title: "M'inscrire sur les listes",
      icon: <UserPlus size={28} />,
      color: "bg-red-600 text-white border-red-500",
      description: "Pas encore inscrit·e ou récent déménagement ? Choisissez votre méthode d'inscription.",
      actions: [
        {
          label: "En ligne",
          link: "https://inscription-auth.elections.interieur.gouv.fr/login",
          btnColor: "bg-white text-red-600 hover:bg-slate-100"
        },
        {
          label: "Formulaire CERFA",
          link: "https://jevoteilsdegagent.fr/#:~:text=Pr%C3%A9-remplir%20le%20Cerfa%20d%E2%80%99inscription%20sur%20les%20listes%20%C3%A9lectorales",
          btnColor: "bg-red-800 text-white hover:bg-red-900 border border-red-500"
        }
      ]
    },
    {
      title: "Campagne d'inscription",
      icon: <Megaphone size={28} />,
      color: "bg-cyan-600 text-white border-cyan-500",
      description: "Retrouvez tout le matériel pour aider à l'inscription sur les listes électorales.",
      actions: [
        {
          label: "Matériel",
          link: "https://infos.actionpopulaire.fr/fiches/campagne-inscription-listes-electorales/",
          btnColor: "bg-cyan-800 text-white hover:bg-cyan-900 border border-cyan-500"
        }
      ]
    }
  ];

  return (
    <section id="demarches" className="py-24 bg-slate-900 text-white border-t-8 border-cyan-600 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-cyan-900 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgb(8,145,178,0.3)]">
            <CheckSquare size={32} />
          </div>
          <h2 className="text-4xl sm:text-5xl uppercase text-slate-100 mb-6 font-black tracking-tight">
            Voter, c'est <span className="text-cyan-400">décider</span>
          </h2>
          <p className="text-lg font-medium text-slate-300 leading-relaxed">
            Ne laissez pas les autres choisir pour vous. Vérifiez votre situation électorale, inscrivez-vous sur les listes et participez à nos campagnes d'inscription.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DEMARCHES.map((demarche, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={demarche.title}
              className={`flex flex-col items-center text-center p-8 rounded-2xl border h-full shadow-sm ${demarche.color}`}
            >
              <div className="mb-6 bg-white/20 p-4 rounded-full">
                {demarche.icon}
              </div>
              <h3 className="text-xl font-black uppercase tracking-wider mb-4">
                {demarche.title}
              </h3>
              <p className="font-medium opacity-90 mb-8 flex-grow">
                {demarche.description}
              </p>
              <div className="flex flex-col w-full gap-3 mt-auto">
                {demarche.actions.map((action, i) => (
                  <a
                    key={i}
                    href={action.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 font-black uppercase tracking-widest text-sm rounded transition-colors ${action.btnColor}`}
                  >
                    {action.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
