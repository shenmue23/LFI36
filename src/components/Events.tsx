import { MapPin, Loader2, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Events() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLocateAndRedirect = () => {
    setIsLoading(true);
    
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLoading(false);
          const { latitude, longitude } = position.coords;
          window.open(`https://actionpopulaire.fr/evenements/carte/?lat=${latitude}&lng=${longitude}`, '_blank', 'noopener,noreferrer');
        },
        (error) => {
          setIsLoading(false);
          console.error("Erreur de géolocalisation:", error);
          window.open("https://actionpopulaire.fr/evenements/carte/", '_blank', 'noopener,noreferrer');
        },
        { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
      );
    } else {
      setIsLoading(false);
      window.open("https://actionpopulaire.fr/evenements/carte/", '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="events" className="py-24 bg-gray-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-2 border-cyan-600 rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden"
        >
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 text-cyan-50 opacity-50 pointer-events-none">
            <Calendar size={250} />
          </div>

          <div className="relative z-10">
            <div className="w-20 h-20 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calendar size={40} />
            </div>
            
            <h2 className="text-3xl sm:text-4xl uppercase text-slate-900 mb-6 font-black tracking-tight">
              Agenda <span className="text-cyan-600">Militant</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
              Retrouvez toutes les actions, réunions publiques, tractages et événements organisés par La France insoumise près de chez vous.
            </p>

            <button 
              onClick={handleLocateAndRedirect}
              disabled={isLoading}
              className="inline-flex items-center justify-center gap-3 bg-cyan-600 text-white font-black uppercase tracking-widest text-lg py-5 px-8 sm:px-12 rounded hover:bg-cyan-500 transition-colors shadow-[0_8px_30px_rgb(8,145,178,0.3)] hover:shadow-[0_8px_30px_rgb(8,145,178,0.5)] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  Localisation en cours...
                </>
              ) : (
                <>
                  <MapPin size={24} />
                  Trouver les événements autour de moi
                </>
              )}
            </button>
            <p className="text-sm text-slate-400 mt-4 font-medium">
              Vous serez redirigé vers la carte officielle d'Action Populaire.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
