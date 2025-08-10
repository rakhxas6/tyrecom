import React from "react";
import BrandsSection from "../components/BrandsSection";
import TyreCollection from "../components/TyreCollection";
import DiscountsPage from "./home/DiscountsPage";
import HomeImageCarasoul from "../components/HomeImageCarousel";
import SizeSelector from "../components/tyres/SizeSelector";

const Home = () => {
  return (
    <div className="flex flex-col space-y-10 mb-10">
      <HomeImageCarasoul />
      <SizeSelector/>
      <BrandsSection />
      <TyreCollection />
      <DiscountsPage />
    </div>
  );
};

export default Home;
