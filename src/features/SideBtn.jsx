const SideBtn = (props) => {
  return (
    <button className="bg-white p-2 flex justify-center items-center flex-col rounded-md overflow-hidden">
      <img src={props.obj.img} alt={props.obj.nam} className="h-10" />
      <p>{props.obj.nam}</p>
    </button>
  );
};

export default SideBtn;
