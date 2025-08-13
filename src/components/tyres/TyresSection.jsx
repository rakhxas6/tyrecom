import React, { useState, useEffect } from "react";
import { tyres } from "../../constants/Product";
import { useNavigate } from "react-router-dom";
import { useTyres } from "../../context/TyreContext";
import { useFilters } from "../../context/FilterContext";

const TyresSection = () => {
  const navigate = useNavigate();
  const { setSelectedTyre } = useTyres();
  const { selectedBrand, selectedWidth, selectedDiameter, selectedAspect } =
    useFilters();

  const [visibleCount, setVisibleCount] = useState(12);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const handleNavigate = (tyre) => {
    setSelectedTyre(tyre);
    navigate(`/tyres/${slugify(tyre.name)}`);
  };

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 8);
      setLoadingMore(false);
    }, 1200);
  };

  // Apply filters
  const filteredTyres = tyres.filter((tyre) => {
    return (
      (!selectedBrand || tyre.brand === selectedBrand) &&
      (!selectedWidth || tyre.width === selectedWidth) &&
      (!selectedDiameter || tyre.rimDiameter === selectedDiameter) &&
      (!selectedAspect || tyre.aspectRatio === selectedAspect)
    );
  });

  return (
    <section className="w-full mx-auto">
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
        </div>
      ) : filteredTyres.length === 0 ? (
        // No products found
        <div className="flex justify-center items-center min-h-[200px]">
          <p className="text-gray-500 text-lg font-medium">
            No products found matching your filters.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredTyres.slice(0, visibleCount).map((tyre) => (
              <div
                onClick={() => handleNavigate(tyre)}
                key={tyre.id}
                className="flex flex-col items-center justify-center p-4 border shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <img
                  src={tyre.imageUrl}
                  alt={tyre.name}
                  className="h-36 sm:h-44 object-contain"
                />
                <span className="mt-2 text-center font-medium text-gray-600 hover:text-orange-500 transition-colors">
                  {tyre.name}
                </span>
              </div>
            ))}
          </div>

          {visibleCount < filteredTyres.length && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className={`px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-300 shadow-md flex items-center justify-center gap-2 ${
                  loadingMore ? "cursor-not-allowed opacity-70" : ""
                }`}
              >
                {loadingMore && (
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                )}
                <span>{loadingMore ? "Loading..." : "Load more"}</span>
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default TyresSection;
