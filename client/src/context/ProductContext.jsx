import { createContext, useContext, useEffect, useState } from "react";
import { dummyAddress, dummyProducts } from "../assets/assets";

const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(dummyProducts || []);
  const [searchQueryForProduct, setSearchQueryForProduct] = useState("");

  console.log(dummyProducts);

  useEffect(() => {
    if (searchQueryForProduct === "") {
      return setProducts(dummyProducts);
    } else {
      const filteredProducts = products?.filter((product) =>
        product?.name
          ?.toLowerCase()
          .startsWith(searchQueryForProduct.toLowerCase())
      );
      setProducts(filteredProducts);
    }
  }, [searchQueryForProduct]);
  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        searchQueryForProduct,
        setSearchQueryForProduct,
      }}
    >
      {children}
    </productContext.Provider>
  );
};

const productContextValue = () => {
  return useContext(productContext);
};

export { ProductContextProvider, productContextValue };
