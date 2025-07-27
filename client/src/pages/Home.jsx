import React from "react";
import HeroSection from "../components/ui/customComponents/HeroSection";
import Categories from "../components/ui/customComponents/Categories";

const Home = () => {
  return (
    <div className="custom-container sm:mt-10 mt-2">
      <HeroSection />
      <Categories />
    </div>
  );
};

export default Home;
