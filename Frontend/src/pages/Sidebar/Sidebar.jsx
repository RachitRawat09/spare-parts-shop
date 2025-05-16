import React from 'react';
import { FaHome, FaUser, FaClipboardList, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white shadow-lg fixed left-0 top-0 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="p-6 text-2xl font-bold text-blue-600">🧾 SparePartsHub</div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2 px-4">
          <NavLink to="/" className="flex items-center p-2 text-gray-700 hover:bg-blue-100 rounded">
            <FaHome className="mr-3" /> Billing
          </NavLink>
          <NavLink to="/product" className="flex items-center p-2 text-gray-700 hover:bg-blue-100 rounded">
            <FaUser className="mr-3" /> Products
          </NavLink>
          <NavLink to="/saletracker" className="flex items-center p-2 text-gray-700 hover:bg-blue-100 rounded">
            <FaClipboardList className="mr-3" /> Sale Tracker
          </NavLink>
          <NavLink to="/" className="flex items-center p-2 text-gray-700 hover:bg-blue-100 rounded">
            <FaShoppingCart className="mr-3" /> Orders
          </NavLink>
        </nav>
      </div>

      {/* Logout */}
      <div className="p-4 border-t">
        <button className="flex items-center w-full p-2 text-red-600 hover:bg-red-50 rounded">
          <FaSignOutAlt className="mr-3" /> Dark Mode
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
