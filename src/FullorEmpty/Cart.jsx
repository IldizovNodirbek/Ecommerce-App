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
    <div className="bg-gray-100 p-10 mt-20">
      <h1 className="text-4xl font-bold text-center mb-5">Cart</h1>
      <hr className="w-[85%] border-2" />

      <div className="flex justify-center space-x-10">
        <div className="bg-white border border-black rounded-lg shadow-lg p-5 w-1/2 mt-10">
          <h2 className="text-2xl font-semibold mb-3">Item List</h2>
          {Products.map((product, index) => (
            <div key={product.id} className="flex items-center mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 h-20 object-cover mr-4"
              />
              <div className="flex-grow">
                <h3 className="text-xl font-medium">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="font-bold mt-2">{product.price}</p>
              </div>
              <div className="flex items-center">
                <button
                  className="bg-gray-300 text-black px-2 py-1 rounded"
                  onClick={() => decreaseQuantity(index)}
                >
                  -
                </button>
                <span className="mx-2">{quantities[index]}</span>
                <button
                  className="bg-gray-300 text-black px-2 py-1 rounded"
                  onClick={() => increaseQuantity(index)}
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-black rounded-lg shadow-lg p-5 w-1/4 mt-10 flex flex-col">
          <h2 className="text-2xl font-semibold mb-3">Total Amount</h2>
          <p className="text-xl font-bold">Total amount: ${totalAmount()}</p>
          <hr className="mt-5 mb-5" />

          {/* Qo'shilgan mahsulotlar ro'yxati */}
          <div className="flex-grow">
            {addedProducts.map((product) => (
              <div key={product.id} className="flex items-center mb-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-10 h-10 object-cover mr-2"
                />
                <span className="text-sm">
                  {product.title}{" "}
                  <span className="font-semibold">was purchased</span>
                </span>
              </div>
            ))}
          </div>

          <Link
            to="/checkout"
            className="bg-gray-100 border-2 text-black px-4 py-2 rounded-xl transition transform duration-300 hover:bg-black hover:text-white text-center"
          >
            Go to checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
