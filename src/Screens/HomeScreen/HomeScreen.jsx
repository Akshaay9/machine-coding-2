import React from "react";
import { useProductContext } from "../../Context/ProductContext/ProductContext";
import Products from "../../Components/ProductListing/Products";
import "./HomeScreen.css";
function HomeScreen() {
  const { products } = useProductContext();

  return (
    <div className="product-container">
      {products.map((ele) => (
        <Products ele={ele} />
      ))}
    </div>
  );
}

export default HomeScreen;
