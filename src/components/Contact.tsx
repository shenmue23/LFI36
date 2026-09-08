import { Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Newsletter / Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-100 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm"
          >
            <h2 className="text-4xl uppercase text-slate-900 mb-4 font-black tracking-tight">
              Restons <span className="text-cyan-600">Connectés</span>
            </h2>
            <p className="text-slate-600 font-medium mb-8 leading-relaxed">
              Inscrivez-vous pour recevoir les dernières actualités de LFI Indre et nos appels à mobilisation.
            </p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="block text-xs font-black tracking-widest uppercase text-cyan-700 mb-2">
                  Adresse Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 font-medium text-slate-900"
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-cyan-600 text-white font-black uppercase py-4 rounded hover:bg-cyan-700 transition-colors tracking-widest text-sm mt-4 shadow-md shadow-cyan-900/10"
              >
                Rejoindre la boucle
              </button>
            </form>
          </motion.div>

          {/* Socials & Email links */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl uppercase text-slate-900 mb-8 font-black tracking-tight">
              Réseaux <span className="text-cyan-600">Sociaux</span>
            </h2>
            
            <div className="space-y-4">
              <a 
                href="https://www.facebook.com/LaFranceInsoumiseIndre36?locale=fr_FR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4 hover:-translate-y-1 transition-transform shadow-sm hover:shadow-md hover:border-cyan-300 group"
              >
                <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-[#1877F2] group-hover:text-white transition-colors text-slate-600">
                  <Facebook size={24} />
                </div>
                <span className="font-bold text-lg uppercase tracking-tight text-slate-800">Facebook</span>
              </a>
              
              <a 
                href="https://www.instagram.com/lafranceinsoumiseindre/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4 hover:-translate-y-1 transition-transform shadow-sm hover:shadow-md hover:border-cyan-300 group"
              >
                <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-[#f09433] group-hover:via-[#dc2743] group-hover:to-[#bc1888] group-hover:text-white transition-colors text-slate-600">
                  <Instagram size={24} />
                </div>
                <span className="font-bold text-lg uppercase tracking-tight text-slate-800">Instagram</span>
              </a>
              
              <a 
                href="https://x.com/LFI36" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-slate-200 rounded-xl p-4 hover:-translate-y-1 transition-transform shadow-sm hover:shadow-md hover:border-cyan-300 group"
              >
                <div className="bg-slate-100 p-3 rounded-lg group-hover:bg-black group-hover:text-white transition-colors text-slate-600">
                  <Twitter size={24} />
                </div>
                <span className="font-bold text-lg uppercase tracking-tight text-slate-800">X (Twitter)</span>
              </a>
              
              <a 
                href="mailto:franceinsoumiseindre@gmail.com" 
                className="flex items-center gap-4 bg-cyan-50 border border-cyan-100 rounded-xl p-4 hover:-translate-y-1 transition-transform shadow-sm hover:shadow-md hover:bg-cyan-100 group"
              >
                <div className="bg-cyan-600 p-3 rounded-lg text-white">
                  <Mail size={24} />
                </div>
                <span className="font-bold text-lg uppercase tracking-tight text-cyan-900">Nous écrire par Email</span>
              </a>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
