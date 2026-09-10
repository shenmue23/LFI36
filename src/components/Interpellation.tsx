import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, Check, Send, Users, CheckSquare, Square } from 'lucide-react';

const TARGET_CATEGORIES = [
  {
    title: "Députés de l'Indre",
    targets: [
      { id: "dep1", name: "François Jolivet", role: "Député (1ère circo.)", email: "francois.jolivet@assemblee-nationale.fr" },
      { id: "dep2", name: "Alix Fruchon", role: "Députée (2ème circo.)", email: "alix.fruchon@assemblee-nationale.fr" }
    ]
  },
  {
    title: "Sénateurs de l'Indre",
    targets: [
      { id: "sen1", name: "Nadine Bellurot", role: "Sénatrice", email: "n.bellurot@senat.fr" },
      { id: "sen2", name: "Frédérique Gerbaud", role: "Sénatrice", email: "f.gerbaud@senat.fr" }
    ]
  },
  {
    title: "Région et Département",
    targets: [
      { id: "reg", name: "François Bonneau", role: "Président Région", email: "francois.bonneau@centre-valdeloire.fr" },
      { id: "dep", name: "Marc Fleuret", role: "Président du Département", email: "marc.fleuret@indre.fr" }
    ]
  },
  {
    title: "Maires et Agglomération",
    targets: [
      { id: "mai1", name: "Gil Avérous", role: "Maire de Châteauroux & Pdt Métropole", email: "gil.averous@chateauroux-metropole.fr" },
      { id: "mai2", name: "Julien Dubot", role: "Maire d'Issoudun", email: "mairie@issoudun.fr" },
      { id: "mai3", name: "Nicolas Forissier", role: "Maire de La Châtre", email: "contact@mairie-lachatre.fr" },
      { id: "mai4", name: "Gilles Lherpinière", role: "Maire du Blanc", email: "mairie@ville-leblanc.fr" },
      { id: "mai5", name: "Vincent Millan", role: "Maire d'Argenton-sur-Creuse", email: "contact@mairie-argenton-sur-creuse.fr" }
    ]
  }
];

export default function Interpellation() {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [mailSubject, setMailSubject] = useState("Interpellation citoyenne - Urgence sociale et démocratique");
  const [mailBody, setMailBody] = useState(
    "Madame, Monsieur,\n\nEn tant que citoyen(ne) du département de l'Indre, je vous interpelle aujourd'hui pour vous faire part de ma profonde inquiétude face à la situation sociale, écologique et démocratique de notre territoire.\n\nJe vous demande de prendre vos responsabilités et d'agir concrètement pour la défense de nos services publics, de notre pouvoir de vivre et de notre environnement.\n\nDans l'attente de votre réponse et de vos actes, je vous prie d'agréer mes salutations citoyennes."
  );

  const allEmails = TARGET_CATEGORIES.flatMap(cat => cat.targets.map(t => t.email));
  const isAllSelected = selectedEmails.length === allEmails.length && allEmails.length > 0;

  const toggleEmail = (email: string) => {
    setSelectedEmails(prev => 
      prev.includes(email) 
        ? prev.filter(e => e !== email)
        : [...prev, email]
    );
  };

  const toggleSelectAll = () => {
    if (isAllSelected) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(allEmails);
    }
  };

  const generateMailtoLink = () => {
    const to = selectedEmails.join(',');
    const subject = encodeURIComponent(mailSubject);
    const body = encodeURIComponent(mailBody);
    return `mailto:${to}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="interpellation" className="py-24 bg-cyan-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
          >
            <Users size={18} />
            Campagne d'Action
          </motion.div>
          <h2 className="text-4xl sm:text-5xl uppercase font-black tracking-tight mb-6">
            Faites pression sur <span className="text-cyan-400">les élus</span>
          </h2>
          <p className="text-xl font-medium text-cyan-100/80 max-w-2xl mx-auto leading-relaxed">
            Ne laissez pas les décideurs locaux ignorer la voix du peuple. Sélectionnez les élus que vous souhaitez interpeller directement par email.
          </p>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-md border border-cyan-800/50 rounded-3xl p-6 md:p-10 shadow-2xl">
          <div className="flex justify-between items-center mb-8 pb-6 border-b border-cyan-800/50">
            <h3 className="text-2xl font-bold">1. Choisissez vos cibles</h3>
            <button 
              onClick={toggleSelectAll}
              className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-900/30 px-4 py-2 rounded-lg"
            >
              {isAllSelected ? <CheckSquare size={18} /> : <Square size={18} />}
              {isAllSelected ? 'Tout désélectionner' : 'Tout sélectionner'}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            {TARGET_CATEGORIES.map((category, idx) => (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h4 className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">{category.title}</h4>
                <div className="flex flex-col gap-3">
                  {category.targets.map(target => {
                    const isSelected = selectedEmails.includes(target.email);
                    return (
                      <button
                        key={target.id}
                        onClick={() => toggleEmail(target.email)}
                        className={`flex items-center gap-4 p-3 rounded-xl border text-left transition-all duration-200 ${
                          isSelected 
                            ? 'bg-cyan-600/20 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.2)]' 
                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected ? 'bg-cyan-500 border-cyan-500' : 'border-white/30'
                        }`}>
                          {isSelected && <Check size={14} className="text-white" />}
                        </div>
                        <div>
                          <div className={`font-bold ${isSelected ? 'text-white' : 'text-slate-300'}`}>{target.name}</div>
                          <div className={`text-xs ${isSelected ? 'text-cyan-200' : 'text-slate-500'}`}>{target.role}</div>
                        </div>
                      </button>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mb-10 pb-10 border-b border-cyan-800/50">
            <h3 className="text-2xl font-bold mb-6">2. Personnalisez votre message <span className="text-sm font-normal text-cyan-400 ml-2">(Optionnel)</span></h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-cyan-300 uppercase tracking-wider mb-2">Sujet de l'email</label>
                <input 
                  type="text" 
                  value={mailSubject}
                  onChange={(e) => setMailSubject(e.target.value)}
                  className="w-full bg-black/30 border border-cyan-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-cyan-300 uppercase tracking-wider mb-2">Corps du message</label>
                <textarea 
                  value={mailBody}
                  onChange={(e) => setMailBody(e.target.value)}
                  rows={6}
                  className="w-full bg-black/30 border border-cyan-800 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-y"
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-slate-300">
              <span className="font-black text-3xl text-white mr-2">{selectedEmails.length}</span> 
              élu{selectedEmails.length > 1 ? 's' : ''} sélectionné{selectedEmails.length > 1 ? 's' : ''}
            </div>
            
            <a
              href={selectedEmails.length > 0 ? generateMailtoLink() : '#'}
              onClick={(e) => {
                if (selectedEmails.length === 0) {
                  e.preventDefault();
                  alert("Veuillez sélectionner au moins un élu à interpeller.");
                }
              }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedEmails.length > 0
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-600/25 hover:-translate-y-1'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed'
              }`}
            >
              <Send size={20} />
              Générer l'email
            </a>
          </div>
          
          <p className="text-center text-xs text-cyan-200/50 mt-8">
            En cliquant sur le bouton, votre application de messagerie par défaut s'ouvrira avec les destinataires et le texte pré-remplis.
          </p>

        </div>
      </div>
    </section>
  );
}
