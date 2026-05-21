import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Conteneur Premium : Fond sombre sophistiqué */}
        <div className="relative overflow-hidden bg-[#002D72] rounded-[3rem] p-12 md:p-24 text-center border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,71,171,0.3)]">
          
          {/* Effets de lumière cinétiques (Glows) */}
          <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#FFCC00]/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#0047AB]/30 rounded-full blur-[120px]"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block py-1 px-4 mb-6 rounded-full bg-[#FFCC00]/20 text-[#FFCC00] font-bold text-xs uppercase tracking-[0.3em] backdrop-blur-sm border border-[#FFCC00]/30">
              Admission 2026-2027
            </span>
            
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
              L'Excellence est notre <br />
              <span className="text-[#FFCC00] italic">seule promesse</span>
            </h2>
            
            <p className="text-blue-100/70 text-lg md:text-2xl font-light mb-14 max-w-2xl mx-auto">
              Rejoignez le CSIG Bangui et offrez à votre enfant une éducation d'élite au sein d'un environnement innovant.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                to="/admission" 
                className="group relative overflow-hidden bg-[#FFCC00] text-[#002D72] px-10 py-5 rounded-2xl font-black text-lg transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(255,204,0,0.3)]"
              >
                <span className="relative z-10">DÉPOSER UN DOSSIER</span>
              </Link>
              
              <Link 
                to="/contact" 
                className="group bg-transparent border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-[#002D72] transition-all duration-300"
              >
                NOUS CONTACTER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;