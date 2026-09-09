import { Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Form / Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-100 p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center h-full"
        >
          <h2 className="text-4xl uppercase text-slate-900 mb-4 font-black tracking-tight">
            Restons <span className="text-cyan-600">Connectés</span>
          </h2>
          <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-xl">
            Vous avez une question, une proposition, ou vous souhaitez participer activement ? N'hésitez pas à nous envoyer un message directement, nous vous répondrons dans les plus brefs délais.
          </p>
          
          <a 
            href="mailto:franceinsoumiseindre@gmail.com"
            className="w-full sm:w-auto px-12 flex items-center justify-center gap-3 bg-cyan-600 text-white font-black uppercase py-5 rounded hover:bg-cyan-700 transition-colors tracking-widest text-sm shadow-md shadow-cyan-900/10"
          >
            <Mail size={20} />
            Nous contacter par email
          </a>
        </motion.div>

      </div>
    </section>
  );
}
