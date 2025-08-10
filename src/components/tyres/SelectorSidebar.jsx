import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaMinus, FaChevronDown } from "react-icons/fa";
import { useFilters } from "../../context/FilterContext";
import { diameters, aspects, widths ,brands} from "../../constants/Product";


const SelectorSidebar = () => {
  const navigate = useNavigate();

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

  const handleWidthClick = (w) => {
    setSelectedWidth(w);
    navigate(`/tyres#width?selectedWidth=${w}`);
  };

  return (
    <aside className="w-full space-y-6">
      {/* BRAND */}
      <div>
        <div
          onClick={() => setBrandOpen((prev) => !prev)}
          className="flex justify-between items-center cursor-pointer"
        >
          <span className="font-semibold">Brand</span>
          {brandOpen ? <FaPlus /> : <FaMinus />}
        </div>
        {brandOpen && (
          <div className="mt-2 relative">
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full border rounded p-2 pr-10 appearance-none"
            >
              <option value="">Select Brand</option>
              {brands.map((b) => (
                <option key={b} value={b}>
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
          <span className="font-semibold">Width</span>
          {widthOpen ? <FaPlus /> : <FaMinus />}
        </div>
        {widthOpen && (
          <div className="mt-2 space-y-2">
            <input
              type="text"
              placeholder="Search width..."
              value={widthSearch}
              onChange={(e) => setWidthSearch(e.target.value)}
              className="w-full border p-2 text-sm"
            />
            <div className="grid grid-cols-3 gap-2">
              {filteredWidths.length > 0 ? (
                filteredWidths.map((w) => (
                  <button
                    key={w}
                    onClick={() => handleWidthClick(w)}
                    className={`border rounded p-2 text-center transition ${
                      selectedWidth === w
                        ? "bg-orange-500 text-white shadow-lg"
                        : "bg-white hover:bg-orange-100"
                    }`}
                  >
                    {w}
                  </button>
                ))
              ) : (
                <p className="text-xs text-gray-500 col-span-3">
                  No matches found
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
          <span className="font-semibold">Diameter</span>
          {diameterOpen ? <FaPlus /> : <FaMinus />}
        </div>
        {diameterOpen && (
          <div className="grid grid-cols-4 gap-2 mt-2">
            {diameters.map((d) => (
              <button
                key={d}
                onClick={() => setSelectedDiameter(d)}
                className={`border rounded p-2 text-center ${
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
          <span className="font-semibold">Aspect Ratio</span>
          {aspectOpen ? <FaPlus /> : <FaMinus />}
        </div>
        {aspectOpen && (
          <div className="grid grid-cols-4 gap-2 mt-2">
            {aspects.map((a) => (
              <button
                key={a}
                onClick={() => setSelectedAspect(a)}
                className={`border rounded p-2 text-center ${
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

      {/* CLEAR BUTTON */}
      <button
        className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold transition duration-300 shadow-md text-center rounded-lg"
        onClick={() => {
          clearFilters();
          navigate("/tyres");
        }}
      >
        Clear
      </button>
    </aside>
  );
};

export default SelectorSidebar;
