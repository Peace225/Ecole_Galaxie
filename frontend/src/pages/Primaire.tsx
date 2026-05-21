import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Primaire = () => {
  const points = [
    "Anglais intensif dès le CP",
    "Informatique et codage",
    "Activités sportives obligatoires",
    "Soutien scolaire gratuit"
  ];

  return (
    <div className="flex flex-col w-full bg-[#fafbfc]">

      {/* HERO */}
      <section className="relative bg-[#0047AB] py-28 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w- h- bg-[#FFCC00]/15 rounded-full filter blur-"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-[#FFCC00] font-black tracking-[0.2em] uppercase text- px-4 py-1.5 rounded-full mb-6"
          >
            Du CP au CM2
          </motion.span>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none whitespace-nowrap"
            style={{fontFamily: 'Georgia, serif'}}
          >
            Le Cycle <span className="text-[#FFCC00]">Primaire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/90 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            Bâtir des fondations solides en lecture, écriture, mathématiques et sciences.
          </motion.p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="relative py-24 -mt-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC00]/20 to-amber-400/20 rounded-[2.5rem] blur-2xl"></div>

            <div className="relative bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 p-8 md:p-14 lg:p-16 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0047AB] via-[#FFCC00] to-[#0047AB]"></div>

              <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#FFCC00]/10 rounded-full"></div>

              <h2 className="text-3xl md:text-4xl font-black text-[#0047AB] uppercase mb-8 tracking-tight" style={{fontFamily: 'Georgia, serif'}}>
                Maîtriser les fondamentaux
              </h2>

              <div className="space-y-6 text-gray-600 text- leading-relaxed">
                <p>
                  Le cycle primaire est l&apos;étape la plus cruciale de la scolarité. Au CSIG Bangui, nous appliquons une pédagogie rigoureuse qui garantit que 100% de nos élèves maîtrisent la lecture et le calcul dès le CE1.
                </p>
                <p>
                  Notre approche combine excellence académique, éveil numérique et développement personnel pour former des élèves autonomes et confiants.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-10">
                {points.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0047AB] to-[#002D72] text-[#FFCC00] flex items-center justify-center font-black shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform">
                      ✓
                    </div>
                    <span className="font-semibold text-gray-800 group-hover:text-[#0047AB] transition-colors">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-14 pt-10 border-t border-gray-100 text-center">
                <Link
                  to="/admission"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#FFCC00] to-amber-400 text-[#0047AB] px-10 py-4 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-[#FFCC00]/30 hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
                >
                  Déposer un dossier
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Primaire;