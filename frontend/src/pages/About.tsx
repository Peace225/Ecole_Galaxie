import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import aboutHero from '../assets/hero.jpg';
import directorImg from '../assets/news1.jpeg';
import hero1 from '../assets/csig.jpg';
import hero3 from '../assets/hero3.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

const About = () => {
  return (
    <div className="flex flex-col w-full bg-white">

      {/* HERO */}
      <section className="relative h- flex items-center justify-center bg-[#0047AB]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0047AB]/90 to-transparent z-10"></div>
          <img src={aboutHero} alt="CSIG Bangui" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="text-[#FFCC00] font-black tracking-[0.5em] uppercase text-sm mb-4 block">
              À Bangui, République Centrafricaine
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8">
              CSIG BANGUI, <br />
              <span className="text-[#FFCC00]">L'Excellence Continue.</span>
            </h1>
            <div className="h-2 w-32 bg-[#FFCC00] rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* GENESE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-[#0047AB] font-black tracking-widest text-xs uppercase mb-4 block">
              Notre Identité
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0047AB] uppercase leading-tight mb-8">
              Du Préscolaire au Lycée, <br />
              <span className="text-gray-400 text-3xl md:text-4xl italic normal-case">une même exigence</span>
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Au cœur de Bangui, le <strong>Complexe Scolaire d'Informatique et de Gestion – CSIG BANGUI</strong> est né d'une conviction forte : une éducation de qualité, ancrée dans la discipline et ouverte sur le numérique, transforme les destinées.
              </p>
              <p>
                CSIG, c'est notre ADN : <strong>l'Informatique</strong> pour préparer aux métiers du futur, et la <strong>Gestion</strong> pour former des leaders responsables. De la petite section à la Terminale, nous bâtissons un parcours complet.
              </p>
              <div className="bg-[#F0F5FF] p-6 rounded-2xl border-l-8 border-[#0047AB] font-medium italic text-[#0047AB]">
                "Nous avons commencé avec une vision. Aujourd'hui, du préscolaire au lycée, nous formons les bâtisseurs de la Centrafrique de demain."
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={directorImg}
              alt="Histoire du CSIG Bangui"
              className="rounded- shadow-2xl w-full h- object-cover border-8 border-white"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#0047AB] text-white p-6 rounded-2xl shadow-xl">
              <p className="text-3xl font-black text-[#FFCC00]">CSIG</p>
              <p className="uppercase font-bold text-xs mt-1">Bangui - RCA</p>
            </div>
          </div>
        </div>
      </section>

      {/* VALEURS */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-[#0047AB] uppercase">
              Nos 4 <span className="text-[#FFCC00]">Piliers</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { t: "Excellence", d: "Un standard maintenu du préscolaire au lycée.", i: "🏆" },
              { t: "Discipline", d: "La rigueur comme clé de la liberté.", i: "⚖️" },
              { t: "Innovation", d: "Du numérique au code, pour demain.", i: "🚀" },
              { t: "Intégrité", d: "L'éthique au centre de tout.", i: "🤝" }
            ].map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-[#0047AB] hover:-translate-y-2 transition-all">
                <div className="text-5xl mb-4">{v.i}</div>
                <h3 className="text-xl font-black text-[#0047AB] uppercase mb-2">{v.t}</h3>
                <p className="text-gray-600">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSION */}
      <section className="py-24 bg-[#0047AB] text-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8">
              Une éducation <span className="text-[#FFCC00]">complète</span>
            </h2>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-black uppercase">4 Cycles, 1 Vision</h4>
                <p className="text-blue-200">Préscolaire, Primaire, Collège et Lycée.</p>
              </div>
              <div>
                <h4 className="text-xl font-black uppercase">Bangui au Cœur</h4>
                <p className="text-blue-200">Ancrage local, ambition internationale.</p>
              </div>
            </div>
            <Link to="/admission" className="inline-block mt-10 bg-[#FFCC00] text-[#0047AB] px-8 py-4 rounded-xl font-black uppercase hover:bg-amber-400 transition">
              Inscrire mon enfant
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
             <img src={hero1} className="rounded-3xl h- w-full object-cover" alt="Élève CSIG" />
             <img src={hero3} className="rounded-3xl h- w-full object-cover mt-8" alt="Classe CSIG" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;