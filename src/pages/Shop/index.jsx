import React from "react";
import HomeImage from "../../components/HomeImage";
import "./Shop.css";
import ItemCard from "../../components/ItemCard";
import PopularItems from "../../components/PopularItems";
import DiscountBanner from "../../components/DiscountBanner";
import NewCollection from "../../components/NewCollection";
import ExclusiveOffer from "../../components/ExclusiveOffer";
import Footer from "../../components/Footer";

const Shop = () => {
  return (
    <>
      <div className="homeImageContainer">
        <HomeImage />
      </div>
      {/* <ItemCard /> */}\
      <PopularItems />
      <DiscountBanner />
      <NewCollection />
      <ExclusiveOffer />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Shop;
