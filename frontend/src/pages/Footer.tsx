import { Link } from 'react-router-dom';
import { useState, FormEvent, ChangeEvent } from 'react';
import logo from '../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState<string>('');

  const socialLinks = [
    { 
      name: 'Twitter', 
      url: '#', 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1 -1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1 -5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg> 
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com', 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> 
    },
    { 
      name: 'YouTube', 
      url: '#', 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/></svg> 
    },
    { 
      name: 'LinkedIn', 
      url: '#', 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg> 
    },
  ];

  const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Merci ! ${email} inscrit à la newsletter.`);
    setEmail('');
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="bg-[#0B2A4A] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0047AB] via-[#FFCC00] to-[#0047AB]"></div>
      
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo Section */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Galaxy" className="h-20 w-20 rounded-full border-2 border-white/20 object-cover" />
            </Link>
            <h3 className="font-black uppercase text-sm leading-snug tracking-wide">
              COMPLEXE SCOLAIRE<br/>INTERNATIONAL GALAXY
            </h3>
            <p className="text-[#FFCC00] text-xs font-bold mt-2 tracking-widest">PLUS QU'UNE ÉCOLE</p>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-serif text-2xl italic mb-6 text-white">Nous contacter</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-[#FFCC00] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 1 1 9.9 9.9L10 18.9l-4.95-4.95a7 7 0 0 1 0-9.9zM10 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" clipRule="evenodd"/></svg>
                <span>9H88+4Q3, Bangui,<br/>République centrafricaine</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#FFCC00]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.54 1.06l-1.548.773a11.037 11.037 0 0 0 6.105 6.105l.774-1.548a1 1 0 0 1 1.059-.54l4.435.74a1 1 0 0 1 .836.986V17a1 1 0 0 1-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <a href="tel:+23675753375" className="hover:text-[#FFCC00] transition">+236 75 75 33 75</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#FFCC00]" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0 -1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z"/></svg>
                <a href="mailto:Info@ecolegalaxy.org" className="hover:text-[#FFCC00] transition">Info@ecolegalaxy.org</a>
              </li>
            </ul>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}
                  className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#0B2A4A] hover:border-[#FFCC00] transition-all">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-serif text-2xl italic mb-6 text-white">Liens Importants</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Accueil" },
                { to: "/qui-sommes-nous", label: "Historique" },
                { to: "/activites", label: "Activités" },
                { to: "/actualites", label: "Actualités" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="flex items-center gap-2 text-white/80 hover:text-[#FFCC00] transition group">
                    <span className="text-[#FFCC00] group-hover:translate-x-0.5 transition-transform">›</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="font-serif text-2xl italic mb-6 text-white leading-tight">Joindre notre<br/>Newsletter</h4>
            <p className="text-white/70 text-sm mb-5 leading-relaxed">
              Inscrivez-vous à notre Newsletter pour recevoir nos nouvelles publications
            </p>
            <form onSubmit={handleNewsletter} className="relative">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Votre email"
                required
                className="w-full bg-transparent border border-white/30 rounded-xl py-3.5 pl-4 pr-28 text-sm text-white placeholder-white/50 focus:outline-none focus:border-[#FFCC00] transition"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 px-5 bg-[#C1272D] hover:bg-red-700 text-white text-sm font-bold rounded-lg transition">
                Souscrire
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-white/50 text-xs">
            © {currentYear} <span className="text-white font-semibold">Complexe Scolaire International Galaxy</span>. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;