import { Link } from 'react-router-dom';
import React from 'react';

export function Navbar  () {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-blue-600">
        EventDash
      </Link>
      <div className="space-x-4">
        <Link to="/" className="text-gray-600 hover:text-blue-600">
          Home
        </Link>
        <Link to="/dashboard" className="text-gray-600 hover:text-blue-600">
          Dashboard
        </Link>
        <Link to="/login" className="text-gray-600 hover:text-blue-600">
          Login
        </Link>
        <Link to="/signup" className="text-gray-600 hover:text-blue-600">
          Signup
        </Link>
      </div>
    </nav>
  );
};
