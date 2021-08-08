import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductContextFun from "./Context/ProductContext/ProductContext";
import CartContextFun from "./Context/CartContext/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductContextFun>
      <CartContextFun>
        <App />
      </CartContextFun>
    </ProductContextFun>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
