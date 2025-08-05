import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import img1 from "../assets/homeBanner/1.jpg";
import img2 from "../assets/homeBanner/2.jpg";

const HomeImageCarasoul = () => {

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
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgSection.map((item) => (
          <div
            key={item.id}
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
