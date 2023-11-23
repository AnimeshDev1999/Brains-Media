import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counterOn, setCounterOn] = useState(false);
  const data = [
    { heading: "Projects Completed", num: 100 },
    { heading: "Happy Clients", num: 20 },
    { heading: "Years Experience", num: 8 },
    { heading: "Employees", num: 8 },
  ];
  return (
    <div className="py-16 px-5">
      <h2 className="text-mgld text-2xl font-semibold mb-2">
        Our Progress Report
      </h2>
      <p className="text-slate-700 text-3xl font-semibold mb-8">
        Achieving Success and Excellence Every Day
      </p>
      <ScrollTrigger
        onEnter={() => setCounterOn(true)}
        onExit={() => setCounterOn(false)}
      >
        <div className="grid grid-cols-2 gap-5 bg-mlite p-5 rounded-md">
          {data.map((item) => (
            <div className="">
              <p className="text-4xl font-semibold text-slate-700">
                {counterOn && (
                  <CountUp
                    className="text-slate-700"
                    start={0}
                    end={item.num}
                    duration={2}
                    delay={0}
                  ></CountUp>
                )}
                +
              </p>
              <p className="text-lg">{item.heading}</p>
            </div>
          ))}
        </div>
      </ScrollTrigger>
    </div>
  );
};

export default Stats;
