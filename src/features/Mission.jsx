import React from "react";
import mission from "../images/mission.svg";
import AbtCard from "./AbtCard";

const Mission = () => {
  return (
    <div className="py-16 px-5">
      <h2 className="text-mgld text-2xl font-semibold mb-2">Our Mission</h2>
      <p className="text-slate-700 text-3xl font-semibold mb-3">
        Lorem ipsum dolor sit amet consectetur.
      </p>
      <AbtCard
        img={mission}
        alt="mission"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni
          consectetur quas ab ea reiciendis ipsum perspiciatis eligendi
          consequatur Lorem ipsum dolor, sit amet consectetur adipisicing elit."
      />
    </div>
  );
};

export default Mission;
