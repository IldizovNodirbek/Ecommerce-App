import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Products from "../ProductData/Products";
import Heroimg from "../Image/hero-img.jpg";

const Home = () => {
  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? Products
      : Products.filter((product) => product.category === filter);

  return (
    <div className="p-4 pt-24">
      {/* Hero Section */}
      <div className="relative mb-10">
        <img
          src={Heroimg}
          alt="New Season Arrivals"
          className="w-full h-[400px] md:h-[600px] object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-black drop-shadow-lg">
            New Season Arrivals
          </h1>
          <p className="mt-4 text-lg md:text-xl text-black max-w-2xl">
            Discover the latest trends and exclusive fashion for men & women.
          </p>
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-semibold text-gray-800 text-center mb-2">
        Latest Products
      </h2>
      <hr className="mb-6 w-[80%] mx-auto border-2" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
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
            className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
              filter === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black hover:bg-blue-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
