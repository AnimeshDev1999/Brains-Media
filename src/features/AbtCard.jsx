import React from "react";

const AbtCard = (props) => {
  return (
    <div className="bg-mlite p-5 rounded-md">
      <img
        src={props.img}
        alt={props.alt}
        className="w-full mb-5 bg-white p-5 rounded-md"
      />
      <p className="text-xl text-slate-500">{props.content}</p>
    </div>
  );
};

export default AbtCard;
