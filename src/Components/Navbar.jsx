// Navbar.js
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, LogIn, UserPlus } from "lucide-react";

const Navbar = () => {

  return (
    <nav className="flex fixed top-0 left-0 right-0 z-50 justify-between items-center py-6 px-4 bg-gray-100 text-black">
      <Link to="/" className="text-2xl font-bold ml-10">
        React Ecommerce
      </Link>
      <div className="flex space-x-4">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:underline">
          Products
        </NavLink>
        <NavLink to="/about" className="hover:underline">
          About
        </NavLink>
        <NavLink to="/contact" className="hover:underline">
          Contact
        </NavLink>
      </div>
      <div className="flex space-x-4 mr-10">
        <Link
          to="/login"
          className="flex items-center bg-gray-100 border-2 text-black px-4 py-2 rounded-xl transition transform duration-300 hover:bg-black hover:text-white"
        >
          <LogIn className="mr-2" size={18} /> Login
        </Link>
        <Link
          to="/register"
          className="flex items-center bg-gray-100 border-2 text-black px-4 py-2 rounded-xl transition transform duration-300 hover:bg-black hover:text-white"
        >
          <UserPlus className="mr-2" size={18} /> Register
        </Link>
        <Link
          to="/cart"
          className="flex items-center bg-gray-100 border-2 text-black px-4 py-2 rounded-xl transition transform duration-300 hover:bg-black hover:text-white"
        >
          <ShoppingCart className="mr-2" size={18} /> Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
