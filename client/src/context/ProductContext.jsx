import { createContext, useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";

const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(assets?.dummyProducts || []);
  const [searchQueryForProduct, setSearchQueryForProduct] = useState("");

  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product?.name?.includes(searchQueryForProduct)
    );
    setProducts(filteredProducts);
  }, [searchQueryForProduct]);
  return <productContext.Provider></productContext.Provider>;
};

const productContextValue = () => {
  return useContext(productContext);
};

export { ProductContextProvider, productContext };
