import { useNavigate } from "react-router-dom";
import { imgSection } from "../constants/Product";
import { useFilters } from "../context/FilterContext";

const BrandsSection = () => {
  const navigate = useNavigate();
  const { setSelectedBrand } = useFilters();

  const handleNavigate = (tyre) => {
    setSelectedBrand(tyre);
    navigate(`/products/tyres`);
  };

  return (
    <section className="w-full px-6 md:px-16 space-y-10">
      <h1 className="title text-3xl relative font-thin font-clash text-gray-800">
        Tyre by Brands
        <span className="absolute -bottom-3 left-0 w-16 h-1 bg-orange-500 rounded"></span>
      </h1>
      <div className="imgContainer grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-fit">
        {imgSection.map((img, index) => (
          <div
            key={index}
            className="flex cursor-pointer hover:shadow-md transition"
            onClick={() => handleNavigate(img.brand)}
          >
            <img
              src={img.logo}
              alt={img.brand}
              className="h-36 sm:h-44 object-contain transition-transform duration-300 hover:shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
