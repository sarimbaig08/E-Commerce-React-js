import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Shop from "./pages/Shop";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/LoginSingup";
import menBannerImg from "./assets/banner_mens.png"
import kidsBannerImg from "./assets/banner_kids.png"
import womenBannerImg from "./assets/banner_women.png"

function App() {
  console.log("menBannerImg", menBannerImg)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men" bannerImg={menBannerImg} />} />
        <Route path="/women" element={<ShopCategory category="women" bannerImg={womenBannerImg} />} />
        <Route path="/kids" element={<ShopCategory category="kid" bannerImg={kidsBannerImg} />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
