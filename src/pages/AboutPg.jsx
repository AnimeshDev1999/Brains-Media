import React from "react";
import About from "../features/About";
import Mission from "../features/Mission";
import Vision from "../features/Vision";

const AboutPg = () => {
  return (
    <div className="md:px-5 max-w-[1280px] mx-auto">
      <About />
      <Mission />
      <Vision />
    </div>
  );
};

export default AboutPg;
