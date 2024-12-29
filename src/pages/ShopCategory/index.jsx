import React from "react";
import styles from "./shopCategory.module.css"
import ItemCard2 from "../../components/ItemCard2";
import dataProduct from "../../assets/all_product";
import Footer from "../../components/Footer";


const ShopCategory = ({ category, bannerImg }) => {
  console.log("bannerImg", bannerImg, category)
  return (
    <div>
      <div className={styles.banner}><img src={bannerImg} alt="" /></div>
      <div>
        <h1 className="text-Dark mt-50">Men Items</h1>
        <div className="PopularItems">
          {dataProduct.map((item, index) => (
            dataProduct[index].category == category ?
              <ItemCard2 item={item} /> : ""
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShopCategory;
