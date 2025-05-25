// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import defaultAvatar from '../../assets/profile.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    const onLogin = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) setUser(JSON.parse(storedUser));
      else setUser(null);
    };
    window.addEventListener('login', onLogin);
    return () => window.removeEventListener('login', onLogin);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 left-64 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search items..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-4" ref={dropdownRef}>
  <div className="relative">
    {user ? (
      <img
        src={user.profile || defaultAvatar}
        alt="Profile"
        title={user.name || 'User'}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="w-12 h-12 rounded-full cursor-pointer border-2 border-blue-500 hover:border-blue-700 transition"
      />
    ) : (
      <>
        <NavLink
          to="/login"
          className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className="text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100 transition"
        >
          Register
        </NavLink>
      </>
    )}

    {dropdownOpen && (
      <div className="absolute right-0 top-full mt-2 w-40 bg-white border rounded-md shadow-lg py-2 z-50">
        <button
          onClick={() => {
            setDropdownOpen(false);
            navigate('/profile');
          }}
          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
        >
          Profile
        </button>
        <button
          onClick={() => {
            setDropdownOpen(false);
            handleLogout();
          }}
          className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    )}
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
