import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Home, Briefcase, DollarSign, LogOut } from 'lucide-react';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-xl">PM System</span>
        </div>
        {user && (
          <div className="flex items-center space-x-4">
            <Link to="/" className="hover:text-blue-200 flex items-center">
              <Home className="h-5 w-5 mr-1" />
              Dashboard
            </Link>
            <Link to="/projects" className="hover:text-blue-200 flex items-center">
              <Briefcase className="h-5 w-5 mr-1" />
              Projects
            </Link>
            <Link to="/budget" className="hover:text-blue-200 flex items-center">
              <DollarSign className="h-5 w-5 mr-1" />
              Budget
            </Link>
            <button onClick={logout} className="hover:text-blue-200 flex items-center">
              <LogOut className="h-5 w-5 mr-1" />
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;