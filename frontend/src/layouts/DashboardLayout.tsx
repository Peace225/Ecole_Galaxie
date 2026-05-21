import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Le contenu des pages du dashboard s'affichera ici */}
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;