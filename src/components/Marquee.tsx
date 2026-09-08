import { motion } from 'motion/react';

export default function Marquee() {
  const text = "L'AVENIR EN COMMUN • NOUVEAU FRONT POPULAIRE • LA FRANCE INSOUMISE INDRE • ";
  
  return (
    <div className="bg-cyan-600 text-white overflow-hidden py-4 border-y-4 border-cyan-800 flex whitespace-nowrap relative z-20">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ 
          repeat: Infinity, 
          ease: "linear", 
          duration: 20 
        }}
        className="flex"
      >
        <span className="text-3xl font-black uppercase tracking-widest mx-4">
          {text}
        </span>
        <span className="text-3xl font-black uppercase tracking-widest mx-4">
          {text}
        </span>
        <span className="text-3xl font-black uppercase tracking-widest mx-4">
          {text}
        </span>
        <span className="text-3xl font-black uppercase tracking-widest mx-4">
          {text}
        </span>
      </motion.div>
    </div>
  );
}
