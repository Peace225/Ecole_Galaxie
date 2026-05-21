const Profile = () => {
  // Fausses données utilisateur
  const user = {
    name: "Alexandre Dupont",
    email: "alexandre.d@example.com",
    role: "student",
    level: "college",
    avatar: "A"
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Mon Profil</h1>
      
      <div className="bg-white shadow rounded-xl overflow-hidden border border-gray-100">
        {/* En-tête du profil */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-32"></div>
        
        <div className="px-8 pb-8">
          <div className="relative flex justify-between items-end -mt-12 mb-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-blue-600 shadow-lg border-4 border-white">
              {user.avatar}
            </div>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-300 rounded shadow-sm transition">
              Modifier le profil
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Informations personnelles */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Informations Personnelles</h3>
              <div>
                <label className="block text-sm font-medium text-gray-500">Nom complet</label>
                <div className="mt-1 text-gray-900 font-medium">{user.name}</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Adresse email</label>
                <div className="mt-1 text-gray-900 font-medium">{user.email}</div>
              </div>
            </div>

            {/* Informations scolaires */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Scolarité</h3>
              <div>
                <label className="block text-sm font-medium text-gray-500">Rôle</label>
                <div className="mt-1">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded capitalize">
                    {user.role === 'student' ? 'Élève' : user.role}
                  </span>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-500">Niveau d'étude</label>
                <div className="mt-1 text-gray-900 font-medium capitalize">{user.level}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;