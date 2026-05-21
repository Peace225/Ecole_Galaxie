const supabase = require('../services/supabaseClient');

// --- INSCRIPTION ---
exports.register = async (req, res) => {
  const { email, password, name, role, level } = req.body;

  try {
    // 1. Créer l'utilisateur dans le système d'authentification de Supabase
    const { data: authData, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true // Valide l'email automatiquement pour le développement
    });

    if (authError) throw authError;

    // 2. Ajouter les informations supplémentaires dans notre table 'users'
    const { error: dbError } = await supabase
      .from('users')
      .insert([{ 
        id: authData.user.id, 
        name, 
        email, 
        role: role || 'student', 
        level 
      }]);

    if (dbError) throw dbError;

    res.status(201).json({ 
      message: 'Utilisateur créé avec succès !', 
      user: { id: authData.user.id, name, email, role }
    });

  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// --- CONNEXION ---
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Vérifier les identifiants avec Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    // Récupérer le profil complet depuis la table 'users'
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (userError) throw userError;

    // On renvoie le token (session) et les infos de l'utilisateur
    res.status(200).json({ 
      message: 'Connexion réussie', 
      session: data.session,
      user: userData
    });

  } catch (error) {
    res.status(401).json({ error: 'Email ou mot de passe incorrect.' });
  }
};