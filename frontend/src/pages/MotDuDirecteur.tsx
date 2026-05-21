import { motion } from 'framer-motion';
import directorImg from '../assets/news1.jpeg';

const MotDuDirecteur = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#fafbfc]">

      {/* HERO */}
      <section className="relative bg-[#0047AB] text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur- opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full filter blur-"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
          <motion.span
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-block text-[#FFCC00] font-black tracking-[0.25em] uppercase text-xs mb-4 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
          >
            Direction
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-[0.9]"
            style={{fontFamily: 'Georgia, serif'}}
          >
            Le Mot du <span className="text-[#FFCC00]">Directeur</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-[#FFCC00] to-amber-400 mx-auto rounded-full"
          />
        </div>
      </section>

      {/* CONTENU */}
      <section className="relative py-20 md:py-28 -mt-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-0">

              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative bg-gradient-to-br from-[#0047AB] to-[#002D72] p-8 md:p-12 flex flex-col justify-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#FFCC00] rounded-3xl rotate-3 scale-105 opacity-20"></div>
                  <img
                    src={directorImg}
                    alt="Directeur CSIG Bangui"
                    className="relative z-10 w-full aspect-[4/5] object-cover rounded-3xl shadow-2xl"
                  />
                </div>

                <div className="mt-8 text-white relative z-10">
                  <h3 className="font-black text-2xl">M. Le Directeur</h3>
                  <p className="text-[#FFCC00] text-sm font-bold uppercase tracking-widest mt-1">Fondateur CSIG Bangui</p>
                </div>
              </motion.div>

              {/* Texte */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                className="lg:col-span-7 p-8 md:p-12 lg:p-16"
              >
                <motion.div variants={fadeUp} className="text-7xl text-[#FFCC00]/30 font-serif leading-none -mt-4 mb-2">“</motion.div>

                <motion.h2
                  variants={fadeUp}
                  className="text-2xl md:text-3xl font-black text-[#0047AB] leading-snug mb-8"
                  style={{fontFamily: 'Georgia, serif'}}
                >
                  Bienvenue au Complexe Scolaire d&apos;Informatique et de Gestion de Bangui.
                </motion.h2>

                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <motion.p variants={fadeUp}>
                    Chers parents, chers élèves,
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    C&apos;est avec une immense fierté que je vous accueille au <strong className="text-[#0047AB]">CSIG Bangui</strong>. Depuis notre implantation en République Centrafricaine, notre mission reste inchangée : offrir à notre jeunesse un enseignement d&apos;excellence qui allie rigueur académique, maîtrise du numérique et valeurs citoyennes.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Dans un monde en mutation, nous ne formons pas seulement des élèves pour réussir des examens. Nous formons des leaders, des innovateurs et des bâtisseurs pour la Centrafrique de demain.
                  </motion.p>
                  <motion.p variants={fadeUp}>
                    Au CSIG, chaque enfant bénéficie d&apos;un suivi personnalisé, d&apos;infrastructures modernes et d&apos;un corps enseignant dévoué. Votre confiance est notre plus grande responsabilité.
                  </motion.p>

                  <motion.blockquote
                    variants={fadeUp}
                    className="relative my-8 pl-6 py-4 bg-[#FFCC00]/5 border-l-4 border-[#FFCC00] rounded-r-xl"
                  >
                    <p className="text-[#0047AB] font-semibold italic text-lg">
                      &quot;L&apos;éducation est l&apos;arme la plus puissante pour changer le monde. Au CSIG, nous l&apos;aiguisons chaque jour.&quot;
                    </p>
                  </motion.blockquote>
                </div>

                <motion.div variants={fadeUp} className="mt-10 pt-8 border-t border-gray-100">
                  <p className="font-black text-[#0047AB] uppercase tracking-wider">Le Directeur Fondateur</p>
                  <p className="text-sm text-gray-500 mt-1">CSIG Bangui – Depuis 2015</p>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotDuDirecteur;