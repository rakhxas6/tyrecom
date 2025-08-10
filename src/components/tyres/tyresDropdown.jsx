import { useNavigate } from "react-router-dom";
import tyreInfo from "../../assets/learn-about-tyre-sizes-1.webp";
import { diameters, tyreInformation, widths } from "../../constants/Product";
import { useFilters } from "../../context/FilterContext";
import BrandsSection from "../BrandsSection";
import SizeSelector from "./SizeSelector";

const TyresDropdown = () => {
  const navigate = useNavigate();
  const {
    selectedWidth,
    setSelectedWidth,
    selectedDiameter,
    setSelectedDiameter,
  } = useFilters();

  const handleWidthClick = (width) => {
    setSelectedWidth(width);
    navigate(`/tyres#width?selectedWidth=${width}`);
  };

  return (
    <section className="w-full max-w-sm sm:max-w-lg md:max-w-5xl mx-auto px-4 py-8">
      {/* Size Selector */}
      <SizeSelector />

      {/* Info Section */}
      <div className="space-y-6 text-center mb-12">
        <h2 className="text-3xl font-bold">Get to Know Your Tyre</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <img
            src={tyreInfo}
            alt="Sidewall containing vital information"
            className="w-80 object-contain rounded-lg shadow-lg"
            loading="lazy"
          />

          <div className="text-left space-y-4">
            {tyreInformation.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-orange-500">
                  {item.term}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Search by Width */}
      <div id="width" className="mb-12">
        <h2 className="text-xl font-bold mb-4">Search tyre by width</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {widths.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => handleWidthClick(w)}
              className={`border rounded-lg py-2 px-4 text-center font-medium transition ${
                selectedWidth === w
                  ? "bg-orange-500 text-white shadow"
                  : "bg-white hover:bg-orange-100"
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Search by Diameter */}
      <div id="diameter" className="mb-12">
        <h2 className="text-xl font-bold mb-4">Search tyre by Rim Diameter</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {diameters.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => setSelectedDiameter(d)}
              className={`border rounded-lg py-2 px-4 text-center font-medium transition ${
                selectedDiameter === d
                  ? "bg-orange-500 text-white shadow"
                  : "bg-white hover:bg-orange-100"
              }`}
            >
              {d} Inch Tyres
            </button>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <BrandsSection />
    </section>
  );
};

export default TyresDropdown;
