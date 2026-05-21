import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Lycee = () => {
  const filieres = [
    {
      serie: "Série C",
      title: "Mathématiques & Sciences",
      desc: "Pour les esprits analytiques visant ingénierie, médecine, tech.",
      color: "from-[#0047AB] to-[#002D72]",
      badge: "Scientifique"
    },
    {
      serie: "Série D",
      title: "Sciences Expérimentales",
      desc: "SVT renforcée, biologie, santé et environnement.",
      color: "from-emerald-600 to-teal-700",
      badge: "Bio-Santé"
    },
    {
      serie: "Série A4",
      title: "Lettres & Langues",
      desc: "Philosophie, littérature, droit, communication internationale.",
      color: "from-[#FFCC00] to-amber-500",
      badge: "Littéraire"
    }
  ];

  const atouts = [
    "Prépa Bac intensive (sujets blancs mensuels)",
    "Orientation universitaire & bourses",
    "Anglais certifiant & TOEFL prep",
    "Coding avancé, IA, Data",
    "Méthodologie dissertation & grand oral",
    "Coaching concours internationaux",
    "Clubs entrepreneuriat & débat",
    "Suivi psycho-pédagogique"
  ];

  return (
    <div className="flex flex-col w-full bg-[#fafbfc]">

      {/* HERO */}
      <section className="relative bg-[#0047AB] py-28 md:py-40 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w- h- bg-[#FFCC00]/10 rounded-full filter blur- -translate-y-1/3 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w- h- bg-white/5 rounded-full filter blur-"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-[#FFCC00] font-black tracking-[0.2em] uppercase text- px-4 py-1.5 rounded-full mb-6"
          >
            2nde • 1ère • Terminale
          </motion.span>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6 leading-none whitespace-nowrap"
            style={{fontFamily: 'Georgia, serif'}}
          >
            Le Cycle <span className="text-[#FFCC00]">Lycée</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-blue-100/90 max-w-3xl mx-auto text-lg md:text-xl font-light"
          >
            L&apos;excellence pour le Bac et au-delà. Nous formons les leaders de la Centrafrique de demain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 mt-10"
          >
            <div className="text-center">
              <div className="text-3xl font-black text-[#FFCC00]">98%</div>
              <div className="text-xs uppercase tracking-widest text-blue-200">Réussite Bac</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#FFCC00]">3</div>
              <div className="text-xs uppercase tracking-widest text-blue-200">Séries</div>
            </div>
            <div className="w-px h-10 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl font-black text-[#FFCC00]">100%</div>
              <div className="text-xs uppercase tracking-widest text-blue-200">Orientation</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FILIÈRES */}
      <section className="relative py-24 -mt-16">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black text-[#0047AB] uppercase" style={{fontFamily: 'Georgia, serif'}}>Nos Séries du Bac</h2>
            <div className="w-20 h-1 bg-[#FFCC00] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {filieres.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-20 rounded- blur-2xl group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative bg-white rounded- p-8 md:p-10 border border-gray-100 shadow-xl h-full flex flex-col">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text- font-black uppercase tracking-widest bg-gradient-to-r ${f.color} text-white w-fit mb-6`}>
                    {f.badge}
                  </div>
                  <h3 className="text-2xl font-black text-[#0047AB] mb-1">{f.serie}</h3>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">{f.title}</h4>
                  <p className="text-gray-600 flex-grow">{f.desc}</p>
                  <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${f.color} rounded-full group-hover:w-24 transition-all`}></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ATOUTS */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
                <span className="text-[#FFCC00] font-black uppercase text-xs tracking-[0.2em]">Méthode CSIG</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#0047AB] mt-3 mb-6 leading-tight" style={{fontFamily: 'Georgia, serif'}}>
                  Préparer le Bac. Préparer la vie.
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Au lycée CSIG Bangui, nous ne visons pas seulement la mention. Nous construisons un profil universitaire compétitif : grand oral maîtrisé, dossier Parcoursup solide, anglais opérationnel et culture projet.
                </p>
                <Link to="/admission" className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#002D72] transition-all">
                  Candidater en 2nde
                </Link>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {atouts.map((a, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl hover:bg-[#F0F5FF] transition-colors"
                  >
                    <div className="w-6 h-6 rounded-lg bg-[#FFCC00] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-[#0047AB]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span className="text-gray-700 font-medium text-">{a}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002D72] via-[#0047AB] to-[#001a4d]"></div>
        <div className="relative container mx-auto px-6 text-center max-w-3xl">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>Objectif Mention Très Bien</h3>
            <p className="text-blue-100 mb-10 text-lg">Rejoignez la promotion 2026-2027. Places très limitées en Terminale.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/admission" className="bg-[#FFCC00] text-[#0047AB] px-10 py-4 rounded-2xl font-black uppercase tracking-wide hover:bg-white hover:-translate-y-1 transition-all shadow-xl">
                Inscription Lycée
              </Link>
              <Link to="/contact" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-wide hover:bg-white hover:text-[#0047AB] transition-all">
                Parler à l&apos;orientation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Lycee;