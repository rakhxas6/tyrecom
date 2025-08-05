import { useNavigate } from "react-router-dom";
import mrfTyres from "../assets/tyresCompany/mrfTryes.webp";
import ceatTyres from "../assets/tyresCompany/CEAT-tyres-logo.webp";
import YokoHamaTyres from "../assets/tyresCompany/yokohama-tyres-logo.webp";
import appoloTyres from "../assets/tyresCompany/apollo-tyres-logo.webp";
import ContactForm from "./ContactForm";

const Wheels = () => {
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
    <div>
      <section
        className="contactPage w-full max-w-xs sm:max-w-xl md:max-w-5xl mx-auto my-5 sm:my-8 space-y-12"
        style={{ fontFamily: "Quicksand, sans-serif" }}
      >
        <div className="headingContainer flex flex-col gap-5 space-y-5 ">
          <h2 className="font-bold text-xl sm:text-4xl flex justify-center items-center">
            Wheels By Brands
          </h2>
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
        </div>

        <ContactForm />
      </section>
    </div>
  );
};

export default Wheels;
