import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "./navState/navStateSlice";

const SideBtn = (props) => {
  const dispatch = useDispatch();
  return (
    <Link
      onClick={() => dispatch(toggle())}
      to={props.obj.path}
      className="bg-white p-2 flex justify-center items-center flex-col rounded-md overflow-hidden"
    >
      <img src={props.obj.img} alt={props.obj.nam} className="h-10" />
      <p>{props.obj.nam}</p>
    </Link>
  );
};

export default SideBtn;
