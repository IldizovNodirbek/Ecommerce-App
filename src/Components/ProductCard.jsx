const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 bg-white shadow-md flex flex-col items-center">
      <img
        src={image}
        alt={title}
        className="w-[200px] h-[200px] object-contain rounded-md mb-2"
      />
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-600 mb-2 text-center">{description}</p>
      <p className="text-xl font-bold mb-4">{price}</p>
      <div className="flex space-x-2">
        <button className="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Buy Now
        </button>
        <button className="flex-1 bg-black text-white px-4 py-2 rounded hover:bg-gray-500 transition duration-300">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
