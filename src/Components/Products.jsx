import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Products from "../ProductData/Products";

const Home = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? Products
      : Products.filter((product) => product.category === filter);

  return (
    <div className="p-4">
      <h2 className="text-5xl font-semibold text-gray-800 text-center mb-2 mt-28">
        Latest Products
      </h2>
      <hr className="mb-4 w-[85%] border-2 mx-auto mt-4" />
      <div className="flex space-x-4 mb-8 justify-center mt-16">
        {[
          "All",
          "Mens Clothing",
          "Womens Clothing",
          "Jewelry",
          "Electronics",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded ${
              filter === category
                ? "bg-black text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
