import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-20 py-12 bg-gray-50">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
        Contact Us
      </h1>
      <hr className="border-2 w-full max-w-4xl mb-8" />
      <form className="bg-white w-full max-w-lg p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="border border-gray-300 p-3 w-full rounded outline-none transition duration-300 focus:border-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-3 w-full rounded outline-none transition duration-300 focus:border-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Enter your message"
            className="border border-gray-300 p-3 w-full rounded outline-none transition duration-300 focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-3 rounded w-full hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
