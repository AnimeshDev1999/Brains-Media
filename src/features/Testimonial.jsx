import TestCard from "./TestCard";

const Testimonial = () => {
  return (
    <div className="px-5 py-16 grid grid-cols-1 gap-5">
      <div>
        <h2 className="text-mgld text-2xl font-semibold mb-3">
          Join the Success!
        </h2>
        <p className="text-xl text-slate-500 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni
          consectetur quas ab ea reiciendis ipsum perspiciatis eligendi
          consequatur.
        </p>
        <button className="text-xl text-mgld">Learn more</button>
      </div>
      <TestCard nam="Web Works" />
      <TestCard nam="Confinity" />
      <TestCard nam="SellerOne" />
    </div>
  );
};

export default Testimonial;
