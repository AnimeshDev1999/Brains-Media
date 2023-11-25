import React from "react";

const ServiceAllCrd = (props) => {
  return (
    <div className="bg-mlite p-5 rounded-md">
      <img
        src={props.data.img}
        alt={props.data.alt}
        className="w-full mb-5 bg-white p-5 rounded-md"
      />
      <h3 className="text-2xl mb-1">{props.data.name}</h3>
      <p className="text-lg text-slate-500 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni
        consectetur quas ab ea reiciendis ipsum perspiciatis eligendi
        consequatur Lorem ipsum dolor, sit amet consectetur adipisicing elit
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="flex justify-end">
        <button className="bg-mgld text-white px-2 py-1 text-xl rounded-md">
          Get a Quote
        </button>
      </div>
    </div>
  );
};

export default ServiceAllCrd;
