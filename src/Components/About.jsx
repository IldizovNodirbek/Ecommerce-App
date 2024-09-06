import React from "react";

const About = () => {
  return (
    <div className="p-8">
      <h1 className="text-5xl font-normal text-center mb-6 mt-20">About Us</h1>
      <hr className="w-[90%] border-2 mx-auto" />
      <p className="text-lg text-center text-gray-800 font-thin text-[20px] mb-8 mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
      <h2 className="text-3xl font-normal text-center mb-6">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
          <img
            src="https://thedudedesigns.com/wp-content/uploads/2019/10/Ninja_tshirt_200_Front_Black.jpg"
            alt="Men's Clothing"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold">Men's Clothing</h3>
        </div>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
          <img
            src="https://frankfurt.apollo.olxcdn.com/v1/files/syfjocdi6nes3-UZ/image"
            alt="Women's Clothing"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold">Women's Clothing</h3>
        </div>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
          <img
            src="https://africanboutique.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-29-at-3.36.10-AM.jpeg"
            alt="Jewelry"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold">Jewelry</h3>
        </div>
        <div className="border-2 border-gray-300 rounded-lg p-4 bg-white">
          <img
            src="https://m.media-amazon.com/images/I/81d7XnmzmAL.jpg"
            alt="Electronics"
            className="w-full h-64 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-semibold">Electronics</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
