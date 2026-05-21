import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setMobileMenuOpen(null);
  };

  const toggleMobileMenu = (menu: string) => {
    setMobileMenuOpen(mobileMenuOpen === menu? null : menu);
  };

  const niveaux = [
    { name: 'Préscolaire', to: '/prescolaire', color: 'bg-pink-100 text-pink-700' },
    { name: 'Primaire', to: '/primaire', color: 'bg-green-100 text-green-700' },
    { name: 'Collège', to: '/college', color: 'bg-blue-100 text-blue-700' },
    { name: 'Lycée', to: '/lycee', color: 'bg-purple-100 text-purple-700' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-sm sticky top-0 z-50 border-b border-gray-100">

      {/* --- TOP BAR --- */}
      <div className="bg-gradient-to-r from-[#0047AB] to-[#002D72] text-white text-xs">
        <div className="container mx-auto px-4 h-9 flex justify-between items-center">
          <div className="hidden md:flex items-center gap-6 font-medium">
            <span className="opacity-90 tracking-widest uppercase">Excellence • Discipline • Réussite</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6 w-full md:w-auto justify-between md:justify-end">
            <div className="hidden md:flex items-center gap-5">
              <Link to="/parents" className="hover:text-[#FFCC00] transition">Espace Parents</Link>
              <Link to="/faq" className="hover:text-[#FFCC00] transition">FAQ</Link>
              <Link to="/contact" className="hover:text-[#FFCC00] transition">Contact</Link>
            </div>
            <Link
              to="/login"
              className="bg-[#FFCC00] hover:bg-amber-400 text-[#003399] px-4 py-1.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 text-"
            >
              Espace Numérique
            </Link>
          </div>
        </div>
      </div>

      {/* --- MAIN NAVBAR --- */}
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="relative shrink-0">
            <img
              src={logo}
              alt="Logo CSIG BANGUI"
              className="h-14 w-14 object-contain rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300 ring-2 ring-[#0047AB]/10"
            />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FFCC00] rounded-full border-2 border-white"></span>
          </div>
          <span className="text- sm:text- font-black text-[#0047AB] tracking-tight leading-none whitespace-nowrap group-hover:text-[#003399] transition">
            CSIG BANGUI
          </span>
        </Link>

        {/* Menu Bureau */}
        <div className="hidden lg:flex items-center gap-1 text- font-semibold">

          {/* --- NOUVEAU DROPDOWN À PROPOS --- */}
          <div className="relative group">
            <button className="px-4 py-2.5 flex items-center gap-1 text-gray-700 hover:text-[#0047AB] rounded-lg hover:bg-gray-50 transition">
              À propos de nous
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 top-full pt-3 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
                <Link to="/qui-sommes-nous" className="block px-4 py-3 hover:bg-[#F5F8FF] hover:text-[#0047AB] transition">Qui sommes-nous</Link>
                <Link to="/activites" className="block px-4 py-3 hover:bg-[#F5F8FF] hover:text-[#0047AB] transition border-t border-gray-50">Activités</Link>
                <Link to="/resultats" className="block px-4 py-3 hover:bg-[#F5F8FF] hover:text-[#0047AB] transition border-t border-gray-50">Nos résultats</Link>
              </div>
            </div>
          </div>

          {/* L'Établissement */}
          <div className="relative group">
            <button className="px-4 py-2.5 flex items-center gap-1 text-gray-700 hover:text-[#0047AB] rounded-lg hover:bg-gray-50 transition">
              L'Établissement
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 top-full pt-3 w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
                <Link to="/mot-du-directeur" className="block px-4 py-3 hover:bg-[#F5F8FF] hover:text-[#0047AB] transition">Mot du Directeur</Link>
                <Link to="/ecole" className="block px-4 py-3 hover:bg-[#F5F8FF] hover:text-[#0047AB] transition border-t border-gray-50">L'École</Link>
                <Link to="/mission-vision" className="block px-4 py-3 hover:bg-[#F5F8FF] hover:text-[#0047AB] transition border-t border-gray-50">Mission & Vision</Link>
                <Link to="/projet-educatif" className="block px-4 py-3 hover:bg-[#F5F8FF] hover:text-[#0047AB] transition border-t border-gray-50">Projet éducatif</Link>
              </div>
            </div>
          </div>

          {/* Programmes */}
          <div className="relative group">
            <button className="px-4 py-2.5 flex items-center gap-1 text-gray-700 hover:text-[#0047AB] rounded-lg hover:bg-gray-50 transition">
              Programmes
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div className="absolute left-0 top-full pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-2">
                {niveaux.map((n) => (
                  <Link key={n.name} to={n.to} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition group/item">
                    <span className="text-gray-700 group-hover/item:text-[#0047AB]">{n.name}</span>
                    <span className={`text- px-2 py-1 rounded-full font-bold ${n.color}`}>CSIG</span>
                  </Link>
                ))}
                <div className="h-px bg-gray-100 my-2"></div>
                <Link to="/reglement-interieur" className="block px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-[#0047AB] text-sm">Règlement intérieur</Link>
              </div>
            </div>
          </div>

          <Link to="/admission" className="px-4 py-2.5 text-gray-700 hover:text-[#0047AB] rounded-lg hover:bg-gray-50 transition">
            Admissions
          </Link>
          <Link to="/actualites" className="px-4 py-2.5 text-gray-700 hover:text-[#0047AB] rounded-lg hover:bg-gray-50 transition">
            Actualités
          </Link>

          <Link to="/courses" className="ml-2 bg-gradient-to-r from-[#FFCC00] to-amber-400 text-[#003399] px-5 py-2.5 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all">
            Informatique
          </Link>
        </div>

        {/* Hamburger */}
        <button className="lg:hidden p-2.5 text-[#0047AB] hover:bg-[#F5F8FF] rounded-xl transition" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* --- MENU MOBILE --- */}
      {isOpen && (
        <div className="lg:hidden absolute w-full bg-white/95 backdrop-blur-xl border-t shadow-2xl max-h- overflow-y-auto">
          <div className="px-5 py-4">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {niveaux.map(n => (
                <Link key={n.name} to={n.to} onClick={closeMenu} className={`${n.color} text-center py-2 rounded-xl font-bold text-sm`}>
                  {n.name}
                </Link>
              ))}
            </div>

            <div className="space-y-1 text-[#003399] font-semibold">

              {/* --- MOBILE DROPDOWN À PROPOS --- */}
              <div>
                <button onClick={() => toggleMobileMenu('apropos')} className="flex justify-between w-full py-3 border-b border-gray-100">
                  À propos de nous
                  <svg className={`w-5 h-5 transition ${mobileMenuOpen === 'apropos'? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileMenuOpen === 'apropos' && (
                  <div className="bg-gray-50 rounded-xl p-3 my-2 space-y-2 text-sm">
                    <Link to="/qui-sommes-nous" onClick={closeMenu} className="block py-1.5">Qui sommes-nous</Link>
                    <Link to="/activites" onClick={closeMenu} className="block py-1.5">Activités</Link>
                    <Link to="/resultats" onClick={closeMenu} className="block py-1.5">Nos résultats</Link>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => toggleMobileMenu('etablissement')} className="flex justify-between w-full py-3 border-b border-gray-100">
                  L'Établissement
                  <svg className={`w-5 h-5 transition ${mobileMenuOpen === 'etablissement'? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
                {mobileMenuOpen === 'etablissement' && (
                  <div className="bg-gray-50 rounded-xl p-3 my-2 space-y-2 text-sm">
                    <Link to="/mot-du-directeur" onClick={closeMenu} className="block py-1.5">Mot du Directeur</Link>
                    <Link to="/ecole" onClick={closeMenu} className="block py-1.5">L'École</Link>
                    <Link to="/mission-vision" onClick={closeMenu} className="block py-1.5">Mission & Vision</Link>
                  </div>
                )}
              </div>

              <Link to="/admission" onClick={closeMenu} className="block py-3 border-b border-gray-100">Admissions</Link>
              <Link to="/actualites" onClick={closeMenu} className="block py-3 border-b border-gray-100">Actualités</Link>

              <Link to="/courses" onClick={closeMenu} className="block mt-4 text-center bg-[#FFCC00] text-[#003399] py-3 rounded-xl font-black">
                Cours d'Informatique
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;