const Partners = () => {
  const partners = [
    { name: "Ministère de l'Éducation", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Logo_MENA.png/800px-Logo_MENA.png" },
    { name: "UNESCO", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/UNESCO_logo.svg/1200px-UNESCO_logo.svg.png" },
    { name: "Microsoft Education", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png" },
    { name: "CIE", logo: "https://www.cie.ci/images/logo-cie.png" },
    { name: "BNI", logo: "https://www.bni.ci/images/logo.png" }
  ];

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        
        {/* Titre avec un style plus moderne */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-black text-[#002D72] uppercase tracking-[0.3em]">
            Nos Partenaires de Confiance
          </h2>
          <div className="w-20 h-1.5 bg-[#FFCC00] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grille élégante avec cartes flottantes */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="group flex items-center justify-center p-6 bg-white rounded-3xl border border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-2xl hover:border-[#0047AB]/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-16 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        {/* Note de bas de section optionnelle */}
        <p className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mt-16 italic">
          Engagés ensemble pour l'avenir de la jeunesse centrafricaine
        </p>
      </div>
    </section>
  );
};

export default Partners;