import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="py-16 px-5">
      <h2 className="text-mgld text-2xl font-semibold mb-8">
        Services We Offer
      </h2>
      <div className="grid grid-cols-1 gap-5 mb-8">
        <ServiceCard nam="Social Media Posts" />
        <ServiceCard nam="Website Design" />
        <ServiceCard nam="Content Marketing" />
      </div>
      <div className="flex justify-end">
        <button className="text-mgld text-xl underline">
          View all services
        </button>
      </div>
    </div>
  );
};

export default Services;
