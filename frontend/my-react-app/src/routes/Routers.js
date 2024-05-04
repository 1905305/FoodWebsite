import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
//import AllFoods from "../pages/AllFoods";
//import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
//import Login from "../pages/Login";
//import Register from "../pages/Register";
import LoginRegister from "../pages/LoginRegister.jsx";
import Shop from "../pages/shop/Shop.jsx";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/Checkout" element={<Checkout />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/LoginRegister" element={<LoginRegister />} />
    </Routes>
  );
};

export default Routers;
