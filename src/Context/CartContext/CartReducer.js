export const cartReducerFun = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...payload,
            cartQty: 1,
          },
        ],
      };
    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((ele) =>
          ele.id === payload
            ? {
                ...ele,
                cartQty: ele.cartQty + 1,
              }
            : ele
        ),
      };
    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((ele) =>
          ele.id === payload
            ? {
                ...ele,
                cartQty: ele.cartQty - 1,
              }
            : ele
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((ele) => ele.id !== payload),
      };

    default:
      return state;
  }
};
