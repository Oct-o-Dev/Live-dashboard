import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LandingNavbar } from './components/Navbar/LandingNavbar';
import { DashboardNavbar } from './components/Navbar/DashboardNavbar';
import { ProtectedRoute } from './components/ProtectedRoute';
import { LandingPage } from './pages/LandingPage';
import { Login } from './auth/Login';
import { Signup } from './auth/Signup';
import { Dashboard } from './dashboard/Dashboard';

function AppContent() {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <div>
      {isDashboard ? <DashboardNavbar /> : <LandingNavbar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
