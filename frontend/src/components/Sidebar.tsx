import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-8 text-center border-b border-gray-700 pb-4">Mon Espace</h2>
      <nav className="space-y-2">
        <Link to="/dashboard" className="block px-4 py-2 rounded hover:bg-gray-700 transition">📊 Vue d'ensemble</Link>
        <Link to="/profile" className="block px-4 py-2 rounded hover:bg-gray-700 transition">👤 Mon Profil</Link>
        <Link to="/courses" className="block px-4 py-2 rounded hover:bg-gray-700 transition">📚 Mes Cours</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;