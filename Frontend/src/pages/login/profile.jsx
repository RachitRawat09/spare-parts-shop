// src/pages/Profile.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import defaultAvatar from '../../assets/profile.png';

const Profile = () => {
  const navigate = useNavigate();

  // Load user from localStorage on mount
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : {};
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle image upload & convert to base64
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const base64 = await convertToBase64(file);
    const updatedUser = { ...user, profile: base64 };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    window.dispatchEvent(new Event('login')); // notify Navbar
  };

  // Remove profile image
  const handleDeleteImage = () => {
    const updatedUser = { ...user, profile: null };
    setUser(updatedUser);
    localStorage.setItem('user', JSON.stringify(updatedUser));
    window.dispatchEvent(new Event('login'));
  };

  // On input change update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  // Save edits after validation
  const handleSave = () => {
    if (!user.name?.trim() || !user.phone?.trim() || !user.dob) {
      alert('Please fill in all required fields');
      return;
    }
    if (!/^\d{10}$/.test(user.phone)) {
      alert('Enter a valid 10-digit phone number');
      return;
    }
    localStorage.setItem('user', JSON.stringify(user));
    setIsEditing(false);
    window.dispatchEvent(new Event('login'));
  };

  // Cancel editing (revert to saved data)
  const handleCancel = () => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
    setIsEditing(false);
  };

  // Convert file to base64 string
  const convertToBase64 = (file) => new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => res(reader.result);
    reader.onerror = (err) => rej(err);
  });

  return (
    <div className="max-w-3xl mx-auto mt-24 p-6 bg-white rounded-lg shadow-md relative">
      {/* Cross Icon top-right */}
      <button
        onClick={() => navigate('/')}
        aria-label="Close Profile"
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        title="Close Profile"
      >
        &times;
      </button>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center space-y-4">
          <img
            src={user.profile || defaultAvatar}
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-blue-400 object-cover shadow-md"
          />
          <div className="flex gap-4">
            <label
              className="cursor-pointer bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              title="Upload New Profile Image"
            >
              Edit
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
            <button
              onClick={handleDeleteImage}
              className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
              title="Remove Profile Image"
            >
              Delete
            </button>
          </div>
        </div>

        {/* User Info Section */}
        <div className="flex-grow w-full">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Personal Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Username */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Username</label>
              <input
                type="text"
                name="name"
                value={user.name || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="Enter your name"
                className={`border rounded-md px-4 py-2 ${
                  isEditing ? 'border-blue-500 focus:ring-2 focus:ring-blue-300' : 'bg-gray-100 cursor-not-allowed'
                }`}
              />
            </div>

            {/* Email (not editable) */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={user.email || ''}
                disabled
                className="border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={user.phone || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                placeholder="10-digit phone number"
                className={`border rounded-md px-4 py-2 ${
                  isEditing ? 'border-blue-500 focus:ring-2 focus:ring-blue-300' : 'bg-gray-100 cursor-not-allowed'
                }`}
              />
            </div>

            {/* Date of Birth */}
            <div className="flex flex-col">
              <label className="mb-1 font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={user.dob || ''}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`border rounded-md px-4 py-2 ${
                  isEditing ? 'border-blue-500 focus:ring-2 focus:ring-blue-300' : 'bg-gray-100 cursor-not-allowed'
                }`}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8">
            {isEditing ? (
              <div className="flex gap-6">
                <button
                  onClick={handleSave}
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
                >
                  Save
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
              >
                Edit Details
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
