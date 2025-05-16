import React from 'react';
import logo from '../../assets/login.jpg';
const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Logo */}
      <div className="w-1/2 bg-white flex flex-col justify-center items-center px-4">
        <img
          src={logo} // Replace with actual logo path
          alt="Kanban Logo"
          className="w-108 mb-4"
        />
        
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 bg-gray-50 flex flex-col justify-center items-center px-8">
        <img src={logo} alt="logo" className="w-32 mb-0" />
        <h2 className="text-2xl font-bold mb-1">Log in to your account</h2>
        <p className="text-gray-500 mb-6">Welcome back! Please enter your details.</p>

        <form className="w-full max-w-sm space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember for 30 days
            </label>
            <a href="#" className="text-sky-500 hover:underline">
              Forgot password
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Sign in
          </button>

          <button
            type="button"
            className="w-full border border-gray-300 flex items-center justify-center py-2 rounded-lg hover:bg-gray-100"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 mr-2" />
            Sign in with Google
          </button>
        </form>

        <p className="text-sm mt-6">
          Don’t have an account?{' '}
          <a href="#" className="text-sky-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
