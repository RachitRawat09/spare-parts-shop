import React, { useState } from 'react';
import axios from 'axios';
import logo from '../../assets/login.jpg';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
  
    try {
      const res = await axios.post('http://localhost:5050/api/login', formData);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setSuccess(res.data.message || 'Login successful!');
      toast.success('Login successful!');
  
      // Notify Navbar
      window.dispatchEvent(new Event('login'));
  
      setTimeout(() => {
        navigate('/');
      }, 1500);
  
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
      toast.error('Login failed!');
    }
  };
  
  

  return (
    <div className="min-h-screen flex">
      <ToastContainer />
      {/* Left Side - Logo */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-4">
        <img src={logo} alt="Kanban Logo" className="w-108 mb-4" />
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center px-8">
        <img src={logo} alt="logo" className="w-32 mb-0" />
        <h2 className="text-2xl font-bold mb-1">Log in to your account</h2>
        <p className="text-gray-500 mb-6">Welcome back! Please enter your details.</p>

        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {success && <p className="text-green-600 text-sm">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign in
          </button>
        </form>

        <p className="text-sm mt-6">
          Don’t have an account?{' '}
          <a href="/register" className="text-sky-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
