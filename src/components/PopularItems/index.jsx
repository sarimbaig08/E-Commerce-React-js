import React from "react";
import dataProduct from "../../assets/data";
import ItemCard from "../ItemCard";
import "./PopularItems.css";
import ItemCard2 from "../ItemCard2";

const PopularItems = () => {
  return (
    <>
      <h1 className="text-Dark mt-50">Popular Items</h1>
      <div className="PopularItems">
        {dataProduct.map((item, index) => {
          return <ItemCard2 item={item} />;
        })}
      </div>
    </>
  );
};

export default PopularItems;
