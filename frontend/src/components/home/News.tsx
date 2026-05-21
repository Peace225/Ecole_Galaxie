import { Link } from 'react-router-dom';
import newsImg1 from '../../assets/news1.jpeg';
import newsImg2 from '../../assets/news2.jpeg';
import newsImg3 from '../../assets/news3.jpeg';

const News = () => {
  const articles = [
    { 
      id: 1, 
      date: "15 Mai 2026", 
      cat: "Excellence", 
      title: "Remise des diplômes du CSIG", 
      img: newsImg1, 
      desc: "Célébration du mérite et du travail acharné de nos élèves." 
    },
    { 
      id: 2, 
      date: "10 Mai 2026", 
      cat: "Innovation", 
      title: "Nouveau Laboratoire Numérique", 
      img: newsImg2, 
      desc: "Un espace dédié à la programmation pour les élèves du CSIG." 
    },
    { 
      id: 3, 
      date: "05 Mai 2026", 
      cat: "Sport", 
      title: "Tournoi inter-écoles de Bangui", 
      img: newsImg3, 
      desc: "Victoire de nos équipes de football lors du tournoi régional." 
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        
        {/* EN-TÊTE DE SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[#FFCC00] font-black tracking-[0.2em] uppercase text-sm mb-2 block">Actualités</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0047AB] uppercase tracking-tighter">
              Vie du CSIG Bangui
            </h2>
            <p className="text-gray-500 text-lg italic border-l-4 border-[#FFCC00] pl-6 py-2 mt-4">
              Suivez le quotidien de notre établissement, nos réussites et nos moments forts.
            </p>
          </div>
          <Link to="/actualites" className="group flex items-center gap-3 bg-[#F0F5FF] text-[#0047AB] px-8 py-4 rounded-full font-black hover:bg-[#0047AB] hover:text-white transition-all duration-300 shadow-sm whitespace-nowrap">
            Voir tous les articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
          </Link>
        </div>

        {/* GRILLE D'ARTICLES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {articles.map((news) => (
            <article key={news.id} className="group bg-white rounded-[2rem] border border-gray-100 shadow-xl hover:-translate-y-3 transition-all duration-500 overflow-hidden">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={news.img} 
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                />
                <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-[#0047AB] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                  {news.cat}
                </span>
              </div>
              <div className="p-8">
                <p className="text-[#FFCC00] text-xs font-bold mb-3 flex items-center gap-2">
                  📅 {news.date}
                </p>
                <h3 className="text-xl font-black text-[#0047AB] mb-4 uppercase leading-tight group-hover:text-[#0047AB]/80 transition-colors">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {news.desc}
                </p>
                <Link to={`/actualites/${news.id}`} className="inline-flex items-center gap-2 text-[#0047AB] font-black text-[10px] uppercase tracking-[0.2em] border-b-2 border-[#FFCC00] hover:border-[#0047AB] transition-colors">
                  Lire l'article
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;