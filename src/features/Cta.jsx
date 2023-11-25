import working from "../images/working.svg";

const Cta = () => {
  return (
    <div className="grid grid-cols-1 lg:place-items-center lg:grid-cols-3 mx-5 p-5 max-w-[1280px] xl:mx-auto md:mx-10 my-16 cta-img-box rounded-md">
      <div className="lg:flex lg:flex-col lg:col-span-2">
        <h2 className="text-mgld text-2xl font-semibold mb-2">Got an idea?</h2>
        <p className="text-slate-100 text-3xl font-semibold mb-2">
          Lets work on it.
        </p>
        <p className="text-lg text-slate-300 mb-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          voluptatum quaerat dignissimos est commodi.
        </p>
        <button className="bg-mgld text-white px-5 py-2 text-xl rounded-md">
          Get Started Now
        </button>
      </div>
      <div className="flex justify-end w-full">
        <img
          src={working}
          alt="working"
          className="hidden lg:block h-[15rem]"
        />
      </div>
    </div>
  );
};

export default Cta;
