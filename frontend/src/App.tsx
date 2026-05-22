import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Layout
import Navbar from './components/Navbar';
import Footer from './pages/Footer'; // assure-toi que le fichier s'appelle Footer.tsx
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
import College from './pages/College'; // renommé en College.tsx
import Lycee from './pages/Lycee';
import Admission from './pages/Admission';
import Actualites from './pages/Actualites';
import EspaceParent from './pages/EspaceParent';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import MentionsLegales from './pages/MentionsLegales';
import Confidentialite from './pages/Confidentialite';
import Activites from './pages/Activites';
import Resultats from './pages/Resultats';

// Pages privées
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

// Layout public réutilisable
const PublicLayout = () => (
  <>
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
        <Routes>
          {/* ROUTES PUBLIQUES avec layout */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/qui-sommes-nous" element={<About />} />
            <Route path="/activites" element={<Activites />} />
            <Route path="/resultats" element={<Resultats />} />
            <Route path="/login" element={<Login />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
            <Route path="/quiz/:id" element={<Quiz />} />
            <Route path="/mot-du-directeur" element={<MotDuDirecteur />} />
            <Route path="/mission-vision" element={<MissionVision />} />
            <Route path="/ecole" element={<Ecole />} />
            <Route path="/projet-educatif" element={<ProjetEducatif />} />
            <Route path="/prescolaire" element={<Prescolaire />} />
            <Route path="/primaire" element={<Primaire />} />
            <Route path="/secondaire" element={<Secondaire />} />
            <Route path="/college" element={<College />} />
            <Route path="/lycee" element={<Lycee />} />
            <Route path="/reglement-interieur" element={<ReglementInterieur />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/actualites" element={<Actualites />} />
            <Route path="/parents" element={<EspaceParent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/mentions" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
          </Route>

          {/* ROUTES PRIVÉES */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<PublicLayout />}>
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;