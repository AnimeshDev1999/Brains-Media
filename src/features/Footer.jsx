import logo from "../images/logo.png";
import fb from "../images/fb.svg";
import tw from "../images/twitter.svg";
import linked from "../images/linked.svg";
import insta from "../images/insta.svg";

const Footer = () => {
  return (
    <div className="bg-mlite p-5 mt-32">
      <div className="grid grid-cols-2 gap-y-5 pb-5 border-b-mgld border-b-[2px]">
        <img src={logo} alt="logo" className="h-16" />
        <div className="flex gap-3">
          <img src={insta} alt="facebook" className="w-7" />
          <img src={fb} alt="facebook" className="w-7" />
          <img src={tw} alt="facebook" className="w-7" />
          <img src={linked} alt="facebook" className="w-7" />
        </div>
        <div className="col-span-2">
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
      <p className="pt-5">
        ©Brains Media Solutions Pvt. Ltd. All Rights Reserved{" "}
      </p>
    </div>
  );
};

export default Footer;
