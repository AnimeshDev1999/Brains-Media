import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggle } from "./navState/navStateSlice";

const SideBtn = (props) => {
  const dispatch = useDispatch();
  return (
    <NavLink
      onClick={() => dispatch(toggle())}
      to={props.obj.path}
      state={props.obj.nam}
      className="bg-white p-2 flex justify-center items-center flex-col rounded-md overflow-hidden"
    >
      <img src={props.obj.img} alt={props.obj.nam} className="h-10" />
      <p>{props.obj.nam}</p>
    </NavLink>
  );
};

export default SideBtn;
