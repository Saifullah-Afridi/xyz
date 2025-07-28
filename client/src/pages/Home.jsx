import React from "react";
import HeroSection from "../components/ui/customComponents/HeroSection";
import Categories from "../components/ui/customComponents/Categories";
import BestSeller from "../components/ui/customComponents/BestSeller";
import FeatureSection from "../components/ui/customComponents/FeatureSection";
import NewsLetter from "../components/ui/customComponents/NewsLetter";

const Home = () => {
  return (
    <div className="custom-container sm:mt-10 my-10">
      <HeroSection />
      <Categories />
      <BestSeller />
      <FeatureSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
