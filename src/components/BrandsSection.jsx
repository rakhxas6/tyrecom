import React from "react";
import { useNavigate } from "react-router-dom";
import mrfTyres from "../assets/tyresCompany/mrfTryes.webp";
import ceatTyres from "../assets/tyresCompany/CEAT-tyres-logo.webp";
import YokoHamaTyres from "../assets/tyresCompany/yokohama-tyres-logo.webp";
import appoloTyres from "../assets/tyresCompany/apollo-tyres-logo.webp";

const BrandsSection = () => {
  const imgSection = [
    {
      companyName: "MRF Tyres",
      logo: mrfTyres,
    },
    {
      companyName: "Appolo Tyres",
      logo: appoloTyres,
    },
    {
      companyName: "CEAT Tyres",
      logo: ceatTyres,
    },
    {
      companyName: "Yokohama Tyres",
      logo: YokoHamaTyres,
    },
  ];

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/tyres`);
  };

  return (
    <section className="w-full max-w-sm sm:max-w-lg md:max-w-7xl mx-auto space-y-10">
      <h1 className="title text-4xl text-center font-bold">Tyre by Brands</h1>
      <div className="imgContainer grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 space-y-4 place-items-center">
        {imgSection.map((img, index) => (
          <div
            key={index}
            className="flex cursor-pointer"
            onClick={() => handleNavigate()}
          >
            <img
              src={img.logo}
              alt={img.companyName}
              className="h-36 sm:h-44 hover:scale-105 object-contain"
            />
            {/* <span className="text-semibold">{img.companyName}</span> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;
