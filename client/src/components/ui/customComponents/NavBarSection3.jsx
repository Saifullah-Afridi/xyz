import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { assets } from "../../../assets/assets";
import NavBarButton from "./NavBarButton";

const NavBarSection3 = () => {
  return (
    <div className=" hidden sm:flex justify-between items-center space-x-4">
      <div className="flex items-center  border-2 border-gray-300 rounded-lg  p-1 ">
        <input
          type="text"
          placeholder="Search Products"
          className="focus:outline-0 w-[150px]"
        />
        <IoSearchOutline className="cursor-pointer" />
      </div>
      <img
        src={assets.cart_icon}
        alt="cart icon"
        className="w-6 h-6 cursor-pointer"
      />
      <NavBarButton />
    </div>
  );
};

export default NavBarSection3;
