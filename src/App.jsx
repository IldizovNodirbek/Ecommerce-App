import React from "react";  
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";   
import Navbar from "./Components/Navbar";  
import Login from "./Components/Login";  
import Register from "./Components/Register";  
import Home from "./Components/Home";  
import About from "./Components/About";  
import Contact from "./Components/Contact";  
import Products from "./Components/Products";   
import CheckOut from "./FullorEmpty/CheckOut"; 
import Cart from "./FullorEmpty/Cart";  

const App = () => {  
  return (  
    <Router>   
        <Navbar />  
        <Routes>  
          <Route path="/" element={<Home />} />  
          <Route path="/products" element={<Products />} />  
          <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} />  
          <Route path="/login" element={<Login />} />  
          <Route path="/register" element={<Register />} />  
          <Route path="/cart" element={<Cart />} />    
          <Route path="/checkout" element={<CheckOut />} />  
        </Routes>   
    </Router>  
  );  
};  

export default App;