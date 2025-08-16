import React from "react";
import { useTyres } from "../../context/TyreContext";
import { useNavigate } from "react-router-dom";

const RelatedProducts = () => {
  const navigate = useNavigate();
  const { selectedTyre,setSelectedTyre } = useTyres();

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const handleNavigate = (tyre) => {
    setSelectedTyre(tyre); // store in context
    navigate(`/tyres/${slugify(tyre.name)}`);
  };

  const tyre = selectedTyre;

  return (
    <div>
      {/* Heading */}
      <div className="headingRP">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800 relative inline-block">
          Related Products
          <span className="absolute -bottom-2 left-0   w-16 h-1 bg-orange-500 rounded"></span>
        </h3>
      </div>
      <div className="relatedProductCard">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  items-start">
          <div
            onClick={() => {
              handleNavigate(tyre)
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            key={tyre.id}
            className="flex flex-col items-center justify-center p-4 border shadow-md hover:shadow-xl transition-shadow duration-300  cursor-pointer"
          >
            <img
              src={tyre.imageUrl}
              alt={tyre.name}
              className="h-36 sm:h-44 object-contain"
            />
            <span className="mt-2 text-center font-medium text-gray-600 hover:text-orange-500 transition-colors  ">
              {tyre.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
