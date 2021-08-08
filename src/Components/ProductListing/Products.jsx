import React from "react";
import Button from "@material-ui/core/Button";
import { useCartContext } from "../../Context/CartContext/CartContext";
import "./Products.css";

function Products({ ele }) {
  const {
    state: { cart },
    cartDispatch,
  } = useCartContext();

  console.log(cart);

  const isItemOnCart = (prod) => {
    const isItemonCart = cart.some((ele) => ele.id === prod.id);
    if (!isItemonCart) {
      return (
        <Button
          variant="contained"
          color="primary"
          onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: prod })}
        >
          Add To Cart
        </Button>
      );
    } else {
      const Proditem = cart.find((ele) => ele.id === prod.id);
      return (
        <div className="cta-flex">
          <span>
            {Proditem.items === Proditem.cartQty
              ? "Out of Stock"
              : "Modify Quantity"}{" "}
          </span>
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                Proditem.cartQty === 1
                  ? cartDispatch({ type: "REMOVE_ITEM", payload: Proditem.id })
                  : cartDispatch({ type: "DECREASE_QTY", payload: Proditem.id })
              }
            >
              -
            </Button>
            <p> {Proditem.cartQty}</p>
            <Button
              variant="contained"
              color="primary"
              disabled={Proditem.items === Proditem.cartQty}
              onClick={() =>
                cartDispatch({ type: "INCREASE_QTY", payload: Proditem.id })
              }
            >
              +
            </Button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="individualProduct">
      <div className="product-container">
        <img src={ele.images[0].img} alt="" />
        <div className="product-desc">
          <h4>{ele.name}</h4>
          <p>{ele.price}</p>
        </div>
        <div
          className="product-container-CTA"
          style={{ display: "flex", alignItems: "center" }}
        >
          <h5>Brand</h5> : <p>{ele.tag}</p>
        </div>

        {isItemOnCart(ele)}
      </div>
    </div>
  );
}

export default Products;
