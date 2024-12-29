import React, { useState } from "react";
import "./ItemCard2.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const ItemCard2 = ({ item }) => {
  const [clicked, setClicked] = useState(false);

  const handleBuyClick = () => {
    setClicked(true);
  };

  const handleRemoveClick = () => {
    setClicked(false);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <div className="top">
          <img src={item.image} />
        </div>
        <div className="bottom">
          <h2 className="productName">{item.name.slice(0, 20)}</h2>
          <h4>Price: ${item.new_price}</h4>
          <button className="buttonCart">Add to Cart</button>
        </div>
      </div>
      <div className="inside">
        <div className="icon">
          <FontAwesomeIcon icon={faInfoCircle} />
        </div>
        <div className="contents">
          <h2 className="text-white">Description:</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard2;
