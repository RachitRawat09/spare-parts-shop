import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-64 right-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
    {/* Left - Search Bar */}
    <div className="flex items-center w-full md:w-1/2">
      <input
        type="text"
        placeholder="Search items..."
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Right - Login */}
    <div className="flex items-center mr-2 ">
      <NavLink
        to="/login"
        className="text-gray-700 hover:text-blue-600 font-medium"
      >
        Login
      </NavLink>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
