import React from "react";
import { categories } from "../../../assets/assets";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="my-10 ">
      <h2 className="text-2xl font-semibold text-[#2d7a65] text-center sm:text-left">
        Categories
      </h2>
      <div className="flex   sm:flex-row justify-between p-2 sm:p-0 space-y-4 sm:space-x-4 flex-wrap sm:flex-nowrap mt-5">
        {categories?.map((category) => (
          <Link
            key={category.text}
            to={`/allproducts/${category.path}`}
            className=" w-[170px]  sm:w-[220px] hover:scale-110 transition-all duration-200 ease-in-out "
          >
            <div
              style={{ backgroundColor: `${category.bgColor}` }}
              className="flex flex-col items-center p-3 rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.text}
                className="w-full  sm:h-auto "
              />
              <span className="text-[#6b7280]">{category.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
