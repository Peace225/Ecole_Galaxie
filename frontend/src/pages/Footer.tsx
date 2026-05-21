import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.jpg'; // remplace par le logo GALAXY

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const socialLinks = [
    { name: 'Twitter', url: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg> },
    { name: 'Facebook', url: 'https://facebook.com', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
    { name: 'YouTube', url: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.6 31.6 0 000 12a31.6 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.6 0 0024 12a31.6 0 00-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z"/></svg> },
    { name: 'LinkedIn', url: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 0 01.02-5zM3 8.98h4v12H3v-12zM14.5 8.98c-2.21 0-3.5 1.2-4.08 2.04v-1.75H6.5v12h4v-6.6c0-1.75.9-2.9 2.4-2.9 1.4 0 2.1.96 2.1 2.9v6.6h4v-7.4c0-3.9-2.1-5.9-5.5-5.9z"/></svg> },
  ];

  const handleNewsletter = (e) => {
    e.preventDefault();
    // ici ton API
    alert(`Merci ! ${email} inscrit à la newsletter.`);
    setEmail('');
  };

  return (
    <footer className="bg-[#0B2A4A] text-white relative overflow-hidden">
      {/* décor */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0047AB] via-[#FFCC00] to-[#0047AB]"></div>
      
      <div className="container mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* COL 1 - LOGO */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={logo} alt="Galaxy" className="h-20 w-20 rounded-full border-2 border-white/20 object-cover" />
            </Link>
            <h3 className="font-black uppercase text-sm leading-snug tracking-wide">
              COMPLEXE SCOLAIRE<br/>INTERNATIONAL GALAXY
            </h3>
            <p className="text-[#FFCC00] text-xs font-bold mt-2 tracking-widest">PLUS QU&apos;UNE ÉCOLE</p>
          </div>

          {/* COL 2 - CONTACT */}
          <div>
            <h4 className="font-serif text-2xl italic mb-6 text-white">Nous contacter</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-[#FFCC00] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
                <span>9H88+4Q3, Bangui,<br/>République centrafricaine</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#FFCC00]" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/></svg>
                <a href="tel:+23675753375" className="hover:text-[#FFCC00] transition">+236 75 75 33 75</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#FFCC00]" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/></svg>
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

          {/* COL 3 - LIENS */}
          <div>
            <h4 className="font-serif text-2xl italic mb-6 text-white">Liens Importants</h4>
            <ul className="space-y-3 text-sm">
              {[
                { to: "/", label: "Accueil" },
                { to: "/about", label: "Historique" },
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

          {/* COL 4 - NEWSLETTER */}
          <div>
            <h4 className="font-serif text-2xl italic mb-6 text-white leading-tight">Joindre notre<br/>Newsletter</h4>
            <p className="text-white/70 text-sm mb-5 leading-relaxed">
              Inscrivez-vous à notre Newsletter pour recevoir nos nouvelles publications
            </p>
            <form onSubmit={handleNewsletter} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

        {/* COPYRIGHT */}
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