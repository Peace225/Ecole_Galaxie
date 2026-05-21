import { Link } from 'react-router-dom';

const Levels = () => {
  const levels = [
    { l: 'Préscolaire', i: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800', d: 'Éveil, créativité et premiers pas vers la connaissance dans un cadre sécurisant.' },
    { l: 'Primaire', i: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800', d: 'Acquisition des fondamentaux, épanouissement intellectuel et construction d\'une base solide.' },
    { l: 'Secondaire', i: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=800', d: 'Rigueur académique, orientation stratégique et préparation aux défis de demain.' }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Élément décoratif en fond */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFCC00]/5 rounded-full blur-[150px] -mr-40 -mt-40"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-[#0047AB] bg-[#0047AB]/5 px-6 py-2 rounded-full font-bold text-[10px] tracking-[0.25em] uppercase">
            Parcours académique
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0047AB] uppercase tracking-tighter mt-6">
            Nos Cycles d'Apprentissage
          </h2>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,71,171,0.15)] hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image avec Overlay premium */}
              <div className="h-[400px] overflow-hidden relative">
                <img 
                  src={item.i} 
                  alt={item.l}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002D72]/90 via-[#002D72]/20 to-transparent"></div>
                
                {/* Contenu sur image */}
                <div className="absolute bottom-10 left-10 right-10">
                  <span className="text-[#FFCC00] font-black text-xs uppercase tracking-[0.2em] mb-2 block">Cycle {idx + 1}</span>
                  <h3 className="text-3xl font-black text-white uppercase leading-tight mb-4">{item.l}</h3>
                  <p className="text-blue-100 text-sm font-medium leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {item.d}
                  </p>
                </div>
              </div>

              {/* Bouton d'action intégré en bas de carte */}
              <div className="absolute bottom-8 right-8 z-20">
                <Link 
                  to="/admission" 
                  className="flex items-center justify-center w-14 h-14 rounded-full bg-[#FFCC00] text-[#002D72] shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Levels;