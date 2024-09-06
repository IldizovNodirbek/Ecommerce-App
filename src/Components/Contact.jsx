import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4 ">Contact Us</h1>
      <hr className="border-2 w-[80%] mb-10" />
      <form className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Name
          </label>
          <input
            type="text"
            id="text"
            placeholder="Enter your name"
            className="border border-gray-300 p-2 w-full rounded outline-none transition duration-300 focus:border-blue-600 "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 w-full rounded outline-none transition duration-300 focus:border-blue-600 "
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Name
          </label>
          <textarea
            type="message"
            id="message"
            placeholder="Enter your message"
            className="border border-gray-300 p-2 w-full rounded outline-none transition duration-300 focus:border-blue-600 "
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
