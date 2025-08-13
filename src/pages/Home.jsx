import BrandsSection from "../components/BrandsSection";
import HomeImageCarasoul from "../components/HomeImageCarousel";
import TyreCollection from "../components/TyreCollection";
import SizeSelector from "../components/tyres/SizeSelector";
import DiscountsPage from "./home/DiscountsPage";

const Home = () => {
  return (
    <main className="min-h-screen mb-10">
      <div className="flex flex-col space-y-4">
        <HomeImageCarasoul />
        <SizeSelector />
        <BrandsSection />
        <TyreCollection />
        <DiscountsPage />
      </div>
    </main>
  );
};

export default Home;
