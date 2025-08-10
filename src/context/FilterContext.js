import React, { createContext, useContext, useState } from "react";

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
