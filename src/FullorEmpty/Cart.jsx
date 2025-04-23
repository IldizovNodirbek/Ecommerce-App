import React, { useState } from "react";
import Products from "../ProductData/Products";
import { Link } from "react-router-dom";

const Cart = () => {
  const [quantities, setQuantities] = useState(Products.map(() => 0));
  const [addedProducts, setAddedProducts] = useState([]);

  const increaseQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);

    if (newQuantities[index] === 1) {
      setAddedProducts((prev) => [
        ...prev,
        {
          id: Products[index].id,
          title: Products[index].title,
          image: Products[index].image,
        },
      ]);
    }
  };

  const decreaseQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);

      if (newQuantities[index] === 0) {
        setAddedProducts((prev) =>
          prev.filter((product) => product.id !== Products[index].id)
        );
      }
    }
  };

  const totalAmount = () => {
    return quantities
      .reduce((total, quantity, index) => {
        return (
          total + parseFloat(Products[index].price.replace("$", "")) * quantity
        );
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="bg-gray-100 p-5 sm:p-10 mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-5">Cart</h1>
      <hr className="w-[85%] border-2 mb-5 mx-auto" />

      <div className="flex flex-col sm:flex-row justify-center space-x-0 sm:space-x-10">
        {/* Item List Section */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-5 sm:w-2/3 w-full mb-10 sm:mb-0">
          <h2 className="text-2xl font-semibold mb-3">Item List</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Products.map((product, index) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-2">{product.description}</p>
                  <p className="font-bold text-lg mb-4">{product.price}</p>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-gray-300 text-black px-3 py-2 rounded transition duration-300 hover:bg-gray-400"
                      onClick={() => decreaseQuantity(index)}
                    >
                      -
                    </button>
                    <span className="mx-2">{quantities[index]}</span>
                    <button
                      className="bg-gray-300 text-black px-3 py-2 rounded transition duration-300 hover:bg-gray-400"
                      onClick={() => increaseQuantity(index)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Amount Section */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-5 sm:w-1/3 w-full flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-3">Total Amount</h2>
          <p className="text-xl font-bold mb-5">Total amount: ${totalAmount()}</p>
          <hr className="w-full mb-5" />

          {/* Added Products */}
          <div className="flex-grow mb-5 w-full">
            {addedProducts.map((product) => (
              <div key={product.id} className="flex items-center mb-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-cover mr-2"
                />
                <span className="text-sm">
                  {product.title} <span className="font-semibold">was added</span>
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/checkout"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl w-full text-center transition transform duration-300 hover:bg-blue-700"
          >
            Go to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
