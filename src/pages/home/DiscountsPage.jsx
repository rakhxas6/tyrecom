import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../assets/discount/discount1.png";
import img2 from "../../assets/discount/d2.jpg";
import img3 from "../../assets/discount/d3.jpg";
import img4 from "../../assets/discount/d4.jpg";
import img5 from "../../assets/discount/d5.png";
import img6 from "../../assets/discount/d6.png";

const DiscountsPage = () => {
  const imgSection = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // 3 images on large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // for mobile screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-full px-6 md:px-16 space-y-10">
      <h1 className="text-3xl font-thin font-clash text-gray-800 relative">
        Special Deals & Discounts
        <span className="absolute -bottom-3 left-0 w-16 h-1 bg-orange-500 rounded"></span>
      </h1>
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {imgSection.map((item) => (
            <div key={item.id} className="flex justify-center items-start px-1">
              <img
                src={item.img}
                alt={`Discount ${item.id}`}
                className="w-full h-auto object-contain "
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default DiscountsPage;
