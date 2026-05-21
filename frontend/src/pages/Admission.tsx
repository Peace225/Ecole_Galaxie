import { useState } from 'react';
import { motion } from 'framer-motion';

const Admission = () => {
  // --- ÉTAT DU FORMULAIRE ---
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    studentName: '',
    studentBirth: '',
    gradeRequested: '',
    previousSchool: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // --- GESTION DES SAISIES ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // --- SOUMISSION DU FORMULAIRE ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Données soumises :", formData);
    // Ici, vous connecterez plus tard votre backend (API/Email)
    setSubmitted(true);
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({parentName: '', parentEmail: '', parentPhone: '', studentName: '', studentBirth: '', gradeRequested: '', previousSchool: '', message: ''});
    }, 4000);
  };

  const steps = [
    { n: "1", t: "Pré-inscription en ligne", d: "Remplissez le formulaire ci-contre pour manifester votre intérêt." },
    { n: "2", t: "Étude du dossier", d: "Notre équipe pédagogique étudie votre demande sous 48h." },
    { n: "3", t: "Entretien & Test", d: "Un rendez-vous est fixé avec l'enfant pour évaluer son niveau." },
    { n: "4", t: "Inscription Définitive", d: "Paiement des frais et remise du dossier complet." }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] text-white py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[120px] opacity-10animate-pulse"></div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-6 relative z-10">
          <span className="text-[#FFCC00] font-black tracking-[0.3em] uppercase text-xs mb-4 block">Rejoindre l'élite</span>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
            Dossier d'<span className="text-[#FFCC00]">Admission</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto rounded-full"></div>
        </motion.div>
      </section>

      {/* --- CONTENU PRINCIPAL --- */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* COLONNE GAUCHE : INFOS & PROCESSUS */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 space-y-12">
              <div>
                <h2 className="text-3xl font-black text-[#0047AB] uppercase mb-6">Le Processus</h2>
                <div className="space-y-6">
                  {steps.map((step, i) => (
                    <div key={i} className="flex gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-[#0047AB] text-[#FFCC00] rounded-full flex items-center justify-center font-black text-xl flex-shrink-0">{step.n}</div>
                      <div>
                        <h4 className="font-bold text-[#0047AB] text-lg">{step.t}</h4>
                        <p className="text-gray-600 text-sm">{step.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#0047AB] text-white p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-black uppercase text-[#FFCC00] mb-6">Documents à fournir</h3>
                <ul className="space-y-4 text-blue-100 font-medium">
                  <li>✓ Extrait de naissance de l'enfant</li>
                  <li>✓ 4 photos d'identité récentes</li>
                  <li>✓ Bulletins scolaires de l'année précédente</li>
                  <li>✓ Carnet de vaccination à jour</li>
                  <li>✓ Certificat de fréquentation (si transfert)</li>
                </ul>
              </div>
            </motion.div>

            {/* COLONNE DROITE : FORMULAIRE INTERACTIF */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100">
              
              {submitted ? (
                // --- MESSAGE DE SUCCÈS ---
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-20 flex flex-col items-center gap-6">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl">✓</div>
                  <h3 className="text-3xl font-black text-[#0047AB]">Demande Envoyée !</h3>
                  <p className="text-gray-600 max-w-sm">Merci pour votre intérêt. L'administration du Jourdain étudiera votre dossier et vous contactera sous 48h.</p>
                </motion.div>
              ) : (
                // --- LE FORMULAIRE ---
                <form onSubmit={handleSubmit} className="space-y-8">
                  <h3 className="text-2xl font-black text-[#0047AB] uppercase">Formulaire de pré-inscription</h3>
                  <p className="text-gray-500 font-medium -mt-4 mb-8">Remplissez ce formulaire. Nous vous contacterons rapidement pour la suite.</p>
                  
                  {/* Infos Parents */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" name="parentName" placeholder="Nom complet du parent" value={formData.parentName} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#FFCC00] outline-none transition" />
                    <input type="tel" name="parentPhone" placeholder="Téléphone (ex: 07070707)" value={formData.parentPhone} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#FFCC00] outline-none transition" />
                  </div>
                  <input type="email" name="parentEmail" placeholder="Adresse Email" value={formData.parentEmail} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#FFCC00] outline-none transition" />

                  <hr className="border-gray-100" />

                  {/* Infos Enfant */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="text" name="studentName" placeholder="Nom complet de l'enfant" value={formData.studentName} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#FFCC00] outline-none transition" />
                    <input type="date" name="studentBirth" value={formData.studentBirth} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-400 focus:ring-2 focus:ring-[#FFCC00] outline-none transition" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <select name="gradeRequested" value={formData.gradeRequested} onChange={handleInputChange} required className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-500 focus:ring-2 focus:ring-[#FFCC00] outline-none transition">
                      <option value="">Classe souhaitée...</option>
                      <option value="petite-section">Petite Section (Maternelle)</option>
                      <option value="cp1">CP1</option>
                      <option value="6eme">6ème</option>
                      <option value="terminale-d">Terminale D</option>
                      {/* Ajoutez toutes les classes */}
                    </select>
                    <input type="text" name="previousSchool" placeholder="École précédente" value={formData.previousSchool} onChange={handleInputChange} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#FFCC00] outline-none transition" />
                  </div>

                  <textarea name="message" placeholder="Avez-vous des questions particulières ?" value={formData.message} onChange={handleInputChange} rows={4} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-gray-50 focus:ring-2 focus:ring-[#FFCC00] outline-none transition"></textarea>

                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" className="w-full bg-[#FFCC00] text-[#0047AB] py-5 rounded-2xl font-black text-lg uppercase tracking-widest shadow-xl transition-colors hover:bg-yellow-400">
                    Soumettre la demande
                  </motion.button>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Admission;