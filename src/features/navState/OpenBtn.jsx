import React from "react";
import menu from "../../images/menu.svg";
import { useDispatch } from "react-redux";
import { toggle } from "./navStateSlice";

const OpenBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className="md:hidden">
      <button
        onClick={() => dispatch(toggle())}
        className="bg-white p-1 rounded-md overflow-hidden"
      >
        <img src={menu} alt="close" className="h-10" />
      </button>
    </div>
  );
};

export default OpenBtn;
