import React from "react";

const AbtCard = (props) => {
  return (
    <div className="bg-mlite grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 p-5 rounded-md">
      <img
        src={props.img}
        alt={props.alt}
        className="w-full mb-5 bg-white p-5 rounded-md sm:hidden"
      />
      <p className="text-xl text-slate-500 lg:col-span-2">{props.content}</p>
      <img
        src={props.img}
        alt={props.alt}
        className="w-full bg-white p-5 hidden sm:block rounded-md"
      />
    </div>
  );
};

export default AbtCard;
