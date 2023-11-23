const Hero = () => {
  return (
    <div className="flex px-5 items-center py-16">
      <div>
        <h1 className="text-5xl font-semibold mb-5">
          Get your <br /> <span className="text-mgld">business</span> <br />{" "}
          online <br /> in less than <br />{" "}
          <span className="text-mgld">24 hours</span>.
        </h1>
        <p className="text-xl text-slate-500 mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fugiat
          excepturi repudiandae? A sapiente illum officia natus fugiat.
        </p>
        <button className="bg-mgld text-white px-5 py-2 text-xl rounded-md">
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
