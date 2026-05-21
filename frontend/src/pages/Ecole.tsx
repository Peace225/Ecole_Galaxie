import { motion } from 'framer-motion';

const Ecole = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const facilities = [
    {
      title: "Salles de classe multimédias",
      desc: "Des espaces climatisés, équipés de tableaux interactifs pour un apprentissage immersif.",
      img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=1000",
      colSpan: "md:col-span-2",
      height: "h-[400px]"
    },
    {
      title: "Laboratoires Scientifiques",
      desc: "Physique, chimie et SVT : la pratique au cœur de la théorie.",
      img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000",
      colSpan: "md:col-span-1",
      height: "h-[400px]"
    },
    {
      title: "Complexe Sportif",
      desc: "Terrains de football, basketball et arts martiaux pour forger le corps et l'esprit.",
      img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1000",
      colSpan: "md:col-span-1",
      height: "h-[300px]"
    },
    {
      title: "Bibliothèque & Espace Numérique",
      desc: "Un sanctuaire de silence avec des milliers d'ouvrages et des postes informatiques connectés.",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1000",
      colSpan: "md:col-span-2",
      height: "h-[300px]"
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-x-hidden bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="relative z-10 px-6">
          <span className="text-[#FFCC00] font-black tracking-widest uppercase text-xs mb-4 block">Visite Virtuelle</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Notre <span className="text-[#FFCC00]">Cadre de vie</span>
          </h1>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg italic">Un environnement sécurisé, verdoyant et à la pointe de la technologie à Bouaké.</p>
        </motion.div>
      </section>

      {/* --- GRID DES INFRASTRUCTURES --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((fac, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative group rounded-[2rem] overflow-hidden shadow-xl ${fac.colSpan} ${fac.height}`}
              >
                <img src={fac.img} alt={fac.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0047AB] via-[#0047AB]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-10 h-1 bg-[#FFCC00] mb-4 rounded-full group-hover:w-20 transition-all duration-500"></div>
                  <h3 className="text-2xl font-black text-white uppercase mb-2 tracking-tight">{fac.title}</h3>
                  <p className="text-gray-200 text-sm font-medium line-clamp-2">{fac.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Ecole;