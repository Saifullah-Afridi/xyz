import { createContext, useContext, useEffect, useState } from "react";
import { dummyProducts } from "../assets/assets";

const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(dummyProducts || []);
  const [searchQueryForProduct, setSearchQueryForProduct] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const getSingleProduct = (name) => {
    const singleProduct = products.find(
      (product) =>
        product.name.toLowerCase().trim().split(" ").join("") === name
    );
    return singleProduct;
  };

  useEffect(() => {
    let filterdProducts = dummyProducts;
    if (selectedCategory) {
      filterdProducts = filterdProducts.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (searchQueryForProduct.trim()) {
      filterdProducts = filterdProducts.filter((product) =>
        product.name
          .toLowerCase()
          .startsWith(searchQueryForProduct.toLowerCase())
      );
    }
    setProducts(filterdProducts);
  }, [searchQueryForProduct, selectedCategory]);
  return (
    <productContext.Provider
      value={{
        products,
        setProducts,
        searchQueryForProduct,
        setSearchQueryForProduct,
        selectedCategory,
        setSelectedCategory,
        getSingleProduct,
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
