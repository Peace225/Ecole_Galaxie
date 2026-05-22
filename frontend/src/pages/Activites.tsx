import { useState, type FormEvent, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';

// Définition de l'interface pour le formulaire pour une meilleure gestion des types
interface FormState {
  nom: string;
  email: string;
  objet: string;
  message: string;
  captcha: string;
}

const Activites = () => {
  const [form, setForm] = useState<FormState>({ 
    nom: '', email: '', objet: '', message: '', captcha: '' 
  });
  const [sent, setSent] = useState<boolean>(false);
  const num1 = 5; 
  const num2 = 5;

  const activites = [
    { icon: "📖", titre: "Lecture", desc: "Nous cultivons l'amour de la lecture pour développer l'imaginaire et le savoir de chaque enfant.", cat: "Éducative", color: "from-blue-500 to-indigo-600" },
    { icon: "💻", titre: "Informatique", desc: "Nous formons les enfants à maîtriser les outils numériques pour les préparer au monde de demain.", cat: "Numérique", color: "from-[#0047AB] to-[#002D72]" },
    { icon: "🇬🇧", titre: "Anglais", desc: "Nous enseignons l'anglais pour ouvrir les enfants aux opportunités internationales.", cat: "Langues", color: "from-amber-500 to-orange-600" },
    { icon: "🤝", titre: "Solidarité", desc: "Nous apprenons aux enfants à travailler ensemble et à s'entraider pour grandir en harmonie.", cat: "Valeurs", color: "from-emerald-500 to-teal-600" },
    { icon: "♟️", titre: "Jeu d'échec", desc: "Nous stimulons la réflexion et la stratégie des enfants grâce au jeu d'échecs.", cat: "Stratégie", color: "from-slate-600 to-gray-800" },
    { icon: "⚽", titre: "Football", desc: "Nous encourageons l'esprit d'équipe et le dépassement de soi à travers le football.", cat: "Sport", color: "from-green-500 to-emerald-700" },
    { icon: "🏀", titre: "Basketball", desc: "Nous développons la coordination et la coopération des enfants grâce au basketball.", cat: "Sport", color: "from-orange-500 to-red-600" },
    { icon: "🎨", titre: "Culturelles", desc: "Nous organisons des activités culturelles pour éveiller les enfants à la richesse artistique et aux traditions du monde.", cat: "Arts", color: "from-purple-500 to-pink-600" },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseInt(form.captcha) !== num1 + num2) {
      alert('Captcha incorrect');
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ nom: '', email: '', objet: '', message: '', captcha: '' });
    }, 3000);
  };

  return (
    <div className="bg-[#fafbfc]">
      {/* SECTION HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=2000&q=80" 
            alt="activités" 
            className="w-full h-full object-cover scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0047AB]/90 via-[#0047AB]/70 to-[#fafbfc]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mt-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-lg border border-white/30 px-6 py-2 rounded-full mb-8 text-white shadow-xl">
              <span className="w-2.5 h-2.5 bg-[#FFCC00] rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase">Développement & Épanouissement</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
              Nos <span className="text-[#FFCC00]">Activités</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-50 font-light max-w-2xl mx-auto leading-relaxed mb-10">
              Bien plus qu'une école, un écosystème où chaque talent se révèle et chaque passion s'exprime.
            </p>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FFCC00] text-[#0047AB] px-10 py-4 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl hover:bg-white transition-colors"
            >
              Découvrir le programme
            </motion.button>
          </motion.div>
        </div>
        
        {/* Vague décorative */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 100" className="w-full h-auto text-[#fafbfc] fill-current">
            <path d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
          </svg>
        </div>
      </section>

      {/* Reste du contenu (GRID et CONTACT) identique à votre code original... */}
      {/* Assurez-vous simplement que les onChange utilisent le type correct : (e: ChangeEvent<HTMLInputElement>) => ... */}
    </div>
  );
};

export default Activites;