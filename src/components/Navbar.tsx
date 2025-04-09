import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, LogOut, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md overflow-hidden">
            <style>{`
                    .nav-link {
                      position: relative;
                      padding-bottom: 0.25rem;
                      color: #4b5563; /* gray-600 */
                      transition: all 0.3s ease;
                    }
                    .nav-link:hover {
                      color: #111827; /* gray-900 */
                    }
                    .nav-link::after {
                      content: '';
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      height: 2px;
                      background: #16a34a; /* green-600 */
                      transform: scaleX(0);
                      transform-origin: left;
                      transition: transform 0.3s ease;
                    }
                    .nav-link.active::after {
                      transform: scaleX(1);
                    }
                 `}    
            </style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[80px]">
          {/* Logo */}
          
          <Link to="/" className="flex items-center gap-2 z-0 overflow-hidden">
            <img 
              src="/nav_logo.png" 
              alt="Altshire Logo" 
              className="z-0 h-[100px] sm:h-[130px] md:h-[150px] lg:h-[170px] w-auto z-0 overflow-hidden" 
            />
          </Link>


          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/properties" className={`nav-link ${isActive('/properties') ? 'active' : ''}`}>Properties</Link>
            <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About</Link>
            <Link to="/projects" className={`nav-link ${isActive('/projects') ? 'active' : ''}`}>Project</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'active' : ''}`}>
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={`nav-link ${isActive('/login') ? 'active' : ''}`}>Login</Link>
                <Link to="/signup" className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800">Join Free</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-6 space-y-4 flex flex-col items-center text-center">
          <Link to="/" onClick={toggleMenu} className={`${isActive('/') ? 'text-green-600' : 'text-gray-600'} hover:text-green-700 transition-colors duration-200`}>
            Home
          </Link>
          <Link to="/properties" onClick={toggleMenu} className={`${isActive('/properties') ? 'text-green-600' : 'text-gray-600'} hover:text-green-700 transition-colors duration-200`}>
            Properties
          </Link>
          <Link to="/about" onClick={toggleMenu} className={`${isActive('/about') ? 'text-green-600' : 'text-gray-600'} hover:text-green-700 transition-colors duration-200`}>
            About
          </Link>
          <Link to="/projects" onClick={toggleMenu} className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-600'} hover:text-green-700 transition-colors duration-200`}>
            Project
          </Link>
          <Link to="/contact" onClick={toggleMenu} className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-600'} hover:text-green-700 transition-colors duration-200`}>
            Contact
          </Link>
        
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" onClick={toggleMenu} className={`${isActive('/dashboard') ? 'text-green-600' : 'text-gray-600'} hover:text-green-700 transition-colors duration-200 flex items-center gap-2`}>
                Dashboard
              </Link>
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="text-gray-600 hover:text-green-700 transition-colors duration-200 flex items-center gap-2">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu} className={`${isActive('/login') ? 'text-green-600' : 'text-gray-600'} hover:text-green-700 transition-colors duration-200`}>
                Login
              </Link>
              <Link to="/signup" onClick={toggleMenu} className="px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-full transition duration-200">
                Join Free
              </Link>
            </>
          )}
        </div>
      
      )}
    </nav>
  );
};

export default Navbar;
