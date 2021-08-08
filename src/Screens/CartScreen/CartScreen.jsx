import React from "react";
import { useCartContext } from "../../Context/CartContext/CartContext";
import "./CartScreen.css";
import Products from "../../Components/ProductListing/Products";
import cartSVG from "../../SVG/cart.svg";
function CartScreen() {
  const {
    state: { cart },
  } = useCartContext();

  const cartLength = () => {
    return cart.reduce((acc, ele) => (acc += Number(ele.cartQty)), 0);
  };

  const totalPRice = () => {
    return cart.reduce(
      (acc, ele) => (acc += Number(ele.cartQty) * ele.price),
      0
    );
  };

  const getPErcenatge = () => {
    return totalPRice() - totalPRice() * 0.15;
  };
  return (
    <div>
      <div className="heading">
        {" "}
        <h3>Cart Items</h3>{" "}
      </div>

      {cart.length === 0 && (
        <div className="svg">
          <img src={cartSVG} alt="" />
        </div>
      )}

      <div className="product-container cart-container">
        {cart.map((ele) => (
          <Products ele={ele} />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="cart-data">
          <h4>
            Total Items : <span>{cartLength()}</span>
          </h4>
          <h4>
            Total Price : <span>₹{totalPRice()}</span>
          </h4>
          <h4>
            Discount : <span>15%</span>
          </h4>
          <h4>
            Final Price : <span>{getPErcenatge()} ₹</span>
          </h4>
        </div>
      )}
    </div>
  );
}

export default CartScreen;
