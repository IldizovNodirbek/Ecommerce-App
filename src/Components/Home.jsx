import React, { useState } from "react";  
import ProductCard from "./ProductCard";  
import Products from "../ProductData/Products";  
import Heroimg from "../Image/hero-img.jpg";

const Home = () => {  
    const [filter, setFilter] = useState("All");  

    const filteredProducts = filter === "All" ? Products : Products.filter(product => product.category === filter);  

    return (  
        <div className="p-4">  
            <div className="relative mb-8">  
                <img  
                    src={Heroimg}  
                    alt="New Season Arrivals"  
                    className="w-[98%] h-[600px] mx-auto rounded-lg object-cover"  
                />  
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-justify text-black ">  
                    <h1 className="text-4xl font-bold">New Season Arrivals</h1>  
                    <p className="mt-2 text-[20px]">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>  
                </div>  
            </div>  
            <h2 className="text-5xl font-semibold text-gray-800 text-center mb-2">Latest Products</h2>  
            <hr className="mb-4 w-[80%] border-2 mx-auto" />  
            <div className="flex space-x-4 mb-8">  
                {["All", "Mens Clothing", "Womens Clothing", "Jewelry", "Electronics"].map((category) => (  
                    <button  
                        key={category}  
                        onClick={() => setFilter(category)}  
                        className={`px-4 py-2 rounded ${filter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-black"}`}  
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