import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const College = () => {
  const axes = [
    {
      title: "Excellence Académique",
      desc: "Programme renforcé en maths, français et sciences pour préparer le Brevet avec sérénité.",
      icon: "📚"
    },
    {
      title: "Orientation Active",
      desc: "Bilans personnalisés dès la 4ème pour construire un projet d&apos;avenir solide.",
      icon: "🧭"
    },
    {
      title: "Numérique & IA",
      desc: "Codage Python, bureautique avancée et culture IA intégrés au cursus.",
      icon: "💻"
    },
    {
      title: "Vie Scolaire",
      desc: "Clubs, sport, art et leadership pour développer confiance et autonomie.",
      icon: "🏆"
    }
  ];

  const matieres = [
    "Français renforcé",
    "Mathématiques appliquées",
    "Anglais intensif",
    "Physique-Chimie & SVT",
    "Histoire-Géographie EMC",
    "Informatique / Codage",
    "EPS & Arts",
    "Préparation Brevet"
  ];

  return (
    <div className="flex flex-col w-full bg-[#fafbfc]">

      {/* HERO */}
      <section className="relative bg-[#0047AB] py-28 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w- h- bg-[#FFCC00]/15 rounded-full filter blur-"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-[#FFCC00] font-black tracking-[0.2em] uppercase text- px-4 py-1.5 rounded-full mb-6"
          >
            De la 6ème à la 3ème
          </motion.span>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none whitespace-nowrap"
            style={{fontFamily: 'Georgia, serif'}}
          >
            Le Cycle <span className="text-[#FFCC00]">Collège</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-blue-100/90 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            L&apos;âge des choix décisifs. Nous formons des adolescents rigoureux, curieux et prêts pour le lycée.
          </motion.p>
        </div>
      </section>

      {/* AXES */}
      <section className="relative py-24 -mt-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {axes.map((axe, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="bg-white p-8 rounded- border border-gray-100 shadow-sm hover:shadow-xl transition-all h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-[#0047AB] to-[#002D72] rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    {axe.icon}
                  </div>
                  <h3 className="font-black text-[#0047AB] uppercase text-sm tracking-wide mb-2">{axe.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{axe.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BLOC PRINCIPAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0047AB]/10 to-[#FFCC00]/10 rounded-[2.5rem] blur-2xl"></div>
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-14 border-gray-100 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0047AB] via-[#FFCC00] to-[#0047AB]"></div>

              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-7">
                  <h2 className="text-3xl md:text-4xl font-black text-[#0047AB] uppercase mb-6 tracking-tight" style={{fontFamily: 'Georgia, serif'}}>
                    Construire la réussite au Brevet
                  </h2>
                  <div className="space-y-5 text-gray-600 leading-relaxed">
                    <p>
                      Au CSIG Bangui, le collège est une étape de structuration. Nous passons de l&apos;apprentissage des fondamentaux à la maîtrise des méthodes.
                    </p>
                    <p>
                      Chaque élève bénéficie d&apos;un suivi hebdomadaire, de devoirs surveillés type examen et d&apos;un coaching orientation pour choisir sereinement sa filière au lycée.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="bg-[#F8FAFF] rounded-2xl p-6 border border-[#0047AB]/10">
                    <h4 className="font-black text-[#0047AB] uppercase text-xs tracking-widest mb-4">Programme clé</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {matieres.map((m, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#FFCC00] flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-[#0047AB]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/admission" className="bg-[#0047AB] text-white px-8 py-4 rounded-2xl font-black hover:bg-[#002D72] hover:-translate-y-0.5 transition-all shadow-lg text-center uppercase tracking-wide">
                  S&apos;inscrire au Collège
                </Link>
                <Link to="/contact" className="bg-white border-2 border-[#0047AB] text-[#0047AB] px-8 py-4 rounded-2xl font-black hover:bg-[#0047AB] hover:text-white transition-all text-center uppercase tracking-wide">
                  Visiter le campus
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default College;