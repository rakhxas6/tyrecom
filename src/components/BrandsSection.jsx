import { useNavigate } from "react-router-dom";
import { imgSection } from "../constants/Product";
import { useFilters } from "../context/FilterContext";


const BrandsSection = () => {
  const navigate = useNavigate();
  const {setSelectedBrand} = useFilters()

  const handleNavigate = (tyre) => {
    setSelectedBrand(tyre)
    navigate(`/products/tyres`);

  };

  return (
    <section className="w-full px-6 md:px-16 space-y-10">
      <h1 className="title text-2xl sm:text-3xl relative font-bold">
        Tyre by Brands
        <span className="absolute -bottom-3 left-0 w-16 h-1 bg-orange-500 rounded"></span>
      </h1>
      <div className="imgContainer grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-4 place-items-start">
        {imgSection.map((img, index) => (
          <div
            key={index}
            className="flex cursor-pointer"
            onClick={() => handleNavigate(img.brand)}
          >
            <img
              src={img.logo}
              alt={img.brand}
              className="h-36 sm:h-44 hover:scale-105 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
