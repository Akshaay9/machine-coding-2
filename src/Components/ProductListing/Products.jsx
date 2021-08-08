import React from "react";
import Button from "@material-ui/core/Button";
import { useCartContext } from "../../Context/CartContext/CartContext";
import "./Products.css";
import { useLocation } from "react-router";

function Products({ ele }) {
  const {
    state: { cart },
    cartDispatch,
  } = useCartContext();

  const location = useLocation();

  const isItemOnCart = (prod) => {
    const isItemonCart = cart.some((ele) => ele.id === prod.id);
    if (!isItemonCart) {
      return (
        <>
          <span></span>
          <Button
            variant="contained"
            color="primary"
            onClick={() => cartDispatch({ type: "ADD_TO_CART", payload: prod })}
          >
            Add To Cart
          </Button>
        </>
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

  const getQty = (prodID) => {
    const Proditem = cart.find((ele) => ele.id === prodID);
    return Proditem.cartQty;
  };

  const getPrice = (prodID) => {
    const Proditem = cart.find((ele) => ele.id === prodID);
    return Proditem.cartQty * Proditem.price;
  };

  return (
    <div className="individualProduct">
      <div className="product-container">
        <img src={ele.images[0].img} alt="" />
        <div className="product-desc">
          <h5>{ele.name}</h5>
          <p>₹{ele.price}</p>
        </div>
        <div className="product-container-CTA">
          <div style={{ display: "flex" }}>
            <h5>Brand</h5> : <p>{ele.tag}</p>
          </div>

          {location.pathname.includes("cart") && (
            <div style={{ display: "flex" }}>
              {" "}
              <h5>Quantity</h5> : <p>{getQty(ele.id)}</p>
            </div>
          )}

          {location.pathname.includes("cart") && (
            <div style={{ display: "flex" }}>
              {" "}
              <h5>Total Price</h5> : <p>₹{getPrice(ele.id)}</p>
            </div>
          )}
        </div>

        {isItemOnCart(ele)}
      </div>
      {location.pathname.includes("cart") && (
        <div style={{ marginLeft: "4.5rem" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              cartDispatch({ type: "REMOVE_ITEM", payload: ele.id })
            }
          >
            Remove from cart
          </Button>
        </div>
      )}
    </div>
  );
}

export default Products;
