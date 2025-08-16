// TyreContext.jsx
import { createContext, useContext, useState } from "react";
import { tyres as tyresData } from "../constants/Product"; 

const TyreContext = createContext();

export const TyreProvider = ({ children }) => {
  const [tyres] = useState(tyresData);
  const [filteredTyres, setFilteredTyres] = useState(tyresData);
  const [selectedTyre, setSelectedTyre] = useState(null);

  const searchTyres = (query) => {
    if (!query.trim()) {
      setFilteredTyres(tyres);
      return;
    }

    const lowerQuery = query.toLowerCase();

    setFilteredTyres(
      tyres.filter((t) => {
        const nameMatch = t.name?.toLowerCase().includes(lowerQuery);
        const brandMatch = t.brand?.toLowerCase().includes(lowerQuery);
        const widthMatch = String(t.width)?.toLowerCase().includes(lowerQuery);
        const diameterMatch = String(t.diameter)
          ?.toLowerCase()
          .includes(lowerQuery);
        const aspectMatch = String(t.aspectRatio)
          ?.toLowerCase()
          .includes(lowerQuery);

        return (
          nameMatch || brandMatch || widthMatch || diameterMatch || aspectMatch
        );
      })
    );
  };


  return (
    <TyreContext.Provider
      value={{
        tyres,
        filteredTyres,
        selectedTyre,
        setSelectedTyre,
        searchTyres,
      }}
    >
      {children}
    </TyreContext.Provider>
  );
};

export const useTyres = () => useContext(TyreContext);
