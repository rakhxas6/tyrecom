import { createContext, useContext, useState } from "react";

const TyreContext = createContext();

export const useTyres = () => useContext(TyreContext);

export const TyreProvider = ({ children }) => {
  const [selectedTyre, setSelectedTyre] = useState(null);

  return (
    <TyreContext.Provider value={{ selectedTyre, setSelectedTyre }}>
      {children}
    </TyreContext.Provider>
  );
};
