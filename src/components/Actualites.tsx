import { motion } from 'motion/react';
import { Newspaper, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

export default function Actualites() {
  const SOCIALS = [
    {
      name: "Facebook",
      icon: <Facebook size={32} />,
      linkNational: "https://www.facebook.com/lafranceinsoumise/",
      linkLocal: "https://www.facebook.com/LaFranceInsoumiseIndre36/?locale=fr_FR",
      color: "bg-blue-600",
      description: "Suivez nos actions locales, nos reportages et nos directs."
    },
    {
      name: "Twitter / X",
      icon: <Twitter size={32} />,
      linkNational: "https://twitter.com/FranceInsoumise",
      linkLocal: "https://x.com/LFI36",
      color: "bg-slate-900",
      description: "Toute l'actualité politique et nos prises de position en temps réel."
    },
    {
      name: "Instagram",
      icon: <Instagram size={32} />,
      linkNational: "https://www.instagram.com/lafranceinsoumise/",
      linkLocal: "https://www.instagram.com/lafranceinsoumiseindre/",
      color: "bg-pink-600",
      description: "Les images de nos mobilisations sur le terrain et en manifestation."
    }
  ];

  return (
    <section id="presse" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="mb-16">
          <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Newspaper size={40} />
          </div>
          <h2 className="text-4xl sm:text-5xl uppercase text-slate-900 mb-6 font-black tracking-tight">
            Dernières <span className="text-cyan-600">Actualités</span>
          </h2>
          <p className="text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Pour ne rien manquer de l'actualité de <strong>La France Insoumise</strong>, de nos communiqués et de nos actions dans l'Indre, retrouvez-nous en direct sur nos réseaux sociaux !
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {SOCIALS.map((social, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              key={social.name}
              className={`flex flex-col items-center justify-center p-8 rounded-2xl text-white shadow-lg h-full ${social.color}`}
            >
              <div className="mb-4">
                {social.icon}
              </div>
              <h3 className="text-2xl font-black uppercase tracking-wider mb-3">
                {social.name}
              </h3>
              <p className="font-medium text-white/90 text-center mb-8">
                {social.description}
              </p>
              <div className="mt-auto flex flex-col w-full gap-3">
                <a 
                  href={social.linkLocal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs bg-white text-slate-900 px-4 py-3 rounded hover:bg-slate-100 transition-colors shadow-sm"
                >
                  LFI Indre (36) <ArrowRight size={14} />
                </a>
                <a 
                  href={social.linkNational}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 font-bold uppercase tracking-widest text-xs bg-white/20 text-white px-4 py-3 rounded hover:bg-white/30 transition-colors"
                >
                  National <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <a
            href="https://linsoumission.fr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 sm:p-12 bg-slate-50 rounded-2xl shadow-xl hover:bg-slate-100 transition-colors group border-t-8 border-red-600 text-center"
          >
            <div className="mb-8 w-full flex justify-center">
              <img 
                src="https://linsoumission.fr/wp-content/uploads/2020/02/insoumission_LogoLong.png" 
                alt="L'insoumission" 
                className="w-full max-w-xs sm:max-w-lg lg:max-w-2xl h-auto object-contain"
              />
            </div>
            <p className="text-slate-700 font-medium text-lg sm:text-xl max-w-2xl mb-8">
              Le média en ligne de La France Insoumise. Retrouvez des articles, analyses, et décryptages exclusifs de l'actualité politique et sociale.
            </p>
            <div className="shrink-0 flex items-center gap-2 bg-red-600 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-lg group-hover:bg-red-500 transition-colors shadow-[0_8px_30px_rgb(220,38,38,0.3)]">
              Lire le média <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
