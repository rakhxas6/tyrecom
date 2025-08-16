import { useEffect ,useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Fade as Hamburger } from "hamburger-react";

// animation in mobile menu
import AOS from "aos";
import "aos/dist/aos.css";

// icons
import { AiOutlineClose } from "react-icons/ai";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import logo from "../assets/meadowtyresLogo.png";

//components import
import SearchBox from "./SearchBox";


const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [openNestedDropdownIndex, setOpenNestedDropdownIndex] = useState(null);


  const navList = [
    { name: "Home", path: "/" },
    {
      name: "Products",
      dropdown: [
        { name: "Wheels", path: "/products/wheels" },
        { name: "Batteries", path: "/products/batteries" },
        {
          name: "Tyres",
          path: "/products/tyres",
          dropdown: [
            { name: "By Size", path: "/tyres/types#size" },
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


  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdownIndex(null);
    setOpenNestedDropdownIndex(null);
  };

  return (
    // bg-[#A2AADB]
    <section className="border-b-2  border-orange-500 relative z-[100]">
      {/* Top Navbar */}
      <div className="flex items-center justify-between w-[90vw] mx-auto h-[14vh]">
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Company logo"
          className="h-16 md:h-20 object-contain cursor-pointer"
        />

        {/* Navlist */}
        <ul className="hidden md:flex gap-4 list-none items-center justify-center">
          {navList.map((nav, index) => (
            <li
              key={index}
              className="relative group font-clash text-[18px] text-[#5D5524]"
            >
              <Link
                to={nav.path}
                className="flex items-center transition-colors duration-200"
              >
                {nav.name}
                {nav.dropdown && <RiArrowDropDownLine size={22}/>}
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
        <SearchBox />

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
      <nav className="flex justify-center items-center">
        <div className="md:hidden w-full z-50">
          {isOpen && (
            <div
              data-aos="fade-left"
              className="fixed top-0 right-0 h-[95dvh] w-[75dvw] max-w-xs bg-gray-100 shadow-lg p-6 overflow-y-auto flex flex-col z-[999]"
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
                  className="  text-black transition-all duration-75"
                  aria-label="Close menu"
                >
                  <AiOutlineClose
                    size={28}
                    className="hover:text-red-600 transition-colors duration-150"
                  />
                </button>
              </div>

              {navList.map((nav, index) => (
                <div key={index} className="text-left mt-1 font-clash">
                  {/* For dropdown items */}
                  {nav.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex w-full text-base py-2 px-3 rounded items-center justify-between hover:bg-black hover:text-white transition-all"
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
                      className="flex w-full text-base  py-2 px-3 rounded items-center justify-between hover:bg-black hover:text-white "
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
                                className="flex w-full py-1 px-3 rounded items-center justify-between hover:bg-black hover:text-white transition-all text-left "
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
