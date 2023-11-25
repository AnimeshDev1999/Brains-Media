import logo from "../images/logo.png";
import fb from "../images/fb.svg";
import tw from "../images/twitter.svg";
import linked from "../images/linked.svg";
import insta from "../images/insta.svg";

const Footer = () => {
  const data = [
    {
      img: insta,
      alt: "instagram",
      link: "https://www.instagram.com/Brains_Media_Solutions/",
    },
    {
      img: fb,
      alt: "facebook",
      link: "https://www.facebook.com/brainsmediasolutions",
    },
    {
      img: tw,
      alt: "twitter",
      link: "https://twitter.com/i/flow/login?redirect_after_login=%2Fbrainsmedia2012",
    },
    {
      img: linked,
      alt: "linkedin",
      link: "https://www.linkedin.com/company/brains-media-solutions-pvt-ltd-/about/",
    },
  ];
  return (
    <div className="bg-mlite p-5 mt-32">
      <div className="grid max-w-[1280px] mx-auto grid-cols-2 md:place-items-center md:grid-cols-3 gap-y-5 pb-5 border-b-mgld border-b-[2px]">
        <img src={logo} alt="logo" className="h-16" />
        <div className="flex gap-3">
          {data.map((item) => (
            <a target="_blank" href={item.link}>
              <img src={item.img} alt={item.alt} className="w-7" />
            </a>
          ))}
        </div>
        <div className="col-span-2 md:col-span-1">
          <a href="tel:95355-33588" className="block text-lg">
            9535533588
          </a>
          <a
            href="mailto:contact@brainsmediasolutions.com"
            className="block text-lg"
          >
            contact@brainsmediasolutions.com
          </a>
        </div>
      </div>
      <p className="pt-5 md:text-center">
        ©Brains Media Solutions Pvt. Ltd. All Rights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
