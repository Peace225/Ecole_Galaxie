import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReglementInterieur = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const rules = [
    {
      id: 1,
      title: "1. Horaires et Ponctualité",
      content: "Les cours débutent à 7h30 précises. L'accès au CSIG Bangui est fermé à 7h45. La ponctualité est la première marque de respect envers la communauté scolaire et tout retard doit être justifié par les parents."
    },
    {
      id: 2,
      title: "2. Tenue et Identité",
      content: "Le port de l'uniforme officiel du CSIG Bangui est strictement obligatoire pour renforcer l'unité et l'égalité entre tous nos élèves. Les coiffures fantaisistes, le maquillage et les bijoux ostentatoires sont formellement interdits."
    },
    {
      id: 3,
      title: "3. Discipline et Comportement",
      content: "Le respect mutuel est la règle d'or. Tout comportement portant atteinte à l'image du CSIG ou toute forme de violence, de tricherie ou d'insolence entraînera des sanctions disciplinaires immédiates."
    },
    {
      id: 4,
      title: "4. Utilisation du Téléphone Portable",
      content: "Les téléphones portables et appareils électroniques personnels sont strictement interdits dans l'enceinte de l'école. En cas d'infraction, l'appareil sera confisqué et remis uniquement aux parents."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen">
      
      <section className="bg-[#0047AB] py-24 text-center relative">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl font-black text-white uppercase mb-6">
            Règlement <span className="text-[#FFCC00]">Intérieur</span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto rounded-full"></div>
        </div>
      </section>

      <section className="py-24 -mt-10">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12">
            
            <p className="text-gray-600 mb-10 text-center font-medium italic">
              "L'excellence au CSIG Bangui ne s'atteint que dans un cadre de vie ordonné, respectueux et propice à l'épanouissement de nos élèves."
            </p>

            <div className="space-y-4">
              {rules.map((rule, index) => (
                <div key={rule.id} className="border-2 border-gray-100 rounded-2xl overflow-hidden">
                  <button 
                    onClick={() => toggleAccordion(index)}
                    className={`w-full text-left px-6 py-5 font-black uppercase tracking-wider flex justify-between items-center transition-colors ${openIndex === index ? 'bg-[#0047AB] text-[#FFCC00]' : 'bg-white text-[#0047AB] hover:bg-gray-50'}`}
                  >
                    {rule.title}
                    <span className="text-2xl">{openIndex === index ? '−' : '+'}</span>
                  </button>
                  
                  {/* Utilisation de AnimatePresence pour éviter l'erreur removeChild */}
                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div 
                        key="content"
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: "auto", opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-5 bg-white text-gray-600 font-medium leading-relaxed">
                          {rule.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center pt-8 border-t border-gray-100">
              <button className="bg-[#FFCC00] text-[#0047AB] px-8 py-3 rounded-lg font-bold hover:bg-[#0047AB] hover:text-white transition-all flex items-center justify-center gap-3 mx-auto">
                Télécharger le Règlement (PDF)
              </button>
            </div>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReglementInterieur;