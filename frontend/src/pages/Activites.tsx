import { useState } from 'react';
import { motion } from 'framer-motion';

const Activites = () => {
  const [form, setForm] = useState({ nom: '', email: '', objet: '', message: '', captcha: '' });
  const [sent, setSent] = useState(false);
  const num1 = 5; const num2 = 5;

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(form.captcha)!== num1 + num2) {
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
      {/* HERO PREMIUM */}
<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
  {/* Image de fond avec overlay dynamique */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=2000&q=80" 
      alt="activités" 
      className="w-full h-full object-cover scale-105" 
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#0047AB]/90 via-[#0047AB]/70 to-[#fafbfc]"></div>
  </div>

  {/* Contenu centré */}
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

  {/* Vague décorative en bas */}
  <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
    <svg viewBox="0 0 1440 100" className="w-full h-auto text-[#fafbfc] fill-current">
      <path d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"></path>
    </svg>
  </div>
</section>

      {/* INTRO */}
      <section className="relative -mt-1 pt-20 pb-12 bg-[#fafbfc]">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
            <h2 className="text-4xl md:text-5xl font-black text-[#0047AB] mb-6" style={{fontFamily:'Georgia, serif'}}>Une école qui vit</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              À travers nos activités éducatives, sportives et culturelles, nous offrons à chaque élève l'opportunité de s'épanouir, de développer ses talents et de vivre des expériences enrichissantes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* GRID PREMIUM */}
      <section className="pb-24 bg-[#fafbfc]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {activites.map((a,i)=>(
              <motion.div
                key={i}
                initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true, margin:"-50px"}}
                transition={{delay:i*0.07, duration:0.5}}
                whileHover={{y:-8}}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded- blur-xl -z-10" style={{background: `linear-gradient(135deg, ${a.color.split(' ')[1]}, ${a.color.split(' ')[3]})`}}></div>

                <div className="relative h-full bg-white border border-gray-100 rounded- p-8 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${a.color} opacity-[0.07] rounded-full blur-3xl -translate-y-8 translate-x-8 group-hover:opacity-15 transition-opacity`}></div>

                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
                        <span className="filter drop-shadow-sm">{a.icon}</span>
                      </div>
                      <span className="text- font-black uppercase tracking-widest px-3 py-1.5 rounded-full bg-gray-50 text-gray-500 border border-gray-200">{a.cat}</span>
                    </div>

                    <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-[#0047AB] transition-colors" style={{fontFamily:'Georgia, serif'}}>{a.titre}</h3>
                    <p className="text-gray-600 text- leading-relaxed">{a.desc}</p>

                    <div className="mt-6 flex items-center gap-2 text-[#0047AB] opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                      <span className="text-xs font-bold">Découvrir</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 1l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PREMIUM */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#fafbfc] to-white"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFCC00]/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
              <span className="inline-block text-[#0047AB] font-black text-sm uppercase tracking-[0.2em] mb-3">Contact</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4" style={{fontFamily:'Georgia, serif'}}>Parlons de votre enfant</h2>
              <p className="text-gray-600 text-lg">Une question sur nos activités? Notre équipe vous répond en moins de 24h.</p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {[
              { icon:"📍", title:"Adresse", label:"9H88+4Q3, Bangui", sub:"République centrafricaine", color:"from-blue-500 to-indigo-600" },
              { icon:"✉️", title:"Email", label:"Info@ecolegalaxy.org", sub:"Réponse rapide", color:"from-amber-500 to-orange-600" },
              { icon:"📞", title:"Téléphone", label:"+236 75 75 33 75", sub:"Lun-Ven 7h-17h", color:"from-emerald-500 to-teal-600" },
            ].map((c,i)=>(
              <motion.div key={i} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.1}} whileHover={{y:-4}} className="group relative">
                <div className="bg-white border border-gray-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${c.color} flex items-center justify-center text-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>{c.icon}</div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{c.title}</p>
                  <p className="font-black text-gray-900">{c.label}</p>
                  <p className="text-sm text-gray-500 mt-1">{c.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded- shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-3 p-8 md:p-12">
                  <h3 className="text-2xl font-black text-gray-900 mb-6" style={{fontFamily:'Georgia, serif'}}>Envoyez-nous un message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="group">
                        <input required placeholder=" " value={form.nom} onChange={e=>setForm({...form,nom:e.target.value})} className="peer w-full px-4 pt-5 pb-2 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0047AB] focus:outline-none transition-all" />
                        <label className="absolute left-4 top-3.5 text-gray-500 text-sm peer-focus:text-xs peer-focus:-top-1 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#0047AB] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">Votre Nom *</label>
                      </div>
                      <div className="group relative">
                        <input required type="email" placeholder=" " value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="peer w-full px-4 pt-5 pb-2 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0047AB] focus:outline-none transition-all" />
                        <label className="absolute left-4 top-3.5 text-gray-500 text-sm peer-focus:text-xs peer-focus:-top-1 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#0047AB] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">Votre Email *</label>
                      </div>
                    </div>

                    <div className="relative">
                      <input required placeholder=" " value={form.objet} onChange={e=>setForm({...form,objet:e.target.value})} className="peer w-full px-4 pt-5 pb-2 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0047AB] focus:outline-none transition-all" />
                      <label className="absolute left-4 top-3.5 text-gray-500 text-sm peer-focus:text-xs peer-focus:-top-1 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#0047AB] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">Objet *</label>
                    </div>

                    <div className="relative">
                      <textarea required rows={4} placeholder=" " value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="peer w-full px-4 pt-5 pb-2 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0047AB] focus:outline-none transition-all resize-none" />
                      <label className="absolute left-4 top-3.5 text-gray-500 text-sm peer-focus:text-xs peer-focus:-top-1 peer-focus:bg-white peer-focus:px-1 peer-focus:text-[#0047AB] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:-top-1 peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1 transition-all pointer-events-none">Message *</label>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black shadow-sm">{num1}</span>
                        <span className="text-gray-400">+</span>
                        <span className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black shadow-sm">{num2}</span>
                        <span className="text-gray-400">=</span>
                      </div>
                      <input required type="number" value={form.captcha} onChange={e=>setForm({...form,captcha:e.target.value})} className="w-20 px-3 py-2 rounded-xl bg-white border-2 border-gray-200 focus:border-[#0047AB] focus:outline-none text-center font-bold" placeholder="?" />
                    </div>

                    <button type="submit" disabled={sent} className="group relative w-full overflow-hidden bg-[#0047AB] hover:bg-[#003399] text-white font-black py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-900/25 hover:shadow-xl hover:shadow-blue-900/30 disabled:opacity-70">
                      <span className="relative z-10 flex items-center justify-center gap-2 uppercase tracking-wider">
                        {sent? <><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg> Envoyé</> : 'Envoyer le message'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFCC00]/0 via-[#FFCC00]/20 to-[#FFCC00]/0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                    </button>
                  </form>
                </div>

                <div className="lg:col-span-2 relative bg-gradient-to-br from-[#0047AB] to-[#001a4d] p-8 md:p-12 flex flex-col justify-center text-white">
                  <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
                  <div className="relative">
                    <h4 className="text-2xl font-black mb-4" style={{fontFamily:'Georgia, serif'}}>CSIG Bangui</h4>
                    <p className="text-blue-100 mb-6 leading-relaxed">Complexe Scolaire d'Informatique et de Gestion. Du préscolaire au lycée, l'excellence depuis Bangui.</p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">🕒</div><span>Lundi - Vendredi: 7h30 - 17h00</span></div>
                      <div className="flex items-center gap-3"><div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">📍</div><span>SICA 1, près Hôpital Général</span></div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/20">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 backdrop-blur">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.5!2d18.5582!3d4.3947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMjMnNDAuOSJOIDE4wrAzMyczMC4wIkU!5e0!3m2!1sfr!2scf!4v1" width="100%" height="100%" style={{border:0, filter:'grayscale(1) invert(0.9) contrast(0.9)'}} allowFullScreen loading="lazy" title="CSIG"></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activites;