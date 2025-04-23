const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 bg-white shadow-md flex flex-col items-center transition hover:shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-contain rounded-md mb-3 max-w-[220px]"
      />
      <h2 className="text-base sm:text-lg font-semibold mb-1 text-center">
        {title}
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-2 text-center line-clamp-2">
        {description}
      </p>
      <p className="text-lg sm:text-xl font-bold mb-4 text-center">{price}</p>
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <button className="w-full sm:w-1/2 bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
        <button className="w-full sm:w-1/2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
