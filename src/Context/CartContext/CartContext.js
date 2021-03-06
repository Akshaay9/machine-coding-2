import { useContext, useReducer, createContext } from "react";
import { cartReducerFun } from "./CartReducer";

const cartContext = createContext();

const intialState = {
  cart: [],
};

const CartContextFun = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducerFun, intialState);

  return (
    <cartContext.Provider value={{ state, cartDispatch: dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default CartContextFun;

export const useCartContext = () => useContext(cartContext);
