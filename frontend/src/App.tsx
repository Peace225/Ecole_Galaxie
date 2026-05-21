import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import DashboardLayout from './layouts/DashboardLayout';

// Pages publiques
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import Quiz from './pages/Quiz';
import MotDuDirecteur from './pages/MotDuDirecteur';
import MissionVision from './pages/MissionVision';
import Ecole from './pages/Ecole';
import ProjetEducatif from './pages/ProjetEducatif';
import Prescolaire from './pages/Prescolaire';
import Primaire from './pages/Primaire';
import Secondaire from './pages/Secondaire';
import ReglementInterieur from './pages/ReglementInterieur';
import College from './pages/College';
import Lycee from './pages/Lycee';
import Admission from './pages/Admission';
import Actualites from './pages/Actualites';
import EspaceParent from './pages/EspaceParent';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';

// --- NOUVELLES PAGES ---
import Activites from './pages/Activites';
import Resultats from './pages/Resultats';

// Pages privées
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
        <Routes>
          {/* PUBLIC */}
          <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
          <Route path="/qui-sommes-nous" element={<><Navbar /><About /><Footer /></>} />
          
          <Route path="/activites" element={<><Navbar /><Activites /><Footer /></>} />
          <Route path="/resultats" element={<><Navbar /><Resultats /><Footer /></>} />
          
          <Route path="/login" element={<><Navbar /><Login /><Footer /></>} />
          <Route path="/courses" element={<><Navbar /><Courses /><Footer /></>} />
          <Route path="/courses/:id" element={<><Navbar /><CourseDetail /><Footer /></>} />
          <Route path="/quiz/:id" element={<><Navbar /><Quiz /><Footer /></>} />
          <Route path="/mot-du-directeur" element={<><Navbar /><MotDuDirecteur /><Footer /></>} />
          <Route path="/mission-vision" element={<><Navbar /><MissionVision /><Footer /></>} />
          <Route path="/ecole" element={<><Navbar /><Ecole /><Footer /></>} />
          <Route path="/projet-educatif" element={<><Navbar /><ProjetEducatif /><Footer /></>} />
          <Route path="/prescolaire" element={<><Navbar /><Prescolaire /><Footer /></>} />
          <Route path="/primaire" element={<><Navbar /><Primaire /><Footer /></>} />
          <Route path="/secondaire" element={<><Navbar /><Secondaire /><Footer /></>} />
          <Route path="/reglement-interieur" element={<><Navbar /><ReglementInterieur /><Footer /></>} />
          <Route path="/college" element={<><Navbar /><College /><Footer /></>} />
          <Route path="/lycee" element={<><Navbar /><Lycee /><Footer /></>} />
          <Route path="/admission" element={<><Navbar /><Admission /><Footer /></>} />
          <Route path="/actualites" element={<><Navbar /><Actualites /><Footer /></>} />
          <Route path="/parents" element={<><Navbar /><EspaceParent /><Footer /></>} />
          <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
          <Route path="/faq" element={<><Navbar /><Faq /><Footer /></>} />
          <Route path="/mentions" element={<><Navbar /><MentionsLegales /><Footer /></>} />
          <Route path="/confidentialite" element={<><Navbar /><Confidentialite /><Footer /></>} />

          {/* PRIVÉ */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;