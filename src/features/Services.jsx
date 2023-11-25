import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import social from "../images/service-social.svg";
import website from "../images/service-website.svg";
import content from "../images/service-content.svg";

const Services = () => {
  return (
    <div className="py-16 px-5 md:px-10 max-w-[1280px] mx-auto">
      <h2 className="text-mgld text-2xl font-semibold mb-8">
        Services We Offer
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <ServiceCard img={social} alt="social" nam="Social Media Posts" />
        <ServiceCard img={website} alt="website" nam="Website Design" />
        <ServiceCard img={content} alt="content" nam="Content Marketing" />
      </div>
      <div className="flex justify-end">
        <Link to="/services" className="text-mgld text-xl underline">
          View all services
        </Link>
      </div>
    </div>
  );
};

export default Services;
