// L'URL de votre backend Node.js (par défaut sur le port 5000 en local)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const api = {
  // Exemple d'une méthode pour récupérer tous les cours
  getCourses: async () => {
    try {
      const response = await fetch(`${API_URL}/courses`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) throw new Error('Erreur lors de la récupération des cours');
      return await response.json();
    } catch (error) {
      console.error('API Error (getCourses):', error);
      throw error;
    }
  },

  // Exemple d'une méthode pour envoyer le résultat d'un quiz
  submitQuizResult: async (userId: string, quizId: string, score: number) => {
    try {
      const response = await fetch(`${API_URL}/quizzes/results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, quizId, score }),
      });
      if (!response.ok) throw new Error('Erreur lors de la sauvegarde du score');
      return await response.json();
    } catch (error) {
      console.error('API Error (submitQuizResult):', error);
      throw error;
    }
  }
};