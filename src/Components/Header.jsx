import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full shadow z-50 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold text-blue-400">
          MyApp
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/products" className="hover:text-blue-400">Products</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </nav>

        {/* Buttons */}
        <div className="flex space-x-3">
          <Link to="/login" className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition">
            Login
          </Link>
          <Link to="/signup" className="px-4 py-1 bg-blue-500 rounded hover:bg-blue-600 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;