import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Quiz = () => {
  const { id } = useParams();

  // --- BASE DE DONNÉES FICTIVE DES QUIZ ---
  const quizDB: Record<string, any> = {
    "prog-101": {
      title: "Quiz : Initiation à la Programmation",
      color: "from-blue-600 to-cyan-400",
      questions: [
        {
          questionText: "Qu'est-ce qu'un algorithme ?",
          answerOptions: [
            { answerText: "Une marque d'ordinateur", isCorrect: false },
            { answerText: "Une suite d'instructions étape par étape", isCorrect: true },
            { answerText: "Un virus informatique", isCorrect: false },
            { answerText: "Un langage de programmation", isCorrect: false },
          ],
        },
        {
          questionText: "Quelle structure permet de répéter une action en programmation ?",
          answerOptions: [
            { answerText: "Une boucle (Loop)", isCorrect: true },
            { answerText: "Une condition (If)", isCorrect: false },
            { answerText: "Une variable", isCorrect: false },
            { answerText: "Un commentaire", isCorrect: false },
          ],
        },
        {
          questionText: "En informatique, que signifie 'Déboguer' (Debug) ?",
          answerOptions: [
            { answerText: "Éteindre l'ordinateur", isCorrect: false },
            { answerText: "Créer une application", isCorrect: false },
            { answerText: "Trouver et corriger les erreurs dans un code", isCorrect: true },
            { answerText: "Accélérer la connexion Internet", isCorrect: false },
          ],
        }
      ]
    },
    "network-101": {
      title: "Quiz : Bases du Réseau",
      color: "from-purple-600 to-indigo-400",
      questions: [
        {
          questionText: "Que signifie le sigle Wi-Fi ?",
          answerOptions: [
            { answerText: "Wireless Fidelity", isCorrect: true },
            { answerText: "Wired Fiber", isCorrect: false },
            { answerText: "Windows File", isCorrect: false },
            { answerText: "Wide Frequency", isCorrect: false },
          ],
        }
      ]
    }
  };

  // Si le quiz n'existe pas, on charge celui de programmation par défaut
  const currentQuiz = id && quizDB[id] ? quizDB[id] : quizDB["prog-101"];
  const questions = currentQuiz.questions;

  // --- GESTION DE L'ÉTAT DU QUIZ ---
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
  // États pour l'interactivité
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  // --- LOGIQUE DE RÉPONSE ---
  const handleAnswerOptionClick = (isCorrect: boolean, index: number) => {
    // Empêche de cliquer plusieurs fois
    if (selectedAnswer !== null) return; 

    setSelectedAnswer(index);
    setIsAnswerCorrect(isCorrect);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      // Réinitialiser les états pour la nouvelle question
      setSelectedAnswer(null);
      setIsAnswerCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50 pb-20">
      
      {/* --- EN-TÊTE DU QUIZ --- */}
      <section className={`pt-12 pb-16 bg-gradient-to-r ${currentQuiz.color} text-white relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <Link to={`/courses/${id}`} className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold mb-6 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Quitter le quiz
          </Link>
          <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            {currentQuiz.title}
          </h1>
        </div>
      </section>

      {/* --- ZONE DU QUIZ --- */}
      <section className="-mt-10 container mx-auto px-6 max-w-3xl">
        <div className="bg-white rounded-[2rem] shadow-2xl p-8 md:p-12 border border-gray-100 min-h-[400px]">
          
          <AnimatePresence mode="wait">
            {showScore ? (
              // --- ÉCRAN DE RÉSULTAT ---
              <motion.div 
                key="score"
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                className="text-center py-10"
              >
                <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-[#0047AB] to-[#FFCC00] rounded-full flex items-center justify-center text-5xl mb-6 shadow-xl border-4 border-white">
                  🏆
                </div>
                <h2 className="text-4xl font-black text-[#0047AB] uppercase mb-4">Quiz Terminé !</h2>
                <p className="text-gray-600 text-xl font-medium mb-8">
                  Vous avez obtenu <span className="text-[#FFCC00] font-black text-3xl mx-2">{score}</span> sur {questions.length}
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button 
                    onClick={() => window.location.reload()} 
                    className="bg-gray-100 text-[#0047AB] font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    Recommencer
                  </button>
                  <Link 
                    to={`/courses/${id}`} 
                    className="bg-[#0047AB] text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-900 transition-colors shadow-lg"
                  >
                    Retour au cours
                  </Link>
                </div>
              </motion.div>
            ) : (
              // --- ÉCRAN DE QUESTION ---
              <motion.div 
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }} 
                animate={{ opacity: 1, x: 0 }} 
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                {/* Barre de progression */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">
                    <span>Question {currentQuestion + 1}</span>
                    <span>Sur {questions.length}</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      className="bg-[#FFCC00] h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ duration: 0.5 }}
                    ></motion.div>
                  </div>
                </div>

                {/* Question */}
                <h2 className="text-2xl md:text-3xl font-black text-[#0047AB] mb-8 leading-tight">
                  {questions[currentQuestion].questionText}
                </h2>

                {/* Options de réponse */}
                <div className="space-y-4">
                  {questions[currentQuestion].answerOptions.map((answerOption: any, index: number) => {
                    
                    // Déterminer la couleur du bouton en fonction de l'état (répondu ou non)
                    let buttonClass = "bg-gray-50 text-gray-700 border-gray-200 hover:border-[#0047AB] hover:bg-blue-50";
                    
                    if (selectedAnswer !== null) {
                      if (answerOption.isCorrect) {
                        buttonClass = "bg-green-100 text-green-800 border-green-500 shadow-inner"; // La bonne réponse
                      } else if (selectedAnswer === index && !answerOption.isCorrect) {
                        buttonClass = "bg-red-100 text-red-800 border-red-500 shadow-inner"; // La mauvaise réponse cliquée
                      } else {
                        buttonClass = "bg-gray-50 text-gray-400 border-gray-100 opacity-50"; // Les autres options
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerOptionClick(answerOption.isCorrect, index)}
                        disabled={selectedAnswer !== null}
                        className={`w-full text-left p-5 rounded-2xl border-2 font-bold text-lg transition-all duration-300 ${buttonClass}`}
                      >
                        {answerOption.answerText}
                      </button>
                    );
                  })}
                </div>

                {/* Bouton Suivant (Apparaît seulement après avoir répondu) */}
                <AnimatePresence>
                  {selectedAnswer !== null && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      className="mt-10 text-right"
                    >
                      <button 
                        onClick={handleNextQuestion}
                        className="bg-[#FFCC00] text-[#0047AB] font-black uppercase tracking-widest px-10 py-4 rounded-xl shadow-lg hover:bg-yellow-400 hover:scale-105 transition-all"
                      >
                        {currentQuestion + 1 === questions.length ? 'Voir mon score' : 'Question Suivante →'}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )}
          </AnimatePresence>
          
        </div>
      </section>

    </div>
  );
};

export default Quiz;