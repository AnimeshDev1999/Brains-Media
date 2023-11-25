import React from "react";
import team from "../images/team.svg";
import AbtCard from "./AbtCard";

const About = () => {
  return (
    <div className="pt-16 px-5">
      <h2 className="text-mgld text-2xl font-semibold mb-2">
        What is Brains Media Solutions?
      </h2>
      <p className="text-slate-700 text-3xl font-semibold mb-3">
        Digital Marketing Company in Belgaum, India
      </p>
      <AbtCard
        img={team}
        alt="team"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni
        consectetur quas ab ea reiciendis ipsum perspiciatis eligendi
        consequatur Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Cum nisi animi nihil assumenda in atque adipisci ratione, qui
        cupiditate sit quos, dolor sint magnam neque? Ducimus a adipisci
        deserunt neque?"
      />
    </div>
  );
};

export default About;
