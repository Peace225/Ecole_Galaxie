const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importation des routes (nous allons créer authRoutes juste après)
const authRoutes = require('./routes/authRoutes');

// Déclaration des routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API Backend EduPlateforme en ligne 🚀');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});