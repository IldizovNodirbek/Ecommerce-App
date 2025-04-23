import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Products from "../ProductData/Products";

const ProductsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? Products
      : Products.filter((product) => product.category === filter);

  return (
    <div className="px-4 py-8 sm:py-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 text-center mb-6 mt-28">
        Latest Products
      </h2>
      <hr className="mb-6 w-[90%] border-2 mx-auto" />

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-10">
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
            className={`px-4 py-2 rounded-full transition ${
              filter === category
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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

export default ProductsPage;
