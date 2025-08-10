import React from "react";
import { diameters, aspects, widths } from "../../constants/Product";
import { FaChevronDown } from "react-icons/fa";
import { useFilters } from "../../context/FilterContext";

const SizeSelector = () => {
  const {
    selectedWidth,
    setSelectedWidth,
    selectedDiameter,
    setSelectedDiameter,
    selectedAspect,
    setSelectedAspect,
  } = useFilters();
    return (
      <section className="w-full max-w-sm sm:max-w-lg md:max-w-5xl mx-auto">
        <div className="flex flex-col gap-4 mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800">
            Select Your Tyre Size
          </h1>

          {/* Dropdown selectors */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Width Selector */}
            <div className="relative w-full md:w-1/3">
              <select
                value={selectedWidth}
                onChange={(e) => setSelectedWidth(e.target.value)}
                className="w-full border rounded-lg p-3 pr-10 appearance-none shadow-sm focus:ring-2 focus:ring-orange-500"
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

            {/* Diameter Selector */}
            <div className="relative w-full md:w-1/3">
              <select
                value={selectedDiameter}
                onChange={(e) => setSelectedDiameter(e.target.value)}
                className="w-full border rounded-lg p-3 pr-10 appearance-none shadow-sm focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Rim Diameter (inches)</option>
                {diameters.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
              <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>

            {/* Aspect Selector */}
            <div className="relative w-full md:w-1/3">
              <select
                value={selectedAspect}
                onChange={(e) => setSelectedAspect(e.target.value)}
                className="w-full border rounded-lg p-3 pr-10 appearance-none shadow-sm focus:ring-2 focus:ring-orange-500"
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
          </div>

          {/* Find Button */}
          <button
            type="button"
            className="mt-4 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg shadow-md font-semibold transition"
          >
            Find Matching Tyres
          </button>
        </div>
      </section>
    );
};

export default SizeSelector;
