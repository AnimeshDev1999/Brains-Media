import React from "react";
import vision from "../images/vision.svg";
import AbtCard from "./AbtCard";

const Vision = () => {
  return (
    <div className="px-5">
      <h2 className="text-mgld text-2xl font-semibold mb-2">Our Vision</h2>
      <p className="text-slate-700 text-3xl font-semibold mb-3">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <AbtCard
        img={vision}
        alt="vision"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni
          consectetur quas ab ea reiciendis ipsum perspiciatis eligendi
          consequatur Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
    </div>
  );
};

export default Vision;
