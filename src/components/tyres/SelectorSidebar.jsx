import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";
import { useFilters } from "../../context/FilterContext";
import { diameters, aspects, widths, brands } from "../../constants/Product";

const SelectorSidebar = () => {
  const navigate = useNavigate();
  const { brand } = useParams();

  const {
    selectedBrand,
    setSelectedBrand,
    selectedWidth,
    setSelectedWidth,
    selectedDiameter,
    setSelectedDiameter,
    selectedAspect,
    setSelectedAspect,
    clearFilters,
  } = useFilters();

  // Open/close states
  const [brandOpen, setBrandOpen] = useState(true);
  const [widthOpen, setWidthOpen] = useState(true);
  const [diameterOpen, setDiameterOpen] = useState(true);
  const [aspectOpen, setAspectOpen] = useState(true);

  // Search for width
  const [widthSearch, setWidthSearch] = useState("");
  const filteredWidths = widths.filter((w) => w.includes(widthSearch.trim()));

  return (
    <aside className="w-full space-y-6">
      {/* BRAND */}
      <div>
        <div
          onClick={() => setBrandOpen((prev) => !prev)}
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="font-semibold font-clash">Brand</span>
          {brandOpen ? (
            <FaMinus size={14} className="text-gray-500" />
          ) : (
            <FaPlus size={14} className="text-gray-500" />
          )}
        </div>
        {brandOpen && (
          <div className="mt-2 relative">
            <select
              value={selectedBrand || brand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full border focus:outline-none focus:ring-2 focus:ring-orange-500 p-2 pr-10 appearance-none font-jakarta font-thin text-gray-700"
            >
              <option value="">Select Brand</option>
              {brands.map((b) => (
                <option key={b} value={b} className="font-thin text-gray-700">
                  {b}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        )}
      </div>

      {/* WIDTH */}
      <div id="width">
        <div
          onClick={() => setWidthOpen((prev) => !prev)}
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="font-semibold font-clash">Width</span>
          {widthOpen ? (
            <FaMinus size={14} className="text-gray-500" />
          ) : (
            <FaPlus size={14} className="text-gray-500" />
          )}
        </div>
        {widthOpen && (
          <div className="mt-2 space-y-2">
            <input
              type="text"
              placeholder="Search width..."
              value={widthSearch}
              onChange={(e) => setWidthSearch(e.target.value)}
              className="w-full border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 font-jakarta"
            />
            <div className="grid grid-cols-3 gap-2">
              {filteredWidths.length > 0 ? (
                filteredWidths.map((w) => (
                  <button
                    key={w}
                    onClick={() => {
                      setWidthSearch(selectedWidth === w ? "" : w);
                      setSelectedWidth(selectedWidth === w ? "" : w);
                    }}
                    className={`border p-2 text-center font-thin font-jakarta text-gray-700  transition ${
                      selectedWidth === w
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white hover:bg-orange-100"
                    }`}
                  >
                    {w}
                  </button>
                ))
              ) : (
                <p className="text-xs text-gray-500 col-span-3 font-jakarta">
                  No matches found!!
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* DIAMETER */}
      <div>
        <div
          onClick={() => setDiameterOpen((prev) => !prev)}
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="font-semibold font-clash">Diameter</span>
          {diameterOpen ? (
            <FaMinus size={14} className="text-gray-500" />
          ) : (
            <FaPlus size={14} className="text-gray-500" />
          )}
        </div>
        {diameterOpen && (
          <div className="grid grid-cols-4 gap-2 mt-2">
            {diameters.map((d) => (
              <button
                key={d}
                onClick={() =>
                  setSelectedDiameter(selectedDiameter === d ? "" : d)
                }
                className={`border p-2 text-center font-thin text-gray-700 font-jakarta ${
                  selectedDiameter === d
                    ? "bg-orange-500 text-white"
                    : "bg-white hover:bg-orange-100"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ASPECT */}
      <div>
        <div
          onClick={() => setAspectOpen((prev) => !prev)}
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="font-semibold font-clash">Aspect Ratio</span>
          {aspectOpen ? (
            <FaMinus size={14} className="text-gray-500" />
          ) : (
            <FaPlus size={14} className="text-gray-500" />
          )}
        </div>
        {aspectOpen && (
          <div className="grid grid-cols-4 gap-2 mt-2">
            {aspects.map((a) => (
              <button
                key={a}
                onClick={() => setSelectedAspect(selectedAspect === a ? "" : a)}
                className={`border p-2 text-center font-thin text-gray-700 font-jakarta ${
                  selectedAspect === a
                    ? "bg-orange-500 text-white"
                    : "bg-white hover:bg-orange-100"
                }`}
              >
                {a}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* SEARCH & CLEAR */}
      <div className=" cta flex justify-between gap-6">
        <button
          className="w-full mt-4 px-6 py-3 shadow-md font-thin font-clash  tracking-wider  transition duration-300 text-center bg-orange-500 hover:bg-orange-700 text-white cursor-pointer"
          onClick={() => navigate("/products/tyres")}
        >
          Search
        </button>

        <button
          className=" w-full mt-4 px-6 py-3 bg-red-600 hover:bg-red-800 text-white font-thin font-clash  tracking-wider transition duration-300 shadow-md text-center"
          onClick={() => {
            clearFilters();
            navigate("/products/tyres");
          }}
        >
          Clear
        </button>
      </div>
    </aside>
  );
};

export default SelectorSidebar;
