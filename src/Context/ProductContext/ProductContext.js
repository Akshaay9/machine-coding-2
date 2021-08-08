import { createContext, useContext, useState } from "react";

import Products from "../../Data/Products.json";

const productContext = createContext();

export default function ProductContextFun({ children }) {
  const [products, setProducts] = useState(Products);

  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
}

export const useProductContext = () => useContext(productContext);
