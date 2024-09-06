import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Register</h1>
      <hr className="border-2 w-[80%] mb-5" />
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Full Name
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your name"
            className="border border-gray-300 p-2 w-full rounded outline-none transition duration-300 focus:border-blue-600 "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 w-full rounded outline-none transition duration-300 focus:border-blue-600 "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="border border-gray-300 p-2 w-full rounded outline-none transition duration-300 focus:border-blue-600"
          />
        </div>
        <div className="mb-4 text-center">
          <p className="text-gray-600">
            Already has an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Login;
