import { motion } from 'framer-motion';

const MissionVision = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="flex flex-col w-full bg-[#fafbfc] overflow-x-hidden">

      {/* HERO PREMIUM */}
      <section className="relative bg-[#0047AB] py-28 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w- h- bg-[#FFCC00]/20 rounded-full filter blur-"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]" style={{fontFamily: 'Georgia, serif'}}>
              Mission <span className="text-[#FFCC00]">&</span> Vision
            </h1>
            <div className="h-1.5 w-24 bg-gradient-to-r from-[#FFCC00] to-amber-400 mx-auto mt-8 rounded-full shadow-[0_0_20px_rgba(255,204,0,0.5)]"></div>
          </motion.div>
        </div>
      </section>

      {/* CARDS */}
      <section className="relative py-24 -mt-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid lg:grid-cols-2 gap-8 md:gap-12"
          >

            {/* MISSION */}
            <motion.div variants={item} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0047AB]/20 to-blue-600/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#F0F5FF] rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0047AB] to-[#002D72] text-[#FFCC00] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-blue-900/20 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-[#0047AB] uppercase mb-4 tracking-tight" style={{fontFamily: 'Georgia, serif'}}>Notre Mission</h2>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug border-l-4 border-[#FFCC00] pl-4">
                    &quot;Offrir une éducation intégrale de classe mondiale à Bangui.&quot;
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Notre mission quotidienne est de fournir un environnement d&apos;apprentissage stimulant, sécuritaire et inclusif. Nous nous engageons à cultiver l&apos;excellence académique tout en développant le caractère, la créativité et le sens des responsabilités de chaque élève, de la maternelle jusqu&apos;au baccalauréat.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* VISION */}
            <motion.div variants={item} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC00]/30 to-amber-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white p-10 md:p-14 rounded-[2.5rem] shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-amber-50 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#FFCC00] to-amber-500 text-[#0047AB] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-black text-[#0047AB] uppercase mb-4 tracking-tight" style={{fontFamily: 'Georgia, serif'}}>Notre Vision</h2>

                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 leading-snug border-l-4 border-[#0047AB] pl-4">
                    &quot;Devenir l&apos;institution de référence en Afrique Centrale.&quot;
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    Nous aspirons à être reconnus comme le creuset des futurs leaders centrafricains. Une institution pionnière dans l&apos;intégration du numérique, du bilinguisme et du développement durable, où chaque élève diplômé est prêt à briller dans les meilleures universités du monde.
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default MissionVision;