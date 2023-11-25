import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../images/1.png";
import two from "../images/2.png";
import three from "../images/3.png";
import four from "../images/4.png";

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="py-16 px-5 md:px-10 max-w-[1280px] mx-auto">
      <h2 className="text-mgld text-2xl font-semibold mb-2">
        Our Awesome Clients
      </h2>
      <p className="text-slate-700 text-3xl font-semibold mb-8">
        Our Services are Trusted by
      </p>
      <Slider {...settings}>
        <img src={one} alt="partner1" className="feature-logo" />
        <img src={two} alt="partner1" className="feature-logo" />
        <img src={three} alt="partner1" className="feature-logo" />
        <img src={four} alt="partner1" className="feature-logo" />
      </Slider>
    </div>
  );
};

export default Partners;
