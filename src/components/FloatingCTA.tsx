import { Heart } from 'lucide-react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function FloatingCTA() {
  const { scrollYProgress } = useScroll();
  
  // Hide the CTA when at the very top (in hero) or very bottom (in footer)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 1],
    [0, 1, 1, 0]
  );
  const pointerEvents = useTransform(
    scrollYProgress,
    [0, 0.05, 0.9, 1],
    ["none", "auto", "auto", "none"]
  );

  return (
    <motion.a
      href="#soutenir"
      style={{ opacity, pointerEvents }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-red-600 text-white font-black tracking-tighter uppercase px-6 py-4 rounded hover:-translate-y-1 hover:bg-red-700 hover:shadow-lg shadow-md transition-all group"
    >
      <Heart className="shrink-0" fill="currentColor" size={24} />
      <span className="hidden md:inline-block tracking-wider text-lg">Soutenir</span>
    </motion.a>
  );
}
