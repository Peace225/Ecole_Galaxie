import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CourseDetail = () => {
  // On récupère l'ID du cours depuis l'URL (ex: /courses/prog-101)
  const { id } = useParams();

  // --- BASE DE DONNÉES FICTIVE DES COURS INFORMATIQUES ---
  // On simule ce que Supabase nous renverrait en fonction de l'ID
  const itCoursesDB: Record<string, any> = {
    "prog-101": {
      title: "Initiation à la Programmation",
      subject: "Développement",
      level: "Débutant",
      teacher: "M. Koné (Expert Tech)",
      description: "Ce cours développe la logique algorithmique de l'élève. À travers des jeux et des exercices de codage simplifiés (Scratch, Python Basics), l'enfant apprend à donner des instructions claires à une machine et développe son esprit d'analyse.",
      color: "from-blue-600 to-cyan-400",
      lessons: [
        { id: 1, title: "Qu'est-ce qu'un algorithme ?", duration: "15 min" },
        { id: 2, title: "Ma première ligne de code", duration: "20 min" },
        { id: 3, title: "Les boucles et les conditions", duration: "25 min" },
        { id: 4, title: "Projet : Créer un petit jeu interactif", duration: "45 min" }
      ]
    },
    "office-101": {
      title: "Maîtrise de la Bureautique",
      subject: "Outils Numériques",
      level: "Essentiel",
      teacher: "Mme. Bamba",
      description: "La maîtrise des outils de bureau est indispensable. Ce module enseigne la rédaction de documents propres sur Word, la gestion de tableaux de données sur Excel et la création de présentations impactantes sur PowerPoint.",
      color: "from-emerald-500 to-teal-400",
      lessons: [
        { id: 1, title: "Word : Mise en page d'un exposé", duration: "20 min" },
        { id: 2, title: "Excel : Les formules de base", duration: "30 min" },
        { id: 3, title: "PowerPoint : Animer une présentation", duration: "25 min" }
      ]
    },
    "network-101": {
      title: "Bases du Réseau Informatique",
      subject: "Infrastructure",
      level: "Intermédiaire",
      teacher: "M. Diallo",
      description: "Comment fonctionne Internet ? Qu'est-ce qu'une adresse IP, un routeur ou le Wi-Fi ? Ce cours démystifie l'architecture des réseaux pour comprendre comment nos appareils communiquent à travers le monde.",
      color: "from-purple-600 to-indigo-400",
      lessons: [
        { id: 1, title: "Comprendre le matériel informatique", duration: "15 min" },
        { id: 2, title: "Le voyage d'un email sur Internet", duration: "20 min" },
        { id: 3, title: "Réseaux Locaux (LAN) vs Internet (WAN)", duration: "25 min" }
      ]
    },
    "design-101": {
      title: "Graphisme & Création Digitale",
      subject: "Créativité",
      level: "Tous niveaux",
      teacher: "Mme. Yao",
      description: "Initiez-vous à la communication visuelle. Apprenez les bases du design graphique, la retouche photo et l'utilisation d'outils modernes de création pour réaliser des affiches et des supports visuels esthétiques.",
      color: "from-pink-500 to-rose-400",
      lessons: [
        { id: 1, title: "Théorie des couleurs et typographie", duration: "20 min" },
        { id: 2, title: "Initiation aux outils de création (Canva/Photoshop)", duration: "35 min" },
        { id: 3, title: "Projet : Concevoir une affiche scolaire", duration: "40 min" }
      ]
    },
    "cyber-101": {
      title: "Cybersécurité & Bonnes pratiques",
      subject: "Sécurité",
      level: "Indispensable",
      teacher: "M. Koné (Expert Tech)",
      description: "Le monde numérique comporte des risques. Ce module est crucial pour apprendre aux élèves à protéger leurs données personnelles, à identifier les arnaques (phishing) et à adopter un comportement responsable sur les réseaux sociaux.",
      color: "from-[#0047AB] to-[#FFCC00]",
      lessons: [
        { id: 1, title: "Créer et gérer des mots de passe forts", duration: "15 min" },
        { id: 2, title: "Identifier le Phishing et les Fake News", duration: "25 min" },
        { id: 3, title: "E-Réputation et réseaux sociaux", duration: "20 min" }
      ]
    }
  };

  // On cherche le cours correspondant à l'ID. Si l'ID n'existe pas, on met un cours par défaut (Fallback)
  const course = id && itCoursesDB[id] ? itCoursesDB[id] : itCoursesDB["prog-101"];

  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen pb-20">
      
      {/* --- EN-TÊTE DYNAMIQUE DU COURS --- */}
      <section className={`pt-12 pb-24 bg-gradient-to-r ${course.color} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-6xl">
          <Link to="/courses" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold mb-8 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Retour au catalogue
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">
              {course.subject}
            </span>
            <span className="text-white/80 text-sm font-bold uppercase">{course.level}</span>
          </div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-4 leading-tight">
            {course.title}
          </motion.h1>
          <p className="text-white/90 font-medium text-lg flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            Dispensé par <span className="font-black">{course.teacher}</span>
          </p>
        </div>
      </section>

      {/* --- CORPS DE LA PAGE --- */}
      <section className="-mt-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* COLONNE PRINCIPALE : LECTEUR VIDÉO ET DESCRIPTION */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Le Lecteur Vidéo Fictif */}
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full aspect-video bg-gray-900 rounded-[2rem] flex items-center justify-center shadow-2xl relative overflow-hidden group border-4 border-white">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <button className="bg-[#FFCC00] text-[#0047AB] rounded-full p-5 hover:bg-white transition transform hover:scale-110 z-10 shadow-[0_0_30px_rgba(255,204,0,0.5)]">
                  <svg className="w-10 h-10 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                </button>
                <div className="absolute bottom-6 left-8 z-10">
                  <span className="text-white font-bold text-lg">{course.lessons[0].title}</span>
                  <div className="w-full bg-white/20 h-1 mt-2 rounded-full overflow-hidden">
                    <div className="w-1/3 bg-[#FFCC00] h-full"></div>
                  </div>
                </div>
              </motion.div>

              {/* À propos du cours */}
              <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-xl border border-gray-100">
                <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4 tracking-tight">Objectifs du module</h2>
                <div className="h-1 w-16 bg-[#FFCC00] mb-6 rounded-full"></div>
                <p className="text-gray-600 leading-relaxed text-lg font-medium">{course.description}</p>
              </div>
            </div>

            {/* COLONNE LATÉRALE : LISTE DES LEÇONS & QUIZ */}
            <div className="space-y-8">
              
              {/* Liste des Leçons */}
              <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
                <h3 className="text-xl font-black text-[#0047AB] uppercase mb-6 tracking-tight flex items-center justify-between">
                  Plan de cours
                  <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-md">{course.lessons.length} Leçons</span>
                </h3>
                <ul className="space-y-3">
                  {course.lessons.map((lesson: any, index: number) => (
                    <li key={lesson.id} className="flex justify-between items-center p-4 hover:bg-blue-50 rounded-xl cursor-pointer transition border border-gray-50 hover:border-blue-100 group">
                      <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center font-bold text-sm group-hover:bg-[#0047AB] group-hover:text-white transition-colors">
                          {index + 1}
                        </div>
                        <span className="text-gray-700 font-bold text-sm group-hover:text-[#0047AB] transition-colors">{lesson.title}</span>
                      </div>
                      <span className="text-xs text-gray-400 font-bold">{lesson.duration}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bloc de Quiz */}
              <motion.div whileHover={{ y: -5 }} className={`bg-gradient-to-br ${course.color} p-8 rounded-[2rem] shadow-2xl text-white text-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">🏆</div>
                  <h3 className="font-black text-2xl uppercase tracking-tighter mb-2">Validation des Acquis</h3>
                  <p className="text-white/90 text-sm font-medium mb-6">Testez vos connaissances sur ce module pour obtenir votre badge de réussite.</p>
                  <Link to={`/quiz/${id}`} className="block w-full bg-white text-[#0047AB] font-black uppercase tracking-widest py-4 rounded-xl hover:bg-[#FFCC00] transition shadow-lg">
                    Démarrer le Quiz
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CourseDetail;