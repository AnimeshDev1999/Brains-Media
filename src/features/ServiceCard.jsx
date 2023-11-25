import card1 from "../images/card1.svg";

const ServiceCard = (props) => {
  return (
    <div className="shadow-md p-5 rounded-md overflow-hidden">
      <img src={props.img} alt={props.alt} className="mb-8" />
      <div>
        <h3 className="text-xl mb-1">{props.nam}</h3>
        <p className="text-lg text-slate-500 mb-3">
          Lorem ipsum dolor sit amet conetur adicing elit. Exerctionem ab
          dolorem nostrum eligendi.
        </p>
        <button className="text-xl text-mgld">Learn more</button>
      </div>
    </div>
  );
};

export default ServiceCard;
