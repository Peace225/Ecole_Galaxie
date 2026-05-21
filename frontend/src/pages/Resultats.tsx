import { motion } from 'framer-motion';

const Resultats = () => {
  const stats = [
    { label: "CEPE", valeur: "98%", detail: "Réussite 2025" },
    { label: "BEPC", valeur: "92%", detail: "47% mentions" },
    { label: "BAC", valeur: "89%", detail: "Séries A, C, D" },
    { label: "Lauréats", valeur: "15", detail: "Distinctions" },
  ];

  return (
    <div className="bg-[#fafbfc] text-[#0047AB] overflow-hidden">
      
      {/* SECTION HÉROS : Minimaliste et statutaire avec fond image */}
<section 
  className="relative py-32 px-6 overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "linear-gradient(rgba(0, 71, 171, 0.9), rgba(0, 71, 171, 0.9)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000')" }}
>
  <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-end justify-between gap-12 text-white">
    <div className="space-y-6">
      <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} className="flex items-center gap-3">
        <span className="w-12 h-px bg-[#FFCC00]"></span>
        <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FFCC00]">Performance Institutionnelle</span>
      </motion.div>
      <h1 className="text-7xl md:text-8xl font-black tracking-tighter" style={{ fontFamily: 'Georgia, serif' }}>
        Nos <br /> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Résultats</span>
      </h1>
    </div>
    <p className="max-w-xs text-lg font-light leading-relaxed border-l-2 border-[#FFCC00] pl-6 text-blue-100">
      L'excellence académique comme moteur de notre écosystème pédagogique.
    </p>
  </div>
</section>

      {/* STATS : Design épuré sans bordures */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: i*0.2}} className="text-center">
              <h3 className="text-5xl md:text-6xl font-black mb-3">{s.valeur}</h3>
              <p className="text-xs uppercase tracking-widest font-bold text-[#FFCC00] mb-1">{s.label}</p>
              <p className="text-sm text-gray-400">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PALMARÈS : Layout asymétrique élégant */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <div className="absolute -left-10 -top-10 w-24 h-24 bg-[#FFCC00]/20 rounded-full blur-2xl"></div>
            <h2 className="text-5xl font-black mb-8" style={{ fontFamily: 'Georgia, serif' }}>Un palmarès <br/> d'exception</h2>
            <p className="text-gray-500 leading-relaxed text-lg">
              Chaque année, nos élèves se distinguent sur la scène nationale, témoignant de la rigueur et de la qualité de notre encadrement.
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              { annee: "2025", desc: "1er Concours de Dictée Bangui" },
              { annee: "2024", desc: "3 Mentions Très Bien au BAC" },
              { annee: "2024", desc: "Champion Football Scolaire U17" },
              { annee: "2023", desc: "Prix Informatique Olympiades RCA" },
            ].map((item, i) => (
              <div key={i} className="flex gap-8 group">
                <span className="text-4xl font-black text-gray-200 group-hover:text-[#FFCC00] transition-colors">{item.annee}</span>
                <div className="pt-3">
                  <p className="text-xl font-bold">{item.desc}</p>
                  <div className="w-0 group-hover:w-full h-px bg-[#0047AB] transition-all duration-500 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resultats;