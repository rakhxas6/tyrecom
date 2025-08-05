import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";

import "aos/dist/aos.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import img1 from "../assets/homeBanner/1.jpg";
import img2 from "../assets/homeBanner/2.jpg";

const HomeImageCarasoul = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  const imgSection = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
  ];

  const settings = {
    autoplay: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => AOS.refresh(), // Re-trigger AOS after each slide
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgSection.map((item) => (
          <div
            key={item.id}
            data-aos="zoom-in-up"
            className="w-96 h-96 sm:w-full md:h-screen "
          >
            <img
              src={item.img}
              alt={`Banner ${item.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeImageCarasoul;
