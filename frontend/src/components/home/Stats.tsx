import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

// --- COMPTEUR ANIMÉ ---
const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  // Extraction propre des chiffres
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  
  const spring = useSpring(0, { stiffness: 60, damping: 20 });
  
  // Utilisation de useTransform pour transformer le ressort en valeur entière
  const displayValue = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    spring.set(isInView ? numericValue : 0);
  }, [isInView, numericValue, spring]);

  return (
    <span ref={ref} className="flex items-baseline">
      <motion.span>{displayValue}</motion.span>
      {/* Suffixes gérés séparément pour éviter les erreurs de parsing */}
      <span>{value.includes('%') ? '%' : value.includes('+') ? '+' : ''}</span>
    </span>
  );
};

const Stats = () => {
  const stats = [
    { v: "98%", t: "Taux de Réussite" },
    { v: "1500+", t: "Élèves Épanouis" },
    { v: "50+", t: "Enseignants Experts" },
    { v: "20+", t: "Activités & Clubs" }
  ];

  return (
    <section className="relative z-40 -mt-16 md:-mt-20 container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 p-8 md:p-14 relative overflow-hidden"
      >
        {/* Ligne décorative animée */}
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 left-0 h-1.5 bg-[#FFCC00]"
        ></motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="relative flex flex-col items-center">
              <div className="flex flex-col items-center">
                <h3 className="text-4xl md:text-5xl font-black text-[#0047AB] tracking-tighter mb-2">
                  <AnimatedNumber value={stat.v} />
                </h3>
                <div className="h-1 w-12 bg-[#FFCC00] mb-4 rounded-full"></div>
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em]">
                  {stat.t}
                </span>
              </div>

              {/* Séparateur Desktop */}
              {i !== stats.length - 1 && (
                <div className="hidden lg:block absolute right-[-2rem] top-1/2 -translate-y-1/2 w-px h-16 bg-gray-100"></div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;