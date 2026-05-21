import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Prescolaire = () => {
  const features = [
    { title: "Éveil Sensoriel", desc: "Des ateliers pratiques pour développer les cinq sens.", icon: "🎨" },
    { title: "Bilinguisme Précoce", desc: "Initiation à l&apos;anglais par le jeu et le chant.", icon: "🇬🇧" },
    { title: "Sécurité Maximale", desc: "Un espace clos, sécurisé et adapté aux tout-petits.", icon: "🛡️" },
    { title: "Motricité", desc: "Des aires de jeux conçues pour le développement physique.", icon: "🤸" }
  ];

  return (
    <div className="flex flex-col w-full bg-[#fafbfc]">

      {/* HERO */}
      <section className="relative bg-[#0047AB] py-28 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur- opacity-25 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full filter blur-"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-[#FFCC00] font-black tracking-[0.2em] uppercase text- px-4 py-1.5 rounded-full mb-6"
          >
            Maternelle & Crèche
          </motion.span>

          {/* TITRE SUR UNE SEULE LIGNE */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-none whitespace-nowrap"
            style={{fontFamily: 'Georgia, serif'}}
          >
            Le Cycle <span className="text-[#FFCC00]">Préscolaire</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-blue-100/90 max-w-2xl mx-auto text-lg md:text-xl font-light"
          >
            Le premier pas vers l&apos;excellence commence ici, dans un environnement bienveillant et stimulant.
          </motion.p>
        </div>
      </section>

      {/* CONTENU */}
      <section className="relative py-24 -mt-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
              <h2 className="text-3xl md:text-5xl font-black text-[#0047AB] uppercase tracking-tight" style={{fontFamily: 'Georgia, serif'}}>
                Éveiller le <span className="text-[#FFCC00]">Génie</span> de votre enfant
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#FFCC00] to-amber-400 mx-auto mt-6 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0047AB]/10 to-[#FFCC00]/10 rounded- blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded- text-center border border-gray-100 hover:border-[#0047AB]/20 shadow-sm hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#F0F5FF] to-[#E0EBFF] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-black uppercase mb-3 text-[#0047AB] tracking-wide">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#FFCC00]"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230047AB' fill-opacity='1'%3E%3Cpath d='M0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/svg%3E")`}}></div>

        <div className="relative container mx-auto px-6 text-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="text-3xl md:text-4xl font-black text-[#0047AB] uppercase mb-4" style={{fontFamily: 'Georgia, serif'}}>Prêt pour sa première rentrée?</h2>
            <p className="text-[#0047AB]/80 mb-8">Places limitées pour la petite section</p>
            <Link to="/admission" className="inline-flex items-center gap-2 bg-[#0047AB] text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-[#002D72] hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 uppercase tracking-wide">
              Inscrire mon enfant
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Prescolaire;