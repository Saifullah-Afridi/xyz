import React from "react";
import { assets, features } from "../../../assets/assets";

const FeatureSection = () => {
  return (
    <div className="my-10 relative">
      <img
        src={assets.bottom_banner_image}
        alt="feature section image"
        className="hidden sm:block w-full"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="feature section image"
        className="sm:hidden w-full"
      />
      <div className="absolute inset-10 flex flex-col gap-5  items-center sm:items-end sm:justify-center justify-start mx-10 ">
        <h2 className="text-primary text-left text-2xl font-bold  w-[400px]">
          Why We Are the Best?
        </h2>

        {features.map((feature) => {
          return (
            <div key={feature.title} className="flex gap-2 w-[400px] ">
              <img src={feature.icon} alt="feature icon" />
              <div className="flex flex-col">
                <span>{feature.title}</span>
                <span>{feature.description}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSection;
