import React from "react";
import HeroSection from "../components/ui/customComponents/HeroSection";
import Categories from "../components/ui/customComponents/Categories";
import BestSeller from "../components/ui/customComponents/BestSeller";

const Home = () => {
  return (
    <div className="custom-container sm:mt-10 mt-2">
      <HeroSection />
      <Categories />
      <BestSeller />
    </div>
  );
};

export default Home;
