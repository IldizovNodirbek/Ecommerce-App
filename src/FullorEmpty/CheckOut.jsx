import React from "react";

const CheckOut = () => {
  return (
    <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 mt-20">
      <h1 className="text-3xl sm:text-5xl font-semibold text-center">
        Checkout
      </h1>
      <hr className="border-t-2 border-gray-300 w-full mt-5" />

      <div className="border border-gray-300 shadow-md p-6 sm:p-8 rounded-lg mt-10 bg-white">
        <h2 className="text-xl font-semibold mb-4">Billing Address</h2>

        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-medium mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-medium mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address2"
              className="block text-sm font-medium mb-1"
            >
              Address 2 (optional)
            </label>
            <input
              type="text"
              id="address2"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium mb-1"
              >
                Country
              </label>
              <select
                id="country"
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="canada">Canada</option>
                <option value="uk">UK</option>
              </select>
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-1">
                State
              </label>
              <select
                id="state"
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select State</option>
                <option value="ny">New York</option>
                <option value="ca">California</option>
                <option value="tx">Texas</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="zip" className="block text-sm font-medium mb-1">
              Zip
            </label>
            <input
              type="text"
              id="zip"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </form>

        <h2 className="text-xl font-semibold mb-4">Payment</h2>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name-on-card"
              className="block text-sm font-medium mb-1"
            >
              Name on Card
            </label>
            <input
              type="text"
              id="name-on-card"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="credit-card-number"
              className="block text-sm font-medium mb-1"
            >
              Credit Card Number
            </label>
            <input
              type="text"
              id="credit-card-number"
              className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                htmlFor="expiration"
                className="block text-sm font-medium mb-1"
              >
                Expiration
              </label>
              <input
                type="text"
                id="expiration"
                placeholder="MM/YY"
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium mb-1">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                className="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
