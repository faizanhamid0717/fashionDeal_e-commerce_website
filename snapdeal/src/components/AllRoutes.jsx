import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./../Pages/HomePage";
import Login from "./../Pages/Login";
import Product from "./../Pages/Product";
import SingleProudctPage from "./../Pages/SingleProudctPage";
import Payment from "./../Pages/Payment";
import Admin from "../Pages/Admin";
import Cart from "./../Pages/Cart";
import PageNotFound from "../Pages/PageNotFound";
import Checkout from "./../Pages/Checkout";
import Address from "./../Pages/Address";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="/product/:id" element={<SingleProudctPage />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/address" element={<Address />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
};

export default AllRoutes;
