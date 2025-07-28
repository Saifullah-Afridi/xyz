import React from "react";
import ProductCard from "./ProductCard";
import { bestSellingProducts, dummyProducts } from "../../../assets/assets";

const BestSeller = () => {
  return (
    <div className="my-10 mb-[200px] ">
      <h2 className="text-2xl font-semibold text-[#2d7a65] text-center sm:text-left">
        Best Seller
      </h2>
      <div className=" grid grid-cols-5 gap-4 mt-4 space-y-4 ">
        {bestSellingProducts?.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
