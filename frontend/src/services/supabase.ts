import { createClient } from '@supabase/supabase-js';

// On récupère les clés depuis les variables d'environnement de Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn("⚠️ Attention: Clés Supabase manquantes. N'oubliez pas de créer votre fichier .env");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);