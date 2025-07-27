import React from "react";
import { categories } from "../../../assets/assets";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="my-10 mb-[200px]">
      <h2 className="text-2xl font-semibold text-sub-heading">Categories</h2>
      <div className="flex space-x-2 mt-5">
        {categories?.map((category) => (
          <Link
            key={category.text}
            to={`/${category.path}`}
            className="w-[220px]  "
          >
            <div
              style={{ backgroundColor: `${category.bgColor}` }}
              className="flex flex-col items-center p-3 rounded-lg overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.text}
                className="w-full"
              />
              <span>{category.text}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
