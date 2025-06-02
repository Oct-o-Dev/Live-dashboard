import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export const ProtectedRoute = ({ children }: { children: React.ReactElement }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    };

    getSession();
  }, []);

  if (isAuthenticated === null) return <div className="text-center mt-10">Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
