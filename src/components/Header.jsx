import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { FaPhoneAlt } from "react-icons/fa";

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import { useTyres } from "../context/TyreContext";
// import SearchBox from "./SearchBox";

const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openNestedDropdownIndex, setOpenNestedDropdownIndex] = useState(null);
  const { searchTyres, filteredTyres, setSelectedTyre } = useTyres();

  const navList = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      path: "/products",
      dropdown: [
        { name: "Wheels", path: "/products/wheels" },
        { name: "Batteries", path: "/products/batteries" },
        {
          name: "Tyres",
          path: "/products/tyres",
          dropdown: [
            { name: "By Brands", path: "/tyres/types#brand" },
            { name: "By Diameter", path: "/tyres/types#diameter" },
            { name: "By Width", path: "/tyres/types#width" },
          ],
        },
      ],
    },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Learn", path: "/learn" },
  ];

  const toggleDropdown = (index) => {
    if (openDropdownIndex === index) {
      setOpenDropdownIndex(null);
      // close if already open
    } else {
      setOpenDropdownIndex(index); // open new dropdown
    }
  };

  const toggleNestedDropdown = (index) => {
    if (openNestedDropdownIndex === index) {
      setOpenNestedDropdownIndex(null);
    } else {
      setOpenNestedDropdownIndex(index);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 400 }); // 400ms animation duration, adjust as needed
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    searchTyres(value); // update context
  };

  const slugify = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const handleNavigate = (tyre) => {
    setSelectedTyre(tyre); // store in context
    navigate(`/tyres/${slugify(tyre.name)}`);
    setSearchTerm("");
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdownIndex(null);
    setOpenNestedDropdownIndex(null);
  };

  return (
    // bg-[#A2AADB]
    <section className="border-b-2 border-orange-500 relative z-[100]">
      {/* Top Navbar */}
      <div className="flex items-center justify-between w-[90vw] mx-auto">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Company logo"
          className="h-16 md:h-20 object-contain cursor-pointer"
        />

        {/* Navlist */}
        <ul className="hidden md:flex gap-5 list-none items-center justify-center">
          {navList.map((nav, index) => (
            <li
              key={index}
              className="relative group font-semibold text-[16px] text-[#5D5524]"
            >
              <Link
                to={nav.path}
                className="flex items-center gap-1 transition-colors duration-200"
              >
                {nav.name}
                {nav.dropdown && <RiArrowDropDownLine size={22} />}
              </Link>

              {nav.dropdown && (
                <ul className="absolute top-full left-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-md mt-0 w-40 z-20">
                  {nav.dropdown.map((item, idx) => (
                    <li key={idx} className="relative group/sub">
                      <Link
                        to={item.path}
                        className="flex justify-between items-center px-4 py-2 border-b border-gray-300 last:border-b-0 hover:bg-gray-100"
                      >
                        {item.name}
                        {item.dropdown && <RiArrowDropDownLine size={20} />}
                      </Link>

                      {item.dropdown && (
                        <ul className="absolute top-0 left-full opacity-0 invisible group-hover/sub:visible group-hover/sub:opacity-100 transition-opacity duration-200 bg-white shadow-md mt-0 w-40 z-30">
                          {item.dropdown.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <Link
                                to={subItem.path}
                                className="block px-4 py-2 border-b border-gray-300 last:border-b-0 hover:bg-gray-100"
                              >
                                {subItem.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* <SearchBox /> */}
        <div className="hidden md:flex  justify-center relative">
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
            <FiSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Live Results Section */}
          {searchTerm.trim() && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 shadow-lg  max-h-60 overflow-y-auto z-50">
              {filteredTyres.length > 0 ? (
                filteredTyres.map((tyre) => (
                  <div
                    key={tyre.id}
                    className="px-4 py-2  cursor-pointer flex items-center gap-3"
                    onClick={() => handleNavigate(tyre)}
                  >
                    <img
                      src={tyre.imageUrl}
                      alt={tyre.name}
                      className="w-10 h-10 object-contain"
                    />
                    <span className="text-gray-700 text-xs">{tyre.name}</span>
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">No tyres found</div>
              )}
            </div>
          )}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={(toggled) => {
              setIsOpen(toggled);
              if (!toggled) {
                closeMenu();
              }
            }}
            size={28}
            aria-label="Toggle navigation"
          />
        </div>
      </div>

      {/* Mobile / Tablet: Show Phone or Menu based on hamburger state */}
      {/* Bottom Navbar */}
      <nav className="flex justify-center items-center">
        <div className="md:hidden w-full z-50">
          {isOpen && (
            <div
              data-aos="fade-left"
              className="fixed top-0 right-0 h-[90dvh] w-[75dvw] max-w-xs bg-gray-100 shadow-lg p-6 overflow-y-auto flex flex-col z-[999]"
            >
              <div className="container flex items-center justify-between">
                <img
                  onClick={() => navigate("/")}
                  src={logo}
                  alt="Company logo"
                  className="h-16 object-contain cursor-pointer"
                />
                <button
                  onClick={closeMenu}
                  className="self-end mb-4 text-black transition-all duration-75"
                  aria-label="Close menu"
                >
                  <AiOutlineClose
                    size={28}
                    className="hover:text-red-600 transition-colors duration-150"
                  />
                </button>
              </div>

              {navList.map((nav, index) => (
                <div key={index} className="text-left mt-1">
                  {/* For dropdown items */}
                  {nav.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex w-full text-base font-semibold py-2 px-3 rounded items-center justify-between hover:bg-black hover:text-white transition-all"
                      type="button"
                    >
                      {/* Tyres doesn't navigate */}
                      <span className="flex items-center gap-1 transition-colors duration-200">
                        {nav.name}
                      </span>

                      {/* Dropdown arrow */}
                      {openDropdownIndex === index ? (
                        <RiArrowDropUpLine size={22} />
                      ) : (
                        <RiArrowDropDownLine size={22} />
                      )}
                    </button>
                  ) : (
                    // For normal links
                    <Link
                      to={nav.path}
                      onClick={closeMenu}
                      className="flex w-full text-base font-semibold py-2 px-3 rounded items-center justify-between hover:bg-black hover:text-white "
                    >
                      <span className="flex items-center gap-1 transition-colors duration-200 ">
                        {nav.name}
                      </span>
                    </Link>
                  )}

                  {/* Dropdown menu if applicable */}
                  {nav.dropdown && openDropdownIndex === index && (
                    <div
                      className={`ml-4 text-sm text-gray-700 space-y-1 transition-all duration-300 overflow-hidden ${
                        openDropdownIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {nav.dropdown.map((item, idx) => (
                        <div key={idx}>
                          {item.dropdown ? (
                            <>
                              <button
                                onClick={() => {
                                  toggleNestedDropdown(idx);
                                }}
                                className="flex w-full py-1 px-3 rounded items-center justify-between hover:bg-black hover:text-white transition-all text-left font-semibold"
                                type="button"
                              >
                                {item.name}
                                {openNestedDropdownIndex === idx ? (
                                  <RiArrowDropUpLine size={20} />
                                ) : (
                                  <RiArrowDropDownLine size={20} />
                                )}
                              </button>

                              {/* Nested dropdown */}
                              <div
                                className={`ml-4 space-y-1 transition-all duration-300 overflow-hidden ${
                                  openNestedDropdownIndex === idx
                                    ? "max-h-96 opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                {item.dropdown.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    to={subItem.path}
                                    className="block py-1 px-3 hover:bg-black hover:text-white rounded"
                                    onClick={closeMenu}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              to={item.path}
                              className="block py-1 px-3 hover:bg-black hover:text-white rounded"
                              onClick={closeMenu}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Header;
