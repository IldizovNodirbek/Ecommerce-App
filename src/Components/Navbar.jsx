import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCart, LogIn, UserPlus, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 text-black shadow-md">
      <div className="flex justify-between items-center px-4 md:px-10 py-4">
        <Link to="/" className="text-2xl font-bold">
          React Ecommerce
        </Link>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-6">
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            to="/login"
            className="flex items-center border-2 px-4 py-2 rounded-xl hover:bg-black hover:text-white transition"
          >
            <LogIn className="mr-2" size={18} /> Login
          </Link>
          <Link
            to="/register"
            className="flex items-center border-2 px-4 py-2 rounded-xl hover:bg-black hover:text-white transition"
          >
            <UserPlus className="mr-2" size={18} /> Register
          </Link>
          <Link
            to="/cart"
            className="flex items-center border-2 px-4 py-2 rounded-xl hover:bg-black hover:text-white transition"
          >
            <ShoppingCart className="mr-2" size={18} /> Cart
          </Link>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Products
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Contact
          </NavLink>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="flex items-center border-2 px-4 py-2 rounded-xl hover:bg-black hover:text-white transition"
          >
            <LogIn className="mr-2" size={18} /> Login
          </Link>
          <Link
            to="/register"
            onClick={() => setIsOpen(false)}
            className="flex items-center border-2 px-4 py-2 rounded-xl hover:bg-black hover:text-white transition"
          >
            <UserPlus className="mr-2" size={18} /> Register
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="flex items-center border-2 px-4 py-2 rounded-xl hover:bg-black hover:text-white transition"
          >
            <ShoppingCart className="mr-2" size={18} /> Cart
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
