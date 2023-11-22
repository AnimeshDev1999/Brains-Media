import star from "../images/star.svg";
import quote from "../images/quote.svg";

const TestCard = (props) => {
  return (
    <div className="relative shadow-md rounded-md p-5">
      <div className="flex justify-between">
        <p className="text-xl mb-2">{props.nam}</p>
        <div className="flex gap-2">
          <img src={star} alt="star" className="h-6" />
          <img src={star} alt="star" className="h-6" />
          <img src={star} alt="star" className="h-6" />
          <img src={star} alt="star" className="h-6" />
          <img src={star} alt="star" className="h-6" />
        </div>
      </div>
      <p className="text-lg text-slate-500 mb-5">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
        voluptatum quaerat dignissimos est commodi suscipit, enim quos ratione
        deleniti.
      </p>
      <img src={quote} alt="quote" className="h-8 absolute bottom-5 right-5" />
    </div>
  );
};

export default TestCard;
