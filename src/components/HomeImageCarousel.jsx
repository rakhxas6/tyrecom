import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import img1 from "../assets/homeBanner/1.jpg";
import img2 from "../assets/homeBanner/2.jpg";

const HomeImageCarousel = () => {
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
    dots: true,
    arrows: false,
  };

  return (
    <div className="w-full overflow-x-hidden">
      <Slider {...settings}>
        {imgSection.map((item) => (
          <div
            key={item.id}
            className="w-full h-[300px] sm:h-[400px] md:h-screen"
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

export default HomeImageCarousel;
