import React from "react";
import triangleTyre from "../assets/tyresCollection/triangle_tyres.png";
import { useNavigate } from "react-router-dom";

const TyreCollection = () => {
    const navigate = useNavigate();
  // Generate an array of 48 identical tyres dynamically
  const tyreCount = 8;
  const TyreSection = Array.from({ length: tyreCount }, (_, i) => ({
    id: i,
    name: "Triangle 285/45R22 Tyre",
    logo: triangleTyre,
  }));
    
    const handleNavigate = (id) => {
      navigate(`/tyres/${id}`);
    };

  return (
    <section className="w-full max-w-sm sm:max-w-lg md:max-w-7xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-center">
        Latest Tyre Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {TyreSection.map((tyre) => (
          <div
            onClick={() => handleNavigate(tyre.id)}
            key={tyre.id}
            className="flex flex-col items-center justify-center p-4 border shadow-md hover:shadow-xl transition-shadow duration-300 rounded cursor-pointer"
          >
            <img
              src={tyre.logo}
              alt={tyre.name}
              className="h-36 sm:h-44 object-contain"
            />
            <span
              className="mt-2 text-center font-medium text-gray-600 hover:text-orange-500 transition-colors  "
              
            >
              {tyre.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TyreCollection;
