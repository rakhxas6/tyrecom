import { useNavigate } from "react-router-dom";
import { imgSection } from "../constants/Product";
import ContactForm from "./ContactForm";
import Breadcrumb from "./BreadCrumb";
import { useFilters } from "../context/FilterContext";

const Wheels = () => {
  const navigate = useNavigate();

  const { setSelectedBrand } = useFilters();

  const handleNavigate = (tyre) => {
    setSelectedBrand(tyre);
    navigate(`/products/tyres`);
  };

  return (
    <div>
      <section className="wheelsPage w-full px-6  md:px-16 pt-32 pb-12 mx-auto  space-y-5">
        <Breadcrumb />

        <div className="headingContainer flex flex-col gap-5 space-y-5 ">
          <h2 className="font-thin text-3xl text-gray-800 font-clash relative">
            {/* flex justify-center items-center */}
            Wheels By Brands
            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-orange-500 rounded"></span>
          </h2>
          <div className="imgContainer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-fit">
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
        </div>

        <ContactForm />
      </section>
    </div>
  );
};

export default Wheels;
