import React from "react";
import logo from "../assets/meadowtyresLogo.png";
import { footerList, productList, socialLinks } from "../constants/Product.js";
const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 border-t-2 border-orange-500 px-6  md:px-16 py-8 md:py-12 gap-10 text-[#5D5524] font-clash">
      {/* bg-black text-white */}
      <div className="logoInfo space-y-4 ">
        <img
          src={logo}
          alt="Company logo"
          className="h-24 md:h-32 object-contain"
        />
        <p className="text-sm md:text-base leading-relaxed text-[18px]">
          At Meadow Tyre's, we are dedicated to continually improving ourselves.
          This mindset keeps us engaged and ready for whatever challenges may
          arise. Our primary objective is to offer mobile tyre services around
          the clock, 24/7
        </p>

        <div className="address space-y-1">
          <h3 className="text-orange-500 text-lg font-semibold">Address</h3>
          <div className="flex gap-1 flex-col text-[18px]">
            <span className="text-sm md:text-base">35 Lower King St</span>
            <span className="text-sm md:text-base">Caboolture QLD 4510</span>
          </div>
        </div>

        <div className="phoneNo space-y-1 text-[18px]">
          <h3 className="text-orange-500 text-lg font-semibold">Phone No.</h3>
          <a
            href="tel:017829421"
            className="hover:text-orange-500 hover:underline transition-all duration-200 inline-block text-sm md:text-base"
          >
            01-7829421
          </a>
        </div>
      </div>

      <div className="Information space-y-4 ">
        <h2 className="text-orange-500 text-2xl font-bold">Information</h2>
        <ul className="space-y-2 text-[18px]">
          {footerList.map((nav, index) => (
            <li key={index} className="list-none text-base">
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
      <div className="socialLinks space-y-4 ">
        <h2 className="text-orange-500 text-2xl font-bold">Social Links</h2>
        <ul className="space-y-2 text-[18px]">
          {socialLinks.map((nav, index) => (
            <li key={index} className="list-none text-base">
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

      <div className="Information space-y-4 ">
        <h2 className="text-orange-500 text-2xl font-bold">Products</h2>
        <ul className="space-y-2 text-[18px]">
          {productList.map((nav, index) => (
            <li key={index} className="list-none text-base">
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
