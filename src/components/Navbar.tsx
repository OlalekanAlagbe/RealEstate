// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Home } from 'lucide-react';

// const Navbar = () => {
//   const location = useLocation();
//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
//       <Link to="/" className="flex items-center gap-2">
//         <Home className="w-6 h-6 text-green-600" />
//         <span className="text-xl font-semibold text-green-600">livest</span>
//       </Link>
      
//       <div className="flex items-center space-x-6">
//         <Link 
//           to="/" 
//           className={`${isActive('/') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           Home
//         </Link>
//         <Link 
//           to="/properties" 
//           className={`${isActive('/properties') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           Properties
//         </Link>
//         <Link 
//           to="/about" 
//           className={`${isActive('/about') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           About
//         </Link>
//         <Link 
//           to="/contact" 
//           className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           Contact
//         </Link>
//         <Link 
//           to="/login" 
//           className={`${isActive('/login') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           Login
//         </Link>
//         <Link 
//           to="/signup" 
//           className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800"
//         >
//           Join Free
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Home, User, LogOut } from 'lucide-react';

// const Navbar = () => {
//   const location = useLocation();
//   const isActive = (path: string) => location.pathname === path;
  
//   // Check if user is authenticated (you might want to use a more robust check)
//   const isAuthenticated = !!localStorage.getItem('token');

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     // You might want to add additional logout logic here
//     window.location.href = '/'; // Redirect to home after logout
//   };

//   return (
//     <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
//       <Link to="/" className="flex items-center gap-2">
//         <Home className="w-6 h-6 text-green-600" />
//         <span className="text-xl font-semibold text-green-600">livest</span>
//       </Link>
      
//       <div className="flex items-center space-x-6">
//         <Link 
//           to="/" 
//           className={`${isActive('/') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           Home
//         </Link>
//         <Link 
//           to="/properties" 
//           className={`${isActive('/properties') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           Properties
//         </Link>
//         <Link 
//           to="/about" 
//           className={`${isActive('/about') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           About
//         </Link>
//         <Link 
//           to="/contact" 
//           className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//         >
//           Contact
//         </Link>

//         {isAuthenticated ? (
//           <>
//             <Link 
//               to="/dashboard" 
//               className={`${isActive('/dashboard') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900 flex items-center gap-1`}
//             >
//               <User className="w-5 h-5" />
//               Dashboard
//             </Link>
//             <button 
//               onClick={handleLogout}
//               className="text-gray-600 hover:text-gray-900 flex items-center gap-1"
//             >
//               <LogOut className="w-5 h-5" />
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link 
//               to="/login" 
//               className={`${isActive('/login') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}
//             >
//               Login
//             </Link>
//             <Link 
//               to="/signup" 
//               className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800"
//             >
//               Join Free
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;











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
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-6 h-6 text-green-600" />
            <span className="text-xl font-semibold text-green-600">livest</span>
          </Link>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 focus:outline-none">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className={`${isActive('/') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}>Home</Link>
            <Link to="/properties" className={`${isActive('/properties') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}>Properties</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}>About</Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}>Contact</Link>

            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className={`${isActive('/dashboard') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900 flex items-center gap-1`}>
                  <User className="w-5 h-5" />
                  Dashboard
                </Link>
                <button onClick={handleLogout} className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  <LogOut className="w-5 h-5" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className={`${isActive('/login') ? 'text-green-600' : 'text-gray-600'} hover:text-gray-900`}>Login</Link>
                <Link to="/signup" className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800">Join Free</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <Link to="/" onClick={toggleMenu} className={`${isActive('/') ? 'text-green-600' : 'text-gray-600'} block hover:text-gray-900`}>Home</Link>
          <Link to="/properties" onClick={toggleMenu} className={`${isActive('/properties') ? 'text-green-600' : 'text-gray-600'} block hover:text-gray-900`}>Properties</Link>
          <Link to="/about" onClick={toggleMenu} className={`${isActive('/about') ? 'text-green-600' : 'text-gray-600'} block hover:text-gray-900`}>About</Link>
          <Link to="/contact" onClick={toggleMenu} className={`${isActive('/contact') ? 'text-green-600' : 'text-gray-600'} block hover:text-gray-900`}>Contact</Link>

          {isAuthenticated ? (
            <>
              <Link to="/dashboard" onClick={toggleMenu} className={`${isActive('/dashboard') ? 'text-green-600' : 'text-gray-600'} block hover:text-gray-900 flex items-center gap-1`}>
                <User className="w-5 h-5" />
                Dashboard
              </Link>
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu} className={`${isActive('/login') ? 'text-green-600' : 'text-gray-600'} block hover:text-gray-900`}>Login</Link>
              <Link to="/signup" onClick={toggleMenu} className="block px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800 w-fit">Join Free</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
