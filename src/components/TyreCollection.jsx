import { useNavigate } from "react-router-dom";
import { tyres } from "../constants/Product";

import { useTyres } from "../context/TyreContext";

const TyreCollection = () => {
  const navigate = useNavigate();
  const { setSelectedTyre } = useTyres();

 

  const slugify = (text) => text
    .toLowerCase()
    .replace(/\s+/g, "-"); 

  const handleNavigate = (tyre) => {
    setSelectedTyre(tyre); // store in context
    navigate(`/tyres/${slugify(tyre.name)}`);
  };

  return (
    <section className="w-full  px-6 md:px-16  space-y-10">
      <h1 className="text-3xl font-thin font-clash text-gray-800 relative">
        Latest Tyre Collection
        <span className="absolute -bottom-3 left-0 w-16 h-1 bg-orange-500 rounded"></span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  items-start">
        {tyres.map((tyre) => (
          <div
            onClick={() => handleNavigate(tyre)}
            key={tyre.name}
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
        ))}
      </div>
    </section>
  );
};

export default TyreCollection;
