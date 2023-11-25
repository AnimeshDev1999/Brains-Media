import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import one from "../images/service-click.svg";
import three from "../images/service-content.svg";
import four from "../images/service-social.svg";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="flex wave items-center lg:px-10 md:px-10 py-16">
      <div className="max-w-[1280px] grid grid-cols-1 lg:grid-cols-2 lg:gap-5 w-full mx-auto">
        <div className="backdrop md:rounded-md p-5 h-max my-auto">
          {/* Heading formatting-1 for small display  */}
          <h1 className="text-5xl font-semibold mb-5 sm:hidden">
            Get your <br /> <span className="text-mgld">business</span> <br />{" "}
            online <br /> in less than <br />{" "}
            <span className="text-mgld">24 hours</span>.
          </h1>
          {/* Heading formatting-2 for big display  */}
          <h1 className="text-5xl font-semibold mb-5 hidden sm:block">
            Get your <span className="text-mgld">business</span> online in less
            than <span className="text-mgld">24 hours</span>.
          </h1>
          <p className="text-xl text-slate-500 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat
            excepturi repudiandae? A sapiente illum officia natus fugiat.
          </p>
          <button className="bg-mgld text-white px-5 py-2 text-xl rounded-md">
            Get Started Now
          </button>
        </div>
        <div className="lg:block hidden my-auto p-5">
          <Slider {...settings} className="backdrop rounded-md p-5">
            <img src={one} alt="partner1" className="h-[12rem]" />
            <img src={three} alt="partner1" className="h-[12rem]" />
            <img src={four} alt="partner1" className="h-[12rem]" />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
