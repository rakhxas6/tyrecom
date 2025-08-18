import { useLocation, useNavigate } from "react-router-dom";
import tyreInfo from "../../assets/learn-about-tyre-sizes-1.webp";
import { diameters, tyreInformation, widths } from "../../constants/Product";
import { useFilters } from "../../context/FilterContext";
import BrandsSection from "../BrandsSection";
import SizeSelector from "./SizeSelector";
import { useEffect, useRef } from "react";

const TyresDropdown = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const widthRef = useRef();
  const diameterRef = useRef();
  const brandRef = useRef();

  const {
    selectedWidth,
    setSelectedWidth,
    selectedDiameter,
    setSelectedDiameter,
  } = useFilters();

  const handleWidthClick = (width) => {
    setSelectedWidth(width);
    navigate(`/products/tyres?selectedWidth=${width}#width`);
  };

  const handleDiameterClick = (diameter) => {
    setSelectedDiameter(diameter);
    navigate(`/products/tyres?selectedDiameter=${diameter}#diameter`);
  };

    useEffect(() => {
      if (location.hash === "#width") {
        scrollToSection(widthRef);
      } else if (location.hash === "#diameter") {
        scrollToSection(diameterRef);
      } else if (location.hash === "#brand") {
        scrollToSection(brandRef);
      }
    }, [location.hash]);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="tyresDropdown w-full px-6 md:px-16 pt-32 pb-12 mx-auto">
      {/* Size Selector */}
      <div id="selectorSection">
        <SizeSelector />
      </div>

      {/* Info Section */}
      <div className="space-y-6  mb-12">
        <h2 className="text-3xl font-thin font-clash">Get to Know Your Tyre</h2>
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div className="w-full md:w-1/2">
            <img
              src={tyreInfo}
              alt="Sidewall containing vital information"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="text-left space-y-4 w-full md:w-1/2">
            {tyreInformation.map((item, index) => (
              <div key={index} className="bg-gray-50 p-4 shadow">
                <h3 className="text-lg font-semibold text-orange-500 font-clash">
                  {item.term}
                </h3>
                <p className="text-gray-700 font-jakarta">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Search by Width */}
      <div ref={widthRef} id="width" className="mb-12">
        <h2 className="text-3xl text-gray-800 font-thin mb-4 font-clash">
          Search tyre by width
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {widths.map((w) => (
            <button
              key={w}
              type="button"
              onClick={() => handleWidthClick(w)}
              className={`border  py-2 px-4 text-center font-medium font-jakarta text-gray-700 transition ${
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
      <div ref={diameterRef} id="diameter" className="mb-12">
        <h2 className="text-3xl text-gray-800 font-thin mb-4 font-clash">
          Search tyre by Diameter
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {diameters.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => handleDiameterClick(d)}
              className={`border  py-2 px-4 text-center font-medium font-jakarta text-gray-700 transition ${
                selectedDiameter === d
                  ? "bg-orange-500 text-white shadow"
                  : "bg-white hover:bg-orange-100"
              }`}
            >
              {d} Inch
            </button>
          ))}
        </div>
      </div>

      {/* Brands Section */}
      <div ref={brandRef} id="brandSection">
        <BrandsSection />
      </div>
    </section>
  );
};

export default TyresDropdown;
