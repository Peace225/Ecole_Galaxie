import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('Toutes');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = ['Toutes', 'Inscriptions', 'Pédagogie', 'Vie Pratique'];

  const faqData = [
    // Catégorie: Inscriptions
    {
      category: 'Inscriptions',
      question: "Quand débutent les inscriptions pour la prochaine rentrée ?",
      answer: "Les pré-inscriptions en ligne s'ouvrent généralement dès le mois de Mars. Nous conseillons aux parents de s'y prendre tôt car nos places sont limitées, notamment en maternelle et en 6ème afin de garantir nos effectifs réduits."
    },
    {
      category: 'Inscriptions',
      question: "Acceptez-vous les transferts en cours d'année ?",
      answer: "Oui, sous réserve de places disponibles et après étude minutieuse du dossier scolaire (bulletins précédents) et un test de niveau éventuel pour assurer la bonne intégration de l'élève."
    },
    // Catégorie: Pédagogie
    {
      category: 'Pédagogie',
      question: "Quel est l'effectif maximum par classe ?",
      answer: "Pour garantir un suivi chirurgical et personnalisé de chaque élève, nos classes sont limitées à 25 élèves en maternelle/primaire, et 30 élèves au secondaire."
    },
    {
      category: 'Pédagogie',
      question: "Proposez-vous des cours de soutien scolaire ?",
      answer: "Absolument. Un programme de tutorat et de soutien gratuit est intégré à l'emploi du temps pour les élèves rencontrant des difficultés passagères dans certaines matières fondamentales."
    },
    // Catégorie: Vie Pratique
    {
      category: 'Vie Pratique',
      question: "L'école dispose-t-elle d'un service de cantine et de transport ?",
      answer: "Oui, nous offrons un service de cantine avec des repas équilibrés validés par un nutritionniste. Un service de transport scolaire par bus climatisés dessert les principaux quartiers de Bouaké."
    },
    {
      category: 'Vie Pratique',
      question: "Comment puis-je suivre les notes de mon enfant ?",
      answer: "Grâce à notre 'Portail Parents' sécurisé, vous avez accès en temps réel aux notes, aux absences, à l'emploi du temps et vous pouvez communiquer directement avec les professeurs."
    }
  ];

  // Filtrer les questions en fonction de la catégorie sélectionnée
  const filteredFaqs = activeCategory === 'Toutes' 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[100px] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-[#FFCC00] font-black tracking-[0.3em] uppercase text-xs mb-4 block">
            Centre d'assistance
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Foire Aux <span className="text-[#FFCC00]">Questions</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
            Trouvez rapidement les réponses à vos questions concernant l'admission, la scolarité et la vie au sein du Jourdain.
          </motion.p>
        </div>
      </section>

      {/* --- CONTENU PRINCIPAL --- */}
      <section className="py-24 -mt-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white rounded-[3rem] shadow-2xl p-8 md:p-14 border border-gray-100">
            
            {/* TABS DE CATÉGORIES */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                  className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 ${
                    activeCategory === cat 
                    ? 'bg-[#0047AB] text-[#FFCC00] shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* LISTE DES QUESTIONS (ACCORDÉON) */}
            <div className="space-y-4 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory} // Clé pour forcer l'animation au changement de catégorie
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {filteredFaqs.map((faq, index) => (
                    <motion.div 
                      key={index} 
                      className={`border-2 rounded-2xl overflow-hidden transition-colors duration-300 ${openIndex === index ? 'border-[#0047AB] shadow-md' : 'border-gray-100 hover:border-blue-100'}`}
                    >
                      <button 
                        onClick={() => toggleAccordion(index)}
                        className="w-full text-left px-6 md:px-8 py-5 flex justify-between items-center bg-white focus:outline-none"
                      >
                        <span className={`font-black text-lg md:text-xl pr-4 ${openIndex === index ? 'text-[#0047AB]' : 'text-gray-700'}`}>
                          {faq.question}
                        </span>
                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${openIndex === index ? 'bg-[#FFCC00] text-[#0047AB] rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} 
                            animate={{ height: "auto", opacity: 1 }} 
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="px-6 md:px-8 bg-blue-50/50"
                          >
                            <div className="pb-6 pt-2 text-gray-600 font-medium leading-relaxed border-t border-gray-100/50">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* --- CTA CONTACT --- */}
      <section className="py-20 bg-gray-50 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="container mx-auto px-6 max-w-3xl">
          <div className="w-20 h-20 bg-[#FFCC00] text-[#0047AB] rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-xl">
            ?
          </div>
          <h2 className="text-3xl font-black text-[#0047AB] uppercase mb-4">Vous n'avez pas trouvé votre réponse ?</h2>
          <p className="text-gray-500 font-medium mb-8">Notre administration est à votre disposition du Lundi au Vendredi pour répondre à toutes vos interrogations.</p>
          <Link to="/contact" className="inline-block bg-[#0047AB] text-white px-10 py-4 rounded-xl font-black text-lg uppercase tracking-widest shadow-xl hover:bg-blue-900 hover:-translate-y-1 transition-all">
            Nous Contacter
          </Link>
        </motion.div>
      </section>

    </div>
  );
};

export default Faq;