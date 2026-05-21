import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Secondaire = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="bg-[#0047AB] py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[#FFCC00] font-black tracking-widest uppercase text-xs mb-4 block">Collège & Lycée</motion.span>
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-6xl font-black text-white uppercase mb-6">Le Cycle <span className="text-[#FFCC00]">Secondaire</span></motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-blue-100 max-w-2xl mx-auto text-lg">Préparer l'élite de demain aux meilleurs diplômes et universités (BEPC, BAC).</motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-16 border-t-8 border-[#0047AB]">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
              <h2 className="text-3xl font-black text-[#0047AB] uppercase">Le tremplin vers <br/>l'Enseignement Supérieur</h2>
              <div className="bg-[#FFCC00] p-6 rounded-2xl text-center">
                <span className="block text-4xl font-black text-[#0047AB]">98%</span>
                <span className="text-xs font-bold uppercase tracking-widest">Taux de réussite au BAC</span>
              </div>
            </div>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>De la 6ème à la Terminale, notre exigence monte d'un cran. Les élèves sont préparés non seulement à exceller aux examens nationaux, mais aussi à développer un esprit critique et analytique indispensable pour l'université.</p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {[{t: "Séries Scientifiques", d: "Séries C & D avec TP en laboratoires."}, {t: "Séries Littéraires", d: "Série A avec renforcement linguistique."}, {t: "Orientation", d: "Cellule d'accompagnement post-bac."}].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                    <h4 className="font-black text-[#0047AB] mb-2">{item.t}</h4>
                    <p className="text-sm">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
export default Secondaire;