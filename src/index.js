import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductContextFun from "./Context/ProductContext/ProductContext";
import CartContextFun from "./Context/CartContext/CartContext";
import SaveLaterFun from "./Context/SaveLaterContext/SaveLaterContext";

ReactDOM.render(
  <React.StrictMode>
    <ProductContextFun>
      <CartContextFun>
        <SaveLaterFun>
          <App />
        </SaveLaterFun>
      </CartContextFun>
    </ProductContextFun>
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
