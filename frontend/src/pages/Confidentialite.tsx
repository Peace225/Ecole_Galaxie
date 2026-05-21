import { motion } from 'framer-motion';

const Confidentialite = () => {
  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen pb-24">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-[#0047AB] py-16 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Politique de <span className="text-[#FFCC00]">Confidentialité</span>
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
          <p className="text-lg font-medium italic text-gray-500 border-l-4 border-[#FFCC00] pl-4">
            Le Groupe Scolaire Le Jourdain accorde une importance primordiale au respect de la vie privée de ses élèves, parents d'élèves et visiteurs.
          </p>

          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">1. Données collectées</h2>
            <p className="leading-relaxed mb-4">Nous collectons des données personnelles lorsque vous :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Remplissez un formulaire d'admission en ligne (noms, prénoms, date de naissance, contacts).</li>
              <li>Vous connectez au portail "Espace Parent".</li>
              <li>Utilisez notre formulaire de contact.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">2. Utilisation des données</h2>
            <p className="leading-relaxed">
              Les données recueillies sont strictement nécessaires à la gestion administrative et pédagogique des élèves (inscriptions, suivi scolaire, facturation, communication avec les parents). Elles ne sont en aucun cas vendues ou cédées à des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">3. Sécurité</h2>
            <p className="leading-relaxed">
              Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles (chiffrement des mots de passe, accès restreints) pour protéger vos données contre tout accès non autorisé, altération, divulgation ou destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">4. Vos droits</h2>
            <p className="leading-relaxed">
              Conformément à la législation en vigueur relative à la protection des données, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition au traitement de vos données. Pour exercer ce droit, veuillez contacter l'administration à l'adresse suivante : <strong>contact@lejourdain.ci</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-[#0047AB] uppercase mb-4">5. Cookies</h2>
            <p className="leading-relaxed">
              Notre site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement (ex: maintien de la session de connexion sur l'Espace Parent). Nous n'utilisons pas de cookies de traçage publicitaire intrusifs.
            </p>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Confidentialite;