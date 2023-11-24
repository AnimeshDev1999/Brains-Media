import React from "react";
import close from "../../images/close.svg";
import { useDispatch } from "react-redux";
import { toggle } from "./navStateSlice";

const CloseBtn = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(toggle())}
        className="bg-white p-1 rounded-md overflow-hidden"
      >
        <img src={close} alt="close" className="h-10" />
      </button>
    </div>
  );
};

export default CloseBtn;
