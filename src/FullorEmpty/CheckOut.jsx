import React from "react";

const CheckOut = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 mt-28">
      <h1 className="text-5xl font-semibold text-center">Checkout</h1>
      <hr className="border-2 w-[100%] mt-5" />
      <div className="border-2 border-gray-500 p-4 rounded-lg mb-6 mt-10">
        <h2 className="text-lg font-semibold mb-2">Billing Address</h2>
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="first-name" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address2" className="block mb-1">
              Address 2 (optional)
            </label>
            <input
              type="text"
              id="address2"
              className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="country" className="block mb-1">
                Country
              </label>
              <select
                id="country"
                className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
              </select>
            </div>
            <div>
              <label htmlFor="state" className="block mb-1">
                State
              </label>
              <select
                id="state"
                className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
              >
                <option value="">Select State</option>
                <option value="ny">New York</option>
                <option value="ca">California</option>
                <option value="tx">Texas</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="zip" className="block mb-1">
              Zip
            </label>
            <input
              type="text"
              id="zip"
              className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
              required
            />
          </div>
        </form>
        <h2 className="text-lg font-semibold mb-2">Payment</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name-on-card" className="block mb-1">
              Name on Card
            </label>
            <input
              type="text"
              id="name-on-card"
              className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="credit-card-number" className="block mb-1">
              Credit Card Number
            </label>
            <input
              type="text"
              id="credit-card-number"
              className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
              required
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiration" className="block mb-1">
                Expiration
              </label>
              <input
                type="text"
                id="expiration"
                className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
                placeholder="MM/YY"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="border-2 outline-none transition duration-300 focus:border-blue-600 rounded w-full p-2"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-5 py-2  bg-blue-600 text-white rounded-lg"
          >
            Continue to checkout
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
