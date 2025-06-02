import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabaseClient';

export const DashboardNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-blue-700 text-white shadow">
      <h1 className="text-xl font-bold">EventDash</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Live Stats</Link>
        <Link to="/dashboard/events" className="hover:underline">Recent Events</Link>
        <Link to="/dashboard/settings" className="hover:underline">Settings</Link>
        <button onClick={handleLogout} className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-100">
          Logout
        </button>
      </div>
    </nav>
  );
};
