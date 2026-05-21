import { motion } from 'framer-motion';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  // --- TES NOUVEAUX COURS INFORMATIQUES ---
  const itCourses = [
    {
      id: "prog-101",
      title: "Initiation à la Programmation",
      subject: "Développement",
      level: "Débutant",
      description: "Développement de la logique algorithmique et apprentissage du codage de manière simplifiée et ludique pour stimuler l'esprit d'analyse.",
      color: "from-blue-600 to-cyan-400" // Bleu Tech
    },
    {
      id: "office-101",
      title: "Maîtrise de la Bureautique",
      subject: "Outils Numériques",
      level: "Essentiel",
      description: "Prise en main professionnelle de Word, Excel, PowerPoint et découverte des outils numériques essentiels pour la scolarité et la vie active.",
      color: "from-emerald-500 to-teal-400" // Vert Productivité
    },
    {
      id: "network-101",
      title: "Bases du Réseau Informatique",
      subject: "Infrastructure",
      level: "Intermédiaire",
      description: "Comprendre comment les ordinateurs communiquent entre eux, l'architecture du web et les fondamentaux du matériel informatique.",
      color: "from-purple-600 to-indigo-400" // Violet Réseau
    },
    {
      id: "design-101",
      title: "Graphisme & Création Digitale",
      subject: "Créativité",
      level: "Tous niveaux",
      description: "Libérez votre créativité ! Initiation au design, à la retouche photo et à la création de supports visuels numériques.",
      color: "from-pink-500 to-rose-400" // Rose Créatif
    },
    {
      id: "cyber-101",
      title: "Cybersécurité & Bonnes pratiques",
      subject: "Sécurité",
      level: "Indispensable",
      description: "Protéger ses données personnelles, éviter les pièges du web et adopter un comportement responsable et éthique sur Internet.",
      color: "from-[#0047AB] to-[#FFCC00]" // Aux couleurs du Jourdain
    }
  ];

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] py-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFCC00] rounded-full mix-blend-multiply filter blur-[150px] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.span initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-[#FFCC00] font-black tracking-widest uppercase text-xs mb-4 block">
            Programme d'excellence
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Espace <span className="text-[#FFCC00]">E-Learning</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-blue-100 max-w-2xl mx-auto text-lg font-medium">
            Découvrez nos modules d'initiation informatique conçus pour donner à nos élèves toutes les clés du monde numérique de demain.
          </motion.p>
        </div>
      </section>

      {/* --- GRILLE DES COURS --- */}
      <section className="py-24 -mt-10">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-white rounded-[3rem] shadow-2xl p-10 md:p-14 border border-gray-100">
            
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-black text-[#0047AB] uppercase">Le catalogue des formations</h2>
              <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itCourses.map((course, index) => (
                <motion.div 
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CourseCard 
                    id={course.id}
                    title={course.title}
                    subject={course.subject}
                    level={course.level}
                    description={course.description}
                    color={course.color}
                  />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Courses;