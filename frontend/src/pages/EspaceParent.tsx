import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const EspaceParent = () => {
  const [credentials, setCredentials] = useState({ identifiant: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulation d'une connexion au serveur (API)
    setTimeout(() => {
      setIsLoading(false);
      // Redirection vers le tableau de bord privé après connexion
      navigate('/dashboard'); 
    }, 2000);
  };

  const portalFeatures = [
    { title: "Suivi Scolaire", desc: "Consultez les notes, les moyennes et téléchargez les bulletins de votre enfant en temps réel.", icon: "📊" },
    { title: "Vie Scolaire", desc: "Suivi des absences, retards et consultation de l'emploi du temps actualisé.", icon: "📅" },
    { title: "Comptabilité", desc: "Réglez les frais de scolarité en ligne et téléchargez vos reçus de paiement en un clic.", icon: "💳" },
    { title: "Messagerie", desc: "Communiquez directement avec l'administration et le corps professoral.", icon: "💬" }
  ];

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] py-16 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[150px] opacity-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Portail <span className="text-[#FFCC00]">Parents</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-blue-100 max-w-2xl mx-auto font-medium">
            Votre espace numérique sécurisé pour accompagner la scolarité de votre enfant.
          </motion.p>
        </div>
      </section>

      {/* --- CONTENU PRINCIPAL (SPLIT SCREEN) --- */}
      <section className="py-16 flex-grow flex items-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
            
            {/* --- COLONNE GAUCHE : LES AVANTAGES (Bleu Jourdain) --- */}
            <div className="lg:w-5/12 bg-[#0047AB] p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-center">
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[80px] opacity-20"></div>
              
              <h2 className="text-3xl font-black uppercase mb-8 leading-tight">
                L'école à portée <br /> <span className="text-[#FFCC00]">de main</span>
              </h2>
              
              <div className="space-y-8 relative z-10">
                {portalFeatures.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -30 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="flex gap-5 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-2xl group-hover:bg-[#FFCC00] transition-colors duration-300 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-white mb-1 tracking-wide">{feature.title}</h4>
                      <p className="text-blue-200 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* --- COLONNE DROITE : FORMULAIRE DE CONNEXION --- */}
            <div className="lg:w-7/12 p-10 md:p-16 flex flex-col justify-center bg-white relative">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                
                <div className="mb-10 text-center lg:text-left">
                  <span className="text-[#0047AB] font-black tracking-widest uppercase text-xs mb-2 block">Connexion Sécurisée</span>
                  <h3 className="text-3xl font-black text-gray-800 uppercase tracking-tight">Accéder à mon compte</h3>
                </div>

                <form onSubmit={handleLogin} className="space-y-6 max-w-md mx-auto lg:mx-0">
                  
                  {/* Champ Identifiant */}
                  <div>
                    <label className="block text-sm font-bold text-[#0047AB] uppercase tracking-wider mb-2">Identifiant (Matricule ou Email)</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                      </div>
                      <input 
                        type="text" 
                        name="identifiant" 
                        value={credentials.identifiant} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="Ex: PAR-2026-001"
                        className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all font-medium text-gray-700" 
                      />
                    </div>
                  </div>

                  {/* Champ Mot de passe */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-bold text-[#0047AB] uppercase tracking-wider">Mot de passe</label>
                      <Link to="/mot-de-passe-oublie" className="text-xs font-bold text-gray-400 hover:text-[#FFCC00] transition-colors">Oublié ?</Link>
                    </div>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </div>
                      <input 
                        type="password" 
                        name="password" 
                        value={credentials.password} 
                        onChange={handleInputChange} 
                        required 
                        placeholder="••••••••"
                        className="w-full pl-12 pr-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FFCC00] focus:border-transparent outline-none transition-all font-medium text-gray-700" 
                      />
                    </div>
                  </div>

                  {/* Bouton de Soumission avec effet de chargement */}
                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full py-4 rounded-xl font-black text-lg uppercase tracking-widest shadow-xl transition-all flex justify-center items-center gap-3 ${isLoading ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#FFCC00] text-[#0047AB] hover:bg-yellow-400'}`}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#0047AB]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Connexion en cours...
                      </>
                    ) : (
                      <>Se Connecter <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></>
                    )}
                  </motion.button>

                </form>

                <div className="mt-10 text-center border-t border-gray-100 pt-8">
                  <p className="text-gray-500 text-sm font-medium">
                    Vous n'avez pas encore vos accès ? <br className="md:hidden" />
                    <Link to="/contact" className="text-[#0047AB] font-bold hover:text-[#FFCC00] transition-colors ml-1">Contactez l'administration.</Link>
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default EspaceParent;