import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Importation des composants de section
import Stats from '../components/home/Stats';
import News from '../components/home/News';
import Levels from '../components/home/Levels';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';
import Partners from '../components/home/Partners';

// Images pour le Hero
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero.jpg';
import hero3 from '../assets/hero3.jpg';

const Home = () => {
  const slides = [hero1, hero2, hero3];
  const [currentSlide, setCurrentSlide] = useState(0);

  // Défilement automatique optimisé
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Passé à 6s pour une meilleure lecture du texte
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      
      {/* --- SECTION 1: HERO (CARROUSEL) --- */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-[#0047AB] group">
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="absolute inset-0 bg-[#0047AB]/50 z-10"></div>
              <img src={slide} alt={`Slide CSIG ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Boutons de navigation */}
        <button onClick={prevSlide} className="absolute left-4 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#FFCC00] hover:text-[#0047AB] transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={nextSlide} className="absolute right-4 z-30 p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#FFCC00] hover:text-[#0047AB] transition-all opacity-0 group-hover:opacity-100 hidden md:block">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
        </button>

        {/* Contenu Hero */}
        <div className="container mx-auto px-6 relative z-20 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">
              Bâtir l'Avenir au <br /> <span className="text-[#FFCC00]">Cœur de Bangui</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100 font-light max-w-2xl italic">
              Bienvenue au CSIG Bangui. Excellence académique, rigueur et innovation pour former les leaders centrafricains de demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/admission" className="bg-[#FFCC00] text-[#0047AB] px-10 py-4 rounded-xl font-black text-lg hover:bg-yellow-400 transition transform hover:-translate-y-1 shadow-xl text-center">
                NOUS REJOINDRE
              </Link>
              <Link to="/about" className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-[#0047AB] transition transform hover:-translate-y-1 text-center">
                NOTRE VISION
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTIONS --- */}
      <Stats />
      <News />
      <Levels />
      <Testimonials />
      <Partners />
      <CTA />

    </div>
  );
};

export default Home;