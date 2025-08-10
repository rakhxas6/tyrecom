import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useTyres } from "../context/TyreContext";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchTyres, filteredTyres, setSelectedTyre } = useTyres();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchTyres(value); // update context
  };

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const handleNavigate = (tyre) => {
    setSelectedTyre(tyre); // store in context
      navigate(`/tyres/${slugify(tyre.name)}`);
      setSearchTerm("")
  };

  return (
    <div className="w-full md:w-[40%] relative">
      {/* Search Input */}
      <div className="relative">
        <input
          value={searchTerm}
          onChange={handleSearch}
          type="text"
          name="search"
          placeholder="Search for Products"
          className="SearchInput w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-300" />
      </div>

      {/* Live Results Section */}
      {searchTerm.trim() && (
        <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg rounded-lg max-h-60 overflow-y-auto z-50">
          {filteredTyres.length > 0 ? (
            filteredTyres.map((tyre) => (
              <div
                key={tyre.id}
                className="px-4 py-2 hover:bg-orange-50 cursor-pointer flex items-center gap-3"
                onClick={() => handleNavigate(tyre)}
              >
                <img
                  src={tyre.imageUrl}
                  alt={tyre.name}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-gray-700">{tyre.name}</span>
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No tyres found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
