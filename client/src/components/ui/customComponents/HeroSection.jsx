import React from "react";
import { assets } from "../../../assets/assets";
import { Link } from "react-router-dom";
import { IoArrowForward } from "react-icons/io5";

const HeroSection = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="website banner iamge"
        className=" hidden md:block  w-full"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="website banner image for mobile"
        className="md:hidden  w-full"
      />
      <div className=" absolute inset-0 flex flex-col justify-end md:justify-center md:pl-20 pb-20 items-center md:items-start w-full ">
        <h1 className=" text-2xl sm:text-4xl font-semibold  sm:font-bold sm:leading-12 sm:tracking-wide sm:max-w-[550px] w-full  text-center  sm:text-left  ">
          Freshness You Can Trust Savings You will Love!
        </h1>
        <div className="flex space-x-4 mt-5">
          <Link className="group flex items-center bg-[#22c55e] hover:bg-[#16a34a]  text-white rounded-sm px-4 sm:px-6 sm:py-3 py-2 ">
            <span>Shop Now</span>
            <span className="ml-2 group-hover:translate-x-1 transition-all duration-100 ease-in-out">
              <IoArrowForward />
            </span>
          </Link>
          <Link className=" group flex items-center bg-[#f59e0b] hover:bg-[#d97706]  px-4 sm:px-6 sm:py-3 py-2 text-white rounded-sm ">
            <span>Explore Details</span>
            <span className="ml-2 group-hover:translate-x-1 transition-all duration-100 ease-in-out">
              <IoArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
