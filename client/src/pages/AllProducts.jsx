import React from "react";
import { productContextValue } from "../context/ProductContext";
import ProductCard from "../components/ui/customComponents/ProductCard";
const AllProducts = () => {
  const { products } = productContextValue();
  return (
    <div className="my-20 custom-container">
      <h2 className="text-2xl font-semibold text-[#2d7a65] text-center sm:text-left">
        All Products
      </h2>
      <div className=" px-3 sm:px-0 grid grid-cols-1  sm:grid-cols-5 gap-4 mt-4 space-y-6 sm:space-y-4 ">
        {products?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
