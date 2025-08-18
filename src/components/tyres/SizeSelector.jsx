import React from "react";
import { diameters, aspects, widths } from "../../constants/Product";
import { FaChevronDown } from "react-icons/fa";
import { useFilters } from "../../context/FilterContext";
import { useNavigate } from "react-router-dom";

const SizeSelector = () => {
  const {
    selectedWidth,
    setSelectedWidth,
    selectedDiameter,
    setSelectedDiameter,
    selectedAspect,
    setSelectedAspect,
  } = useFilters();

  const navigate = useNavigate();

  return (
    <section className="w-full px-6 md:px-16">
      <div className="flex flex-col gap-4 mb-8">
        <h1 className="text-3xl font-thin font-clash text-gray-800">
          Select Your Tyre Size
        </h1>

        <div className="flex flex-col md:flex-row gap-4 md:items-center">
          {/* Width Selector */}
          <div className="relative">
            <select
              value={selectedWidth}
              onChange={(e) => setSelectedWidth(e.target.value)}
              className="w-full border p-3 pr-10 appearance-none shadow-sm font-jakarta focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
            >
              <option value="">Tyre Width</option>
              {widths.map((w) => (
                <option key={w} value={w}>
                  {w}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Diameter Selector (disabled until width chosen) */}
          <div className="relative">
            <select
              value={selectedDiameter}
              onChange={(e) => setSelectedDiameter(e.target.value)}
              disabled={!selectedWidth}
              className={`w-full border p-3 pr-10 appearance-none shadow-sm  font-jakarta focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                !selectedWidth
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
            >
              <option value="">Diameter (inches)</option>
              {diameters.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Aspect Selector (disabled until diameter chosen) */}
          <div className="relative">
            <select
              value={selectedAspect}
              onChange={(e) => setSelectedAspect(e.target.value)}
              disabled={!selectedDiameter}
              className={`w-full border p-3 pr-10 appearance-none shadow-sm font-jakarta focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                !selectedDiameter
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer"
              }`}
            >
              <option value="">Aspect Ratio</option>
              {aspects.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              ))}
            </select>
            <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Find Button (only enabled when all selected) */}
          <button
            type="button"
            disabled={!selectedWidth || !selectedDiameter || !selectedAspect}
            onClick={() => navigate("/products/tyres")}
            className={`py-3 px-6 shadow-md font-thin font-clash  tracking-wider transition  ${
              !selectedWidth || !selectedDiameter || !selectedAspect
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-orange-500 hover:bg-orange-600 text-white cursor-pointer"
            }`}
          >
            Find Matching Tyres
          </button>
        </div>
      </div>
    </section>
  );
};

export default SizeSelector;
