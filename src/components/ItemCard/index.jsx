import React from "react";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  return (
    <section className="product">
      <div className="product__photo">
        <div className="photo-container">
          <img src={item.image} alt="green apple slice" />

          {/* <div className="photo-album">
            <ul>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                  alt="green apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png"
                  alt="half apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png"
                  alt="green apple"
                />
              </li>
              <li>
                <img
                  src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png"
                  alt="apple top"
                />
              </li>
            </ul>
          </div> */}
        </div>
      </div>
      <div className="product__info">
        <div className="title">
          <h1>{item.name}</h1>
          <span>COD: 4543{item.id}</span>
        </div>
        <div className="price">
          R$ <span>{item.new_price}</span>
        </div>
        <div className="variant">
          {/* <h2>SELECT A COLOR</h2>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png"
                alt="green apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302752/codepen/delicious-apples/yellow-apple.png"
                alt="yellow apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302427/codepen/delicious-apples/orange-apple.png"
                alt="orange apple"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/john-mantas/image/upload/v1537302285/codepen/delicious-apples/red-apple.png"
                alt="red apple"
              />
            </li>
          </ul> */}
        </div>
        <div className="description">
          <h2>Description</h2>
          <p>{item.description}</p>
        </div>
        <button className="buy--btn">ADD TO CART</button>
      </div>
    </section>
  );
};

export default ItemCard;
