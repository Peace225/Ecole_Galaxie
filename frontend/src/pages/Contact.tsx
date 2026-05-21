import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Réinitialisation après 4 secondes
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
      title: "Notre Adresse",
      details: ["Quartier Kennedy", "Bouaké, Côte d'Ivoire"]
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
      title: "Téléphone",
      details: ["+225 07 00 00 00 00", "+225 05 00 00 00 00"]
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>,
      title: "Email Officiel",
      details: ["contact@lejourdain.ci", "scolarite@lejourdain.ci"]
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
      title: "Heures d'ouverture",
      details: ["Lundi - Vendredi : 07h30 - 16h30", "Samedi : 08h00 - 12h00"]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-gray-50 overflow-x-hidden min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-[#FFCC00] font-black tracking-widest uppercase text-xs mb-4 block">
            Gardons le contact
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Nous <span className="text-[#FFCC00]">Rencontrer</span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- INFOS & FORMULAIRE --- */}
      <section className="py-24 -mt-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* COLONNE GAUCHE : COORDONNÉES */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactInfo.map((info, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 flex items-start gap-6 group hover:border-[#0047AB] transition-colors"
                >
                  <div className="w-16 h-16 bg-blue-50 text-[#0047AB] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFCC00] transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-[#0047AB] font-black uppercase tracking-wider text-lg mb-2">{info.title}</h3>
                    <div className="text-gray-500 font-medium">
                      {info.details.map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* COLONNE DROITE : FORMULAIRE */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100"
            >
              {submitted ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20 flex flex-col items-center gap-6">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl shadow-inner">✓</div>
                  <h3 className="text-3xl font-black text-[#0047AB] uppercase">Message Envoyé !</h3>
                  <p className="text-gray-600 max-w-sm text-lg">Nous avons bien reçu votre message. Notre équipe vous répondra dans les plus brefs délais.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="mb-10">
                    <h2 className="text-3xl font-black text-[#0047AB] uppercase">Envoyez-nous un <span className="text-[#FFCC00]">Message</span></h2>
                    <p className="text-gray-500 font-medium mt-2">Une question spécifique ? Utilisez ce formulaire pour nous écrire directement.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0047AB] uppercase tracking-wider pl-1">Nom complet</label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all text-gray-700" placeholder="Ex: Jean Kouamé" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0047AB] uppercase tracking-wider pl-1">Adresse Email</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all text-gray-700" placeholder="jean.kouame@email.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0047AB] uppercase tracking-wider pl-1">Objet de la demande</label>
                    <select name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all text-gray-600">
                      <option value="">Sélectionnez un motif...</option>
                      <option value="Information Inscription">Information Inscription</option>
                      <option value="Scolarité / Pédagogie">Scolarité & Pédagogie</option>
                      <option value="Comptabilité">Comptabilité</option>
                      <option value="Autre demande">Autre demande</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0047AB] uppercase tracking-wider pl-1">Votre Message</label>
                    <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={5} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-[#FFCC00] outline-none transition-all text-gray-700 resize-none" placeholder="Comment pouvons-nous vous aider ?"></textarea>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }} 
                    whileTap={{ scale: 0.98 }} 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`w-full py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl transition-all flex justify-center items-center gap-3 mt-4 ${isSubmitting ? 'bg-gray-200 text-gray-500' : 'bg-[#FFCC00] text-[#0047AB] hover:bg-yellow-400'}`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </motion.button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* --- CARTE GOOGLE MAPS (Iframe plein écran) --- */}
      <section className="h-[500px] w-full bg-gray-200 relative">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-full shadow-2xl z-10 flex items-center gap-3">
          <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
          <span className="font-black text-[#0047AB] uppercase tracking-widest text-sm">Nous sommes ici</span>
        </div>
        {/* Remplacer src par l'URL d'intégration réelle (Google Maps > Partager > Intégrer la carte) */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.708307043328!2d-5.044190800000001!3d7.699745500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfb47167eb2eb339%3A0x6b44a475152a5127!2sBouak%C3%A9%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-1000"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;