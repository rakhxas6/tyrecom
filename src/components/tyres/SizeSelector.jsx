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
        <h1 className="text-3xl font-extrabold text-gray-800">
          Select Your Tyre Size
        </h1>

        {/* Dropdown selectors */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center">


          {/* Width Selector */}
          <div className="relative">
            <select
              value={selectedWidth}
              required
              onChange={(e) => setSelectedWidth(e.target.value)}
              className="w-full border  p-3 pr-10 appearance-none shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 "
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
          <div className="relative">
            <select
              value={selectedDiameter}
              required
              onChange={(e) => setSelectedDiameter(e.target.value)}
              className="w-full border  p-3 pr-10 appearance-none shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 "
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

          {/* Aspect Selector */}
          <div className="relative">
            <select
              value={selectedAspect}
              required
              onChange={(e) => setSelectedAspect(e.target.value)}
              className="w-full border  p-3 pr-10 appearance-none shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
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
          {/* Find Button */}
          <button
            type="button"
            onClick={() => {
              navigate("/products/tyres");
            }}
            className=" bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 shadow-md font-semibold transition"
          >
            Find Matching Tyres
          </button>
        </div>
      </div>
    </section>
  );
};

export default SizeSelector;
