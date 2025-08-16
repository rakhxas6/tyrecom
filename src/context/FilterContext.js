import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";
import { useLocation } from "react-router-dom";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedWidth, setSelectedWidth] = useState("");
  const [selectedDiameter, setSelectedDiameter] = useState("");
  const [selectedAspect, setSelectedAspect] = useState("");

  const clearFilters = () => {
    setSelectedBrand("");
    setSelectedWidth("");
    setSelectedDiameter("");
    setSelectedAspect("");
  };

  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    // Reset filters only if we are leaving /products/tyres
    if (
      prevPathRef.current === "/products/tyres" &&
      location.pathname !== "/products/tyres"
    ) {
      clearFilters();
    }
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return (
    <FilterContext.Provider
      value={{
        selectedBrand,
        setSelectedBrand,
        selectedWidth,
        setSelectedWidth,
        selectedDiameter,
        setSelectedDiameter,
        selectedAspect,
        setSelectedAspect,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// Custom hook for easy usage
export const useFilters = () => useContext(FilterContext);
