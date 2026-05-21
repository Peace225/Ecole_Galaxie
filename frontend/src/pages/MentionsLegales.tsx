import { motion } from 'framer-motion';

const MentionsLegales = () => {
  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen pb-24">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] py-16 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Mentions <span className="text-[#FFCC00]">Légales</span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-[#FFCC00] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- CONTENU --- */}
      <section className="container mx-auto px-6 max-w-4xl mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-14 rounded-[2rem] shadow-xl border border-gray-100 text-gray-700 space-y-10"
        >
          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">1. Éditeur du site</h2>
            <p className="leading-relaxed">
              Le présent site web est édité par le <strong>Groupe Scolaire Le Jourdain</strong>, établissement d'enseignement privé reconnu par l'État de Côte d'Ivoire.<br /><br />
              <strong>Siège social :</strong> Quartier Kennedy, Bouaké, Côte d'Ivoire.<br />
              <strong>Téléphone :</strong> +225 07 00 00 00 00<br />
              <strong>Email :</strong> contact@lejourdain.ci<br />
              <strong>Directeur de la publication :</strong> M. Kouamé (Directeur Général)
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">2. Hébergement</h2>
            <p className="leading-relaxed">
              Ce site est hébergé par [Nom de l'hébergeur, ex: OVH, Vercel, etc.], dont le siège social est situé à [Adresse de l'hébergeur].
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">3. Propriété Intellectuelle</h2>
            <p className="leading-relaxed">
              L'ensemble de ce site relève de la législation ivoirienne et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">4. Limitation de responsabilité</h2>
            <p className="leading-relaxed">
              Le Groupe Scolaire Le Jourdain s'efforce d'assurer au mieux de ses possibilités, l'exactitude et la mise à jour des informations diffusées sur ce site. L'école se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default MentionsLegales;