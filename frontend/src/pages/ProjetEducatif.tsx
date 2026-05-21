import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjetEducatif = () => {
  const pillars = [
    {
      title: "Bilinguisme Intégré",
      subtitle: "Préparer des citoyens du monde",
      desc: "Dès le préscolaire, nos élèves sont immergés dans un environnement franco-anglais. L'objectif n'est pas seulement d'apprendre une langue, mais de penser, de rêver et de résoudre des problèmes dans une perspective internationale.",
      img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200",
      icon: "🌍"
    },
    {
      title: "Culture Numérique",
      subtitle: "Le code est le nouveau langage",
      desc: "Laboratoires informatiques, initiation au codage et utilisation responsable de l'Intelligence Artificielle. Nos élèves ne sont pas de simples consommateurs de technologie, ils apprennent à la créer et à la maîtriser.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
      icon: "💻"
    },
    {
      title: "Suivi Personnalisé",
      subtitle: "Aucun talent laissé pour compte",
      desc: "Chaque enfant évolue à son rythme. Grâce à nos effectifs réduits, nos enseignants identifient rapidement les forces et les axes d'amélioration de chaque élève pour un accompagnement sur-mesure.",
      img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=1200",
      icon: "🎯"
    }
  ];

  return (
    <div className="flex flex-col w-full bg-[#fafbfc] overflow-x-hidden">

      {/* HERO */}
      <section className="relative bg-white py-24 md:py-32 text-center border-b border-gray-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0047AB]/5 via-transparent to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative container mx-auto px-6 max-w-4xl"
        >
          <span className="inline-block bg-[#0047AB]/5 text-[#0047AB] font-black tracking-[0.2em] uppercase text- px-4 py-1.5 rounded-full border border-[#0047AB]/10 mb-6">
            Notre Pédagogie
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#0047AB] uppercase tracking-tighter mb-6 leading-[0.9]" style={{fontFamily: 'Georgia, serif'}}>
            Le Projet <span className="text-[#FFCC00] relative">Éducatif
              <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#FFCC00]/30" viewBox="0 0 200 8" fill="none"><path d="M0 4c50-3 100-3 150 0s50 3 100 0" stroke="currentColor" strokeWidth="3"/></svg>
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Une approche innovante qui place l&apos;enfant au centre de son apprentissage pour en faire un adulte accompli.
          </p>
        </motion.div>
      </section>

      {/* BLOCS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 max-w-6xl space-y-24 md:space-y-32">
          {pillars.map((pillar, index) => (
            <div key={index} className={`flex flex-col ${index % 2!== 0? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: index % 2!== 0? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="w-full lg:w-[52%] relative group"
              >
                <div className={`absolute -inset-4 bg-gradient-to-br from-[#FFCC00]/20 to-amber-400/20 rounded-[2.5rem] ${index % 2!== 0? '-rotate-3' : 'rotate-3'} group-hover:rotate-0 transition-transform duration-700 blur-xl`}></div>
                <div className="relative">
                  <img src={pillar.img} alt={pillar.title} className="relative z-10 rounded- shadow-2xl w-full h- object-cover" />
                  <div className={`absolute -bottom-6 ${index % 2!== 0? '-left-6' : '-right-6'} z-20 w-20 h-20 bg-gradient-to-br from-[#0047AB] to-[#002D72] text-white rounded-2xl flex items-center justify-center text-3xl shadow-xl border-4 border-white group-hover:scale-110 group-hover:-rotate-6 transition-transform`}>
                    {pillar.icon}
                  </div>
                </div>
              </motion.div>

              {/* Texte */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="w-full lg:w-[48%]"
              >
                <span className="text-[#FFCC00] font-black uppercase tracking-[0.2em] text-xs">{pillar.subtitle}</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#0047AB] mt-3 mb-5 leading-[1.1] tracking-tight" style={{fontFamily: 'Georgia, serif'}}>
                  {pillar.title}
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-[#0047AB] to-[#FFCC00] rounded-full mb-6"></div>
                <p className="text-gray-600 text- leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0047AB] via-[#003399] to-[#001a4d]"></div>
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}}></div>

        <div className="relative container mx-auto px-6 text-center">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{fontFamily: 'Georgia, serif'}}>Convaincu par notre méthode?</h2>
            <p className="text-blue-100 mb-10 max-w-xl mx-auto">Rejoignez la famille CSIG Bangui dès aujourd&apos;hui.</p>
            <Link to="/admission" className="group inline-flex items-center gap-3 bg-[#FFCC00] text-[#0047AB] px-10 py-4 rounded-2xl font-black text-lg hover:bg-white hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-1 uppercase tracking-wide">
              Inscrire mon enfant
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ProjetEducatif;