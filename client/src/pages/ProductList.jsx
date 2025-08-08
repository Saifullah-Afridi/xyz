import React from "react";
import { dummyProducts } from "../assets/assets";

const ProductList = () => {
  const currency = import.meta.env.VITE_PRICE;
  return (
    <div className="px-10 w-full">
      <h1 className=" text-3xl underline underline-offset-8 text-primary font-semibold">
        All Products
      </h1>
      <div className="border-l border-r border-t border-gray-300 py-1 rounded-md  my-8">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] space-x-2 border-b-1 border-b-gray-300  p-3">
          <div>Product</div>
          <div>Category</div>
          <div>Selling Price</div>
          <div>In Stock</div>
        </div>

        {dummyProducts?.map((product) => (
          <div
            className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center text-body-text  space-x-2 border-b-1 border-b-gray-300 p-3"
            key={product._id}
          >
            <div className="flex items-center gap-3  ">
              <img
                src={product?.image[0]}
                alt="product image"
                className="w-15"
              />
              <span>{product?.name}</span>
            </div>
            <div>{product?.category}</div>
            <div className="pl-4">
              {product?.price}
              {currency}
            </div>
            <div>Product</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
