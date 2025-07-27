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
      <div className=" absolute inset-0 ">
        <h1>Freshness You Can Trust,Savings You will Love!</h1>
        <div>
          <Link>
            Shop Now
            <span>
              <IoArrowForward />
            </span>
          </Link>
          <Link>
            Explore Details
            <span>
              <IoArrowForward />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
