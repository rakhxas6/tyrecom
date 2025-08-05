import React from "react";
import BrandsSection from "../components/BrandsSection";
import TyreCollection from "../components/TyreCollection";
import DiscountsPage from "./home/DiscountsPage";
import HomeImageCarasoul from "../components/HomeImageCarasoul";

const Home = () => {
  return (
    <div className="h-auto flex  flex-col space-y-10">
      <HomeImageCarasoul />
      <BrandsSection />
      <TyreCollection />
      <DiscountsPage />
    </div>
  );
};

export default Home;
