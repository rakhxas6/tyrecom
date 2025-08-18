import React from "react";
import logo from "../assets/meadowtyresLogo.png";
import { footerList, productList, socialLinks } from "../constants/Product.js";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // navigate("/");
  };

  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border-t-2 border-orange-500 px-6  md:px-16 py-8 md:py-12 gap-10">
      {/* bg-black text-white */}
      <div className="logoInfo space-y-4 ">
        <img
          src={logo}
          onClick={() => handleNavigate()}
          alt="Company logo"
          className="h-24 md:h-32 object-contain cursor-pointer"
        />
        <p className="font-jakarta text-gray-700">
          At Meadow Tyre's, we are dedicated to continually improving ourselves.
          This mindset keeps us engaged and ready for whatever challenges may
          arise. Our primary objective is to offer mobile tyre services around
          the clock, 24/7
        </p>

        <div className="address space-y-1">
          <h3 className="text-orange-500 text-xl font-thin font-clash">
            Address
          </h3>
          <div className="flex flex-col text-gray-700">
            <span className="font-jakarta">Kalanki, Ring Rd</span>
            <span className="font-jakarta">Kathmandu, Nepal 44600</span>
          </div>
        </div>

        <div className="phoneNo space-y-1">
          <h3 className="text-orange-500 text-lg font-thin font-clash">
            Phone No.
          </h3>
          <a
            href="tel:017829421"
            className="hover:text-orange-500 hover:underline transition-all duration-200 inline-block font-jakarta text-gray-700"
          >
            01-7829421
          </a>
        </div>
      </div>

      <div className="quickLinks space-y-4">
        <h2 className="text-orange-500 text-2xl font-clash font-bold">
          Quick Links
        </h2>
        <ul className="font-jakarta">
          {footerList.map((nav, index) => (
            <li key={index} className="list-none text-gray-700">
              <a
                href={nav.path}
                className="flex items-center gap-1 transition-colors duration-200 hover:text-orange-500"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="socialLinks space-y-4">
        <h2 className="text-orange-500 text-2xl  font-clash  font-bold">
          Social Links
        </h2>
        <ul className=" font-jakarta">
          {socialLinks.map((nav, index) => (
            <li key={index} className="list-none text-gray-700">
              <a
                href={nav.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors duration-200 hover:text-orange-500"
              >
                {nav.icon}
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="productInformation space-y-4">
        <h2 className="text-orange-500 text-2xl  font-clash font-bold">
          Products
        </h2>
        <ul className="font-jakarta">
          {productList.map((nav, index) => (
            <li key={index} className="list-none text-gray-700">
              <a
                href={nav.path}
                className="flex items-center gap-1 transition-colors duration-200 hover:text-orange-500"
              >
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
