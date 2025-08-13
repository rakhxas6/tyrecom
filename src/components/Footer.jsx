import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const footerList = [
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];
  const socialLinks = [
    {
      name: "Facebook",
      path: "https://www.facebook.com/",
      icon: <FaFacebookF />,
    },
    {
      name: "Instagram",
      path: "/https://www.instagram.com/",
      icon: <FaInstagram />,
    },
  ];
  const tyresList = [
    { name: "Tyres by Width", path: "/tyres/width" },
    { name: "Tyres by Size", path: "/tyres/size" },
    { name: "Tyres by Brand", path: "/tyres/brand" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 bg-black text-white px-6  md:px-16 py-8 md:py-12 gap-10 ">
      <div className="logoInfo space-y-4">
        <img
          src={logo}
          alt="Company logo"
          className=" h-32 md:h-44 object-contain"
        />
        <p className="text-sm md:text-base leading-relaxed">
          At Kaps Tyre's, we are dedicated to continually improving ourselves.
          This mindset keeps us engaged and ready for whatever challenges may
          arise. Our primary objective is to offer mobile tyre services around
          the clock, 24/7
        </p>

        <div className="address space-y-1">
          <h3 className="text-orange-500 text-lg font-semibold">Address</h3>
          <div className="flex gap-1 flex-col">
            <span className="text-sm md:text-base">35 Lower King St</span>
            <span className="text-sm md:text-base">Caboolture QLD 4510</span>
          </div>
        </div>

        <div className="phoneNo space-y-1">
          <h3 className="text-orange-500 text-lg font-semibold">Phone No.</h3>
          <a
            href="tel:017829421"
            className="hover:text-orange-500 transition-all duration-200 inline-block text-sm md:text-base"
          >
            01-7829421
          </a>
        </div>
      </div>

      <div className="Information space-y-4">
        <h2 className="text-orange-500 text-2xl font-bold">Information</h2>
        <ul className="space-y-2">
          {footerList.map((nav, index) => (
            <li key={index} className="list-none font-semibold text-base">
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
        <h2 className="text-orange-500 text-2xl font-bold">Social Links</h2>
        <ul className="space-y-2">
          {socialLinks.map((nav, index) => (
            <li key={index} className="list-none font-semibold text-base">
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

      <div className="Information space-y-4">
        <h2 className="text-orange-500 text-2xl font-bold">Tyres</h2>
        <ul className="space-y-2">
          {tyresList.map((nav, index) => (
            <li key={index} className="list-none font-semibold text-base">
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
