import React from "react";
import ServiceAllCrd from "../features/ServiceAllCrd";
import social from "../images/service-social.svg";
import website from "../images/service-website.svg";
import content from "../images/service-content.svg";
import click from "../images/service-click.svg";
import search from "../images/service-search.svg";

const ServicesPg = () => {
  const data = [
    { name: "Social Media Marketing", img: social, alt: "social" },
    { name: "Website Designing", img: website, alt: "website" },
    { name: "Content Marketing", img: content, alt: "content" },
    { name: "Pay Per Click", img: click, alt: "click" },
    { name: "Search Engine Optimization", img: search, alt: "search" },
  ];

  return (
    <div className="pt-16 px-5 md:px-10 max-w-[1280px] mx-auto">
      <h2 className="text-mgld text-2xl font-semibold mb-2">Services</h2>
      <p className="text-slate-700 text-3xl font-semibold mb-3">
        Our company offers best in class services
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {data.map((item) => (
          <ServiceAllCrd key={item.alt} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPg;
