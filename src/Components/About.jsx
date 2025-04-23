import React from "react";

const About = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-center mb-6 mt-24">
        About Us
      </h1>
      <hr className="w-full max-w-6xl mx-auto border-2 mb-8" />
      <p className="text-base sm:text-lg text-gray-800 text-center mb-10 leading-relaxed max-w-4xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>

      <h2 className="text-2xl sm:text-3xl font-medium text-center mb-6">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: "Men's Clothing",
            img: "https://thedudedesigns.com/wp-content/uploads/2019/10/Ninja_tshirt_200_Front_Black.jpg",
          },
          {
            title: "Women's Clothing",
            img: "https://frankfurt.apollo.olxcdn.com/v1/files/syfjocdi6nes3-UZ/image",
          },
          {
            title: "Jewelry",
            img: "https://africanboutique.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-29-at-3.36.10-AM.jpeg",
          },
          {
            title: "Electronics",
            img: "https://m.media-amazon.com/images/I/81d7XnmzmAL.jpg",
          },
        ].map((product, idx) => (
          <div
            key={idx}
            className="border-2 border-gray-300 rounded-lg p-4 bg-white hover:shadow-lg transition"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-48 sm:h-64 object-cover rounded-md mb-2"
            />
            <h3 className="text-lg font-semibold text-center">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
